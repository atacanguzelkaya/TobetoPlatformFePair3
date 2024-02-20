import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import trLocale from '@fullcalendar/core/locales/tr';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import InnerNavbar from '../Navbar/InnerNavbar';
import './calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState<any>([
    { title: 'Meeting', start: new Date() },
  ]);

  function handleDateSelect(selectInfo: DateSelectArg) {
    let title = prompt('Please enter a new title for your event');
    if (!title) return;
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // seçilen tarihten seçimi kaldır
    setEvents([...events, { title: title, ...selectInfo }]);
  }

  useEffect(() => {
    console.log(events);
  }, [events]);


  // const { user, onShowAlert } = useContext(UserContext);
  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   if (user.jwt) {
  //     fetch('https://local:3000/api/general-calender', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${user.jwt}`,
  //       },
  //       body: JSON.stringify({
  //         data: {
  //           path: 'ders',
  //         },
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.data !== null) {
  //           setEvents(data);
  //         } else {
  //           setEvents([]);
  //           onShowAlert(data.error.message, 'danger', true);
  //         }
  //       });
  //   }
  // }, [user.jwt]);

  return (
    <>
      <InnerNavbar />
      <div className="light-calendar container-fluid p-0">
        <Row className='mx-5 mb-5'>
          <div className='col-lg-3 col-md-4 col-mt-3 col-12 p-0'>
            <div className='filter-left equal-box'>
              <div className="d-flex flex-column">
                <div className="filter-header mb-2">
                  <span>Eğitim Arama</span>
                </div>
                <Form.Control type="text" id="search-event" className="cal-filter-input" placeholder="Eğitim arayın..." />
              </div>
              <div className="d-flex flex-column">
                <div className="filter-header mb-2">
                  <span>Eğitmen</span>
                </div>
                <Form>
                  <Form.Group controlId="formCalendarSelect">
                    <Form.Control as="select">
                      <option value="">Eğitmen Seçiniz</option>
                      <option value="1">Eğitmen 1</option>
                      <option value="2">Eğitmen 2</option>
                      <option value="3">Eğitmen 3</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </div>
              <div className="d-flex flex-column">
                <div className="filter-header mb-2">
                  <span>Eğitim Durumu</span>
                </div>
                <div className="edu-status-filter">
                  <span>
                    <input
                      className="form-check-input me-2 checkEventEnded"
                      type="checkbox"
                      name="eventEnded"
                      defaultValue="eventEnded"
                    />
                    Bitmiş Dersler
                  </span>
                  <span>
                    <input
                      className="form-check-input me-2 checkEventContinue"
                      type="checkbox"
                      name="eventContinue"
                      defaultValue="eventContinue"
                    />
                    Devam Eden Dersler
                  </span>
                  <span>
                    <input
                      className="form-check-input me-2 checkEventBuyed"
                      type="checkbox"
                      name="eventBuyed"
                      defaultValue="eventBuyed"
                    />
                    Satın Alınmış Dersler
                  </span>
                  <span>
                    <input
                      className="form-check-input me-2 checkEventNotStarted"
                      type="checkbox"
                      name="eventNotStarted"
                      defaultValue="eventNotStarted"
                    />
                    Başlamamış Dersler
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-9 col-md-8 col-mt-3 col-12 p-0'>
            <div className="card p-5">
              <FullCalendar
                locales={[trLocale]}
                locale="tr"
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: 'today prev,next',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                weekends={true}
                events={events}
                select={(arg) => handleDateSelect(arg)} // tarihlerden herhangi birisi seçildiğinde tetiklenir.
                eventContent={renderEventContent} // tarihlerin gösterileceği fonksiyon, aslında bir component
                eventClick={(arg) => console.log(arg)} // tarihin içindeki eventlere tıklandığında tetiklenir
                eventsSet={(arg) => console.log(arg)} // ay,hafta,gün gibi seçimlerde tetiklenir.
              />
            </div>
          </div>
        </Row>
      </div >
    </>
  );
};

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Calendar;
