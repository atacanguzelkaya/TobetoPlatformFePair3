import './not-found.css';
const NotFound = () => {
	return (
		<section className="wrapper bg-front-dark" >
      <div className="container-404">
        <div id="scene" className="scene" data-hover-only="false">
          <div className="two" data-depth="0.60">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
          <div className="three" data-depth="0.40">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
          <p className="p404" data-depth="0.50">404</p>
          <p className="p404" data-depth="0.10">404</p>
        </div>
        <div className="text">
          <article>
            <p className="fw-bold">Sayfa Bulunamadı</p>
          </article>
        </div>
      </div>
    </section>
	);
};

export default NotFound;