import { Link } from "react-router-dom";
import './banner.css';

const OutBanner = () => {
    return (
        <div className="ik-banner">
            <div className="container">
                <div className="ik-banner-top">
                    <div>
                        <span className="ik-logo" />
                    </div>
                    <div className="mobile-none">
                        <span className="text-ik fw-bold">
                            Aradığın <span className="text-success">"</span>
                            İş<span className="text-success">"</span> Burada!
                        </span>
                    </div>
                    <div>
                        <Link className="btn d-md-inline-block text-dark px-5 rounded-5 btn-success" to="/istanbul-kodluyor" >
                            <b>Başvur</b>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutBanner;