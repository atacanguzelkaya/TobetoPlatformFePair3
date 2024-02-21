import { useEffect, useState } from "react";
import { PageRequestModel } from "../../../../core/pageRequestModel/pageRequest";
import { CreatePersonalInfoRequest } from "../../../../models/requests/personalInfo/createPersonalInfoRequest";
import { getCities } from "turkey-neighbourhoods";
import personallnfoService from "../../../../services/personallnfoService";
import authService from "../../../../services/authService";
import * as Yup from "yup";

export interface EditListProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  profileImageUrl: string;
  birthDate: string;
  nationalIdentity: string;
  country: string;
  city: string;
  district: string;
  address: string;
  about: string;
}
export interface GetAllEducationsModel {
  from: number;
  index: number;
  size: number;
  count: number;
  page: number;
  items: EditListProfile[];
  hasPrevious: boolean;
  hasNext: boolean;
}
const pageRequest: PageRequestModel = { index: 0, size: 10 };
const cities = getCities();
const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  profileImageUrl: "",
  birthDate: "",
  nationalIdentity: "",
  email: "",
  country: "",
  city: "",
  district: "",
  address: "",
  about: "",
};
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("İsim zorunludur."),
  lastName: Yup.string().required("Soyisim zorunludur."),
  phoneNumber: Yup.string().required("Telefon zorunludur."),
  birthDate: Yup.string().required("Doğum tarihi zorunludur."),
  nationalIdentity: Yup.string()
    .required("TC no zorunludur.")
    .min(11, "11 Karakterden oluşmalıdır")
    .max(11, "11 Karakterden oluşmalıdır"),
  email: Yup.string().required("Email zorunludur."),
  country: Yup.string().required("Ülke zorunludur."),
  city: Yup.string().required("Şehir zorunludur."),
  district: Yup.string().required("İlçe zorunludur."),
  address: Yup.string().required("Adres zorunludur."),
  about: Yup.string().required("Hakkımda açıklaması zorunludur."),
  profileImageUrl: Yup.string().required("Profil resim Url giriniz."),
});

const EditProfileLogic = () => {
  const pageRequest: PageRequestModel = { index: 0, size: 10 };
  const [editProfile, setEditProfile] = useState<CreatePersonalInfoRequest>();
  const [editProfileList, setEditProfileList] = useState<EditListProfile[]>([]);

  const fetchEditProfile = async (pageRequest: any) => {
    await personallnfoService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      if (response) {
        const matchingProfiles = response.data.items.filter(
          (item: any) => item.userId === userId
        );
        setEditProfileList(matchingProfiles);
      }
    });
  };
  const handleEditProfileDelete = async (idToDelete: string) => {
    await personallnfoService.delete({ id: idToDelete });
    const deletedEditProfile = editProfileList.filter(
      (editProfile) => editProfile.id !== idToDelete
    );
    setEditProfileList(deletedEditProfile);
  };
  const handleSubmit = async (values: CreatePersonalInfoRequest) => {
    await personallnfoService
      .create(values)
      .then((response) => {
        setEditProfile(response.data);
        fetchEditProfile(pageRequest);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchEditProfile(pageRequest);
  }, []);

  return {
    editProfile,
    editProfileList,
    handleEditProfileDelete,
    handleSubmit,
  };
};

export { cities, initialValues, validationSchema, EditProfileLogic };