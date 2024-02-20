import { Link, useLocation } from 'react-router-dom';

const ProfileSidebar = () => {
  const location = useLocation();
  const sidebarLinks = [
    { path: '/profilim/profilimi-duzenle/kisisel-bilgilerim', icon: 'personel-informations', text: 'Kişisel Bilgilerim' },
    { path: '/profilim/profilimi-duzenle/deneyimlerim', icon: 'experience', text: 'Deneyimlerim' },
    { path: '/profilim/profilimi-duzenle/egitim-hayatim', icon: 'educations', text: 'Eğitim Hayatım' },
    { path: '/profilim/profilimi-duzenle/yetkinliklerim', icon: 'abilities', text: 'Yetkinliklerim' },
    { path: '/profilim/profilimi-duzenle/sertifikalarim', icon: 'certificates', text: 'Sertifikalarım' },
    { path: '/profilim/profilimi-duzenle/medya-hesaplarim', icon: 'languages', text: 'Medya Hesaplarım' },
    { path: '/profilim/profilimi-duzenle/yabanci-dil', icon: 'languages2', text: 'Yabancı Dillerim' },
    { path: '/profilim/profilimi-duzenle/ayarlar', icon: 'settings', text: 'Ayarlar' }
  ];

  return (
    <div className="col-12 col-lg-3 mb-lg-0">
      <div className="p-2 py-4 mobile-sidebar">
        {sidebarLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`btn mb-2 text-start w-100 sidebar-link ${location.pathname === link.path ? 'active-edit' : ''}`}
          >
            <span className={link.icon}></span>
            <span className="sidebar-text">{link.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ProfileSidebar;