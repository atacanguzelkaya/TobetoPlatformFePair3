import { Link } from "react-router-dom";
import './footer.css';

const InnerFooter = () => {
  return (
    <section className="bg-indigo footer">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-6 col-lg-4 mb-lg-0 my-4">
            <Link className="d-block mobile-text-center navbar-brand" to="/platform">
            <span className="brand-span">
                <span>
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%2721%27/%3e"
                    className="logo-img"
                  />
                  <img
                    alt=""
                    src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75"
                    decoding="async" data-nimg="intrinsic"
                    className="logo-img"
                  />
                </span>
              </span>
            </Link>
          </div>
          <div className="col-6 col-lg-8 my-4">
            <ul className="list-unstyled mb-0 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end">
              <li className=" mb-lg-0">
                <Link className="btn text-light" to="/iletisim">
                  Bize Ulaşın
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <p className="small text-white text-center">
              © 2024 Tobeto .Net 1A Pair 3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InnerFooter;