import { useEffect, useState } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import { CreateAbilityRequest } from '../../../../models/requests/ability/createAbilityRequest';
import { PageRequestModel } from '../../../../core/pageRequestModel/pageRequest';
import ProfileSidebar from '../../../../components/Sidebar/profileSidebar';
import InnerNavbar from '../../../../components/Navbar/InnerNavbar';
import InnerFooter from '../../../../components/Footer/InnerFooter';
import ProfileFormikInput from '../../../../components/FormikInput/ProfileFormikInput';
import abilityService from '../../../../services/abilityService';
import authService from '../../../../services/authService';
import * as Yup from "yup";

export interface AbilityModel {
  id: string;
  name: string;
}
export interface GetAllAbilitiesModel { from: number; index: number; size: number; count: number; page: number; items: AbilityModel[]; hasPrevious: boolean; hasNext: boolean; }
const pageRequest: PageRequestModel = { index: 0, size: 10, };

const MyAbilities = () => {
  const [abilities, setAbilities] = useState<CreateAbilityRequest>();
  const [abilityList, setAbilityList] = useState<AbilityModel[]>([]);

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
  });

  const initialValues = {
    name: "",
  };

  const handleSubmit = async (values: CreateAbilityRequest) => {
    await abilityService.create(values).then((response) => {
      setAbilities(response.data)
      fetchAbility(pageRequest);
    }).catch((error: any) => { console.error(error) });
  };
  const fetchAbility = async (pageRequest: any) => {
    await abilityService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      if (response) {
        const matchingAbility = response.data.items.filter((item: any) =>
          item.userId === userId);
        setAbilityList(matchingAbility);
      }
    });
  };
  const handleAbilityDelete = async (idToDelete: string) => {
    await abilityService.delete({ id: idToDelete });
    const deletedAbility = abilityList.filter(ability => ability.id !== idToDelete);
    setAbilityList(deletedAbility);
  };
  useEffect(() => { fetchAbility(pageRequest); }, []);

  return (
    <>
      <InnerNavbar />
      <Container>
        <Row>
          <ProfileSidebar />
          <Col lg="9" className="inclusive">
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <Form>
                <Row className="mb-3">
                  <ProfileFormikInput name="name" label="Yetkinlik" placeholder=".Net" />
                </Row>
                <Button variant="primary" type="submit">
                  Kaydet
                </Button>
              </Form>
            </Formik>
            <Col xs={12}>
              {abilityList?.map((ability) => (
                <div className="my-grade" key={ability.id}>
                  <div className="grade-details">
                    <Col as="span" className="grade-details-col">
                      <span className="grade-details-content">
                        {ability.name}
                      </span>
                    </Col>
                    <span
                      className="grade-delete g-del"
                      onClick={() => handleAbilityDelete(ability.id)}
                    ></span>
                  </div>
                </div>
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
      <InnerFooter />
    </>
  );
};
export default MyAbilities;