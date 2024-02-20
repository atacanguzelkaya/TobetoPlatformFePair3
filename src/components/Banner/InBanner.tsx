import './banner.css';

const InBanner = () => {
    return (
        <div className="position-relative">
            <div className="tobeto-banner bg-primary text-white p-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-9">
                            <h1 className="fw-bold">Tobeto ile geleceğini keşfet</h1>
                        </div>
                        <div className="col-3 text-end">
                            <a data-bs-toggle="modal" href="#TobetoVideo" role="button" className="video-btn btn btn-light">
                                İzle <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5835 2.75L17.4168 11L4.5835 19.25V2.75Z" stroke="blue" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tobeto-banner-shadow position-absolute w-100 h-100 top-0 start-0" ></div>
        </div>
    );
};

export default InBanner;