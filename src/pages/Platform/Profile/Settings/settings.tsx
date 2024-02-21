import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UpdatePasswordRequest } from '../../../../models/requests/user/updatePasswordRequest';
import { passwordRule } from '../../../../core/validation/customValidationRules';
import InnerFooter from '../../../../components/Footer/InnerFooter';
import ProfileSidebar from '../../../../components/Sidebar/profileSidebar';
import InnerNavbar from '../../../../components/Navbar/InnerNavbar';
import authService from '../../../../services/authService';
import userService from '../../../../services/userService';
import toastr from 'toastr';
import * as Yup from 'yup';
import './settings.css';

const Settings = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const userId = authService.getUserId();
  const navigate = useNavigate();

  const handleAccountCancellation = async (userId: string) => {
    await userService.delete({ id: userId }).then((response) => {
      toastr.success('Hesabınız başarıyla silindi.');
      authService.logout();
      setTimeout(() => { navigate("/"); }, 200);
    }).catch((error: any) => { console.error(error) });
  };

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Eski Şifre alanı zorunludur.'),
    newPassword: Yup.string().required('Yeni Şifre alanı zorunludur.').min(2, "Şifre en az 2 haneden oluşmalıdır.")
      .max(50).test(
        "is-strong",
        "Bu alan en az 1 büyük, 1 küçük harf ve 1 numerik değer içermelidir",
        passwordRule
      ),
    confirmPassword: Yup.string().required('Yeni Şifre Tekrar alanı zorunludur.').oneOf([Yup.ref('newPassword')], 'Yeni şifreler aynı değil.'),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validationSchema.validate({
        oldPassword,
        newPassword,
        confirmPassword,
      });
      if (newPassword === oldPassword) {
        setErrorMessage('Yeni şifre eski şifreden farklı olmalıdır.');
        return;
      }
      await updatePassword({ oldPassword, newPassword });
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    }
    catch (error: any) {
      setErrorMessage(error.message);
    }
  };
  const updatePassword = async (values: UpdatePasswordRequest) => {
    await userService.UpdatePassword(values).then((response) => {
      if (response.status === 200) {
        toastr.success("Şifreniz başarıyla güncellendi. Lütfen yeniden giriş yapınız.");
        authService.logout();
        navigate('/giris');
      } else {
        toastr.error("Eski şifre hatalı.")
      }
    })
  };

  return (
    <>
      <InnerNavbar />
      <Container>
        <Row>
          <ProfileSidebar />
          <Col lg="9" className='settings-inclusive'>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-2">
                <Form.Group as={Col} md="4" mb="6" controlId="oldPassword">
                  <Form.Label>Eski Şifre*</Form.Label>
                  <Form.Control required placeholder='Eski Şifre' type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col} md="4" mb="6" controlId="newPassword">
                  <Form.Label>Yeni Şifre*</Form.Label>
                  <Form.Control required placeholder='Yeni Şifre' type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col} md="4" mb="6" controlId="confirmPassword">
                  <Form.Label>Yeni Şifre Tekrar*</Form.Label>
                  <Form.Control required placeholder='Yeni Şifre Tekrar' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>
              </Row>
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
              <Button className="col-12 col-md-5 mx-5 rounded-5" variant="primary" type="submit">
                Şifre Değiştir
              </Button>
              <Button onClick={() => setModalShow(true)} className="col-12 col-md-5 rounded-5" variant="danger" type="submit">
                Üyeliği Sonlandır
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal aria-labelledby="contained-modal-title-vcenter" centered backdrop show={modalShow}
        onHide={() => setModalShow(false)} className="alert-modal modal-index"
      >
        <Modal.Body>
          <div className="mw-xl mx-auto">
            <div className="bg-white shadow-lg">
              <div className="alert-header mx-3">
                <span className="alert-icon"></span>
                <span onClick={() => setModalShow(false)} className="alert-close"></span>
              </div>
              <p className="alert-message mx-3">Hesabınızı silmek istediğinize emin misiniz?</p>
              <p className="alert-message-light mx-3">
                Hesabınızı silme işleminden sonrasında bilgileriniz geri alınamaz şekilde silinecektir.
              </p>
              <div className="alert-buttons">
                <Button onClick={() => setModalShow(false)} className="btn btn-no my-3 ">
                  Hayır
                </Button>
                <Button onClick={() => handleAccountCancellation(userId)} className="btn btn-yes my-3">
                  Evet
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <InnerFooter />
    </>
  );
};
export default Settings;