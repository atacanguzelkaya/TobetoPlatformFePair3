import { useEffect, useState } from "react";
import { PageRequestModel } from "../../../../core/pageRequestModel/pageRequest";
import personallnfoService from "../../../../services/personallnfoService";
import authService from "../../../../services/authService";
import abilityService from "../../../../services/abilityService";
import foreignLanguageService from "../../../../services/foreignLanguageService";
import certificateService from "../../../../services/certificateService";
import socialAccountService from "../../../../services/socialAccountService";
import educationService from "../../../../services/educationService";
import experienceService from "../../../../services/experienceService";

function UserFullName() {
  const userData = JSON.parse(localStorage.getItem("user")!);
  if (userData) {
    return userData.firstName + " " + userData.lastName;
  }
}
const pageRequest: PageRequestModel = { index: 0, size: 10 };

const cleanUrl = (url: any) => {
  return url.replace(/[ğüşıöçĞÜŞİÖÇ\s]/g, "").toLowerCase();
};

const badges = [
  "https://tobeto.s3.cloud.ngn.com.tr/47_8e68f57081.jpg",
  "https://tobeto.s3.cloud.ngn.com.tr/45_8c2d4f045e.jpg",
  "https://tobeto.s3.cloud.ngn.com.tr/49_d008f4744f.jpg",
  "https://tobeto.s3.cloud.ngn.com.tr/50_ed97fba9cd.jpg",
  "https://tobeto.s3.cloud.ngn.com.tr/51_8b7101c167.jpg",
  "https://tobeto.s3.cloud.ngn.com.tr/52_812ac86b23.jpg",
  "https://tobeto.s3.cloud.ngn.com.tr/53_a3c8066966.jpg",
  "https://tobeto.s3.cloud.ngn.com.tr/54_791b0b0a35.jpg",
  "https://tobeto.s3.cloud.ngn.com.tr/55_039e2cd2b7.jpg",
];

const legendData = [
  { legend: "5", legendName: "Yeni dünyaya hazırlanıyorum" },
  { legend: "5", legendName: "Profesyonel duruşumu geliştiriyorum" },
  { legend: "5", legendName: "Kendimi tanıyor ve yönetiyorum" },
  { legend: "5", legendName: "Yaratıcı ve doğru çözümler geliştiriyorum" },
  { legend: "5", legendName: "Kendimi sürekli geliştiriyorum" },
  { legend: "5", legendName: "Başkaları ile birlikte çalışıyorum" },
  { legend: "5", legendName: "Sonuç ve başarı odaklıyım" },
  { legend: "5", legendName: "Anlıyorum ve anlaşılıyorum" },
];
const MyProfileLogic = () => {
  const [userName, setUserName] = useState<string>();
  useEffect(() => {
    const user = UserFullName();
    setUserName(user);
  }, []);

  const [personalInfoList, setPersonalInfoList] = useState<any[]>([]);
  const [abilityList, setAbilityList] = useState<any[]>([]);
  const [foreignLanguageList, setForeignLanguageList] = useState<any[]>([]);
  const [certificateList, setCertificateList] = useState<any[]>([]);
  const [socialMediaList, setSocialMediaList] = useState<any[]>([]);
  const [educationList, setEducationList] = useState<any[]>([]);
  const [experienceList, setExperienceList] = useState<any[]>([]);

  const fetchData = async () => {
    await personallnfoService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      const personalInfoData: any[] = [];
      response.data.items.forEach((item: any) => {
        const x = item.userId;
        if (x === userId) {
          personalInfoData.push({
            about: item.about,
            phoneNumber: item.phoneNumber,
            email: item.email,
            birthDate: item.birthDate,
          });
        }
      });
      setPersonalInfoList(personalInfoData);
    });

    await abilityService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      const abilityData: any[] = [];
      response.data.items.forEach((item: any) => {
        const x = item.userId;
        if (x === userId) {
          abilityData.push({
            id: item.id,
            name: item.name,
          });
        }
      });
      setAbilityList(abilityData);
    });

    await foreignLanguageService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      const foreignLanguageData: any[] = [];
      response.data.items.forEach((item: any) => {
        const x = item.userId;
        if (x === userId) {
          foreignLanguageData.push({
            id: item.id,
            name: item.name,
            languageLevel: item.languageLevel,
          });
        }
      });
      setForeignLanguageList(foreignLanguageData);
    });

    await certificateService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      const certificateData: any[] = [];
      response.data.items.forEach((item: any) => {
        const x = item.userId;
        if (x === userId) {
          const filePath = item.filePath.replace(/^.*[\\\/]/, "");
          certificateData.push({
            id: item.id,
            filePath: filePath,
          });
        }
      });
      setCertificateList(certificateData);
    });

    await socialAccountService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      const socialAccountData: any[] = [];
      response.data.items.forEach((item: any) => {
        const x = item.userId;
        if (x === userId) {
          socialAccountData.push({
            id: item.id,
            name: item.name,
            accountUrl: cleanUrl(item.accountUrl),
          });
        }
      });
      setSocialMediaList(socialAccountData);
    });

    await educationService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      const educationData: any[] = [];
      response.data.items.forEach((item: any) => {
        const x = item.userId;
        if (x === userId) {
          educationData.push({
            id: item.id,
            university: item.university,
            department: item.department,
            startDate: item.startDate,
            graduationYear: item.graduationYear,
          });
        }
      });
      setEducationList(educationData);
    });

    await experienceService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      const experienceData: any[] = [];
      response.data.items.forEach((item: any) => {
        const x = item.userId;
        if (x === userId) {
          const startDateParts = item.startDate.split("T")[0];
          const endDateParts = item.endDate.split("T")[0];
          experienceData.push({
            id: item.id,
            organizationName: item.organizationName,
            position: item.position,
            startDate: startDateParts,
            endDate: endDateParts,
          });
        }
      });
      setExperienceList(experienceData);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    userName,
    personalInfoList,
    abilityList,
    foreignLanguageList,
    certificateList,
    socialMediaList,
    educationList,
    experienceList,
  };
};

export { badges, legendData, UserFullName, MyProfileLogic, cleanUrl };
