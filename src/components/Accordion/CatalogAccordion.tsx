import { Accordion, Col, Form } from "react-bootstrap";

function CatalogAccordion() {
  const FilterIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#828282"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const categories = [
    { id: 0, label: "Tüm Eğitimler" },
    { id: 1, label: "Ücretli Eğitimler" },
    { id: 2, label: "Ücretsiz Eğitimler" },
  ];

  const educations = [
    { id: -0, label: "Tüm Eğitimler" },
    { id: 3, label: "Dijital Gelişim" },
    { id: 4, label: "Profesyonel Gelişim" },
  ];

  const levels = [
    { id: 0, label: "Tüm Seviyeler" },
    { id: 1, label: "Başlangıç" },
    { id: 2, label: "Orta" },
    { id: 3, label: "İleri" },
  ];

  const topics = [
    { id: 0, label: "Tüm Konular" },
    { id: 1, label: "C#" },
    { id: 2, label: "Çeşitlilik ve Kapsayıcılık" },
    { id: 3, label: "Başarı ve Sonuç Odaklılık" },
  ];

  const languages = [
    { id: 0, label: "Tüm Diller" },
    { id: 1, label: "ASPNET" },
    { id: 2, label: "BOOTSTRAP" },
    { id: 3, label: "SASS" },
  ];

  const instructors = [
    { id: 0, label: "Tüm Eğitmenler" },
    { id: 1, label: "Engin Demiroğ" },
    { id: 2, label: "Halit Enes Kalaycı" },
    { id: 3, label: "İrem Balcı" },
  ];

  return (
    <Col lg="3" md="4" className="light">
      <div className="filter dm-none">
        <h2>Filtrele</h2>
        <hr />
        <Accordion className="spec-acc">
          <Accordion.Item eventKey="kategori">
            <Accordion.Header>
              <div className="title w-100">
                <span>Kategori</span>
                <FilterIcon />
              </div>
            </Accordion.Header>
            <Accordion.Item eventKey="kategori">
              <Accordion.Body>
                <Form.Control
                  type="text"
                  className="form-control mt-3 mb-3"
                  placeholder="Arama"
                />
                <ul>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Form.Check
                        type="radio"
                        name="cat"
                        value={category.id}
                        label={category.label}
                      />
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion.Item>
          <Accordion.Item eventKey="egitimler">
            <Accordion.Header>
              <div className="title w-100">
                <span>Eğitimler</span>
                <FilterIcon />
              </div>
            </Accordion.Header>
            <Accordion.Item eventKey="egitimler">
              <Accordion.Body>
                <Form.Control
                  type="text"
                  className="form-control mt-3 mb-3"
                  placeholder="Arama"
                />
                <ul>
                  {educations.map((education) => (
                    <li key={education.id}>
                      <Form.Check
                        type="radio"
                        name="edu"
                        value={education.id}
                        label={education.label}
                      />
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion.Item>
          <Accordion.Item eventKey="seviye">
            <Accordion.Header>
              <div className="title w-100">
                <span>Seviye</span>
                <FilterIcon />
              </div>
            </Accordion.Header>
            <Accordion.Item eventKey="seviye">
              <Accordion.Body>
                <Form.Control
                  type="text"
                  className="form-control mt-3 mb-3"
                  placeholder="Arama"
                />
                <ul>
                  {levels.map((level) => (
                    <li key={level.id}>
                      <Form.Check
                        type="radio"
                        name="level"
                        value={level.id}
                        label={level.label}
                      />
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion.Item>
          <Accordion.Item eventKey="konu">
            <Accordion.Header>
              <div className="title w-100">
                <span>Konu</span>
                <FilterIcon />
              </div>
            </Accordion.Header>
            <Accordion.Item eventKey="konu">
              <Accordion.Body>
                <Form.Control
                  type="text"
                  className="form-control mt-3 mb-3"
                  placeholder="Arama"
                />
                <ul>
                  {topics.map((topic) => (
                    <li key={topic.id}>
                      <Form.Check
                        type="radio"
                        name="edu"
                        value={topic.id}
                        label={topic.label}
                      />
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion.Item>
          <Accordion.Item eventKey="yazılımdili">
            <Accordion.Header>
              <div className="title w-100">
                <span>Yazılım Dili</span>
                <FilterIcon />
              </div>
            </Accordion.Header>
            <Accordion.Item eventKey="yazılımdili">
              <Accordion.Body>
                <Form.Control
                  type="text"
                  className="form-control mt-3 mb-3"
                  placeholder="Arama"
                />
                <ul>
                  {languages.map((language) => (
                    <li key={language.id}>
                      <Form.Check
                        type="radio"
                        name="edu"
                        value={language.id}
                        label={language.label}
                      />
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion.Item>
          <Accordion.Item eventKey="egitmen">
            <Accordion.Header>
              <div className="title w-100">
                <span>Eğitmen</span>
                <FilterIcon />
              </div>
            </Accordion.Header>
            <Accordion.Item eventKey="egitmen">
              <Accordion.Body>
                <Form.Control
                  type="text"
                  className="form-control mt-3 mb-3"
                  placeholder="Arama"
                />
                <ul>
                  {instructors.map((instructor) => (
                    <li key={instructor.id}>
                      <Form.Check
                        type="radio"
                        name="edu"
                        value={instructor.id}
                        label={instructor.label}
                      />
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion.Item>
        </Accordion>
      </div>
    </Col>
  );
}

export default CatalogAccordion;