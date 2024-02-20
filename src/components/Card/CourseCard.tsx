import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CourseModel } from "../../pages/Platform/MyCourses/MyCourses";
import { PageRequestModel } from "../../core/pageRequestModel/pageRequest";
import liveCourseService from "../../services/liveCourseService";
import asyncCourseService from "../../services/asyncCourseService";

type Props = {
  course: CourseModel;
  onDelete?: (id: string) => void;
  title?: string;
};

const CourseCard = (props: Props) => {
  const navigate = useNavigate();
  const pageRequest: PageRequestModel = {
    index: 0,
    size: 10,
  };
  const [asyncCourses, setAsyncCourses] = useState<any[]>([]);
  const [liveCourses, setLiveCourses] = useState<any[]>([]);
  const fetchData = async () => {
    await asyncCourseService.getAll(pageRequest).then((response: any) => {
      const getAsyncCourse: any[] = [...response.data.items];
      const asyncCourseId: any[] = [];
      getAsyncCourse.forEach((item: any) => {
        asyncCourseId.push({
          courseId: item.courseId,
        });
      });
      setAsyncCourses(asyncCourseId);
    });

    await liveCourseService.getAll(pageRequest).then((response: any) => {
      const getLiveCourse: any[] = [...response.data.items];
      const liveCourseId: any[] = [];
      getLiveCourse.forEach((item: any) => {
        liveCourseId.push({
          courseId: item.courseId,
        });
      });
      setLiveCourses(liveCourseId);
    });
  };
  function handleCourseSelect(courseId: string) {
    if (asyncCourses.find((course) => course.courseId === courseId)) {
      navigate(`/asyncContent/${courseId}`);
    } else if (liveCourses.find((course) => course.courseId === courseId)) {
      navigate(`/liveContent/${courseId}`);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="corp-edu-card">
      <img alt="" src={props.course.imageUrl} className="card-img" />
      <div className="card-content">
        <div className="d-flex flex-column">
          <span>{props.course.title}</span>
        </div>
        <Button
          onClick={() => handleCourseSelect(props.course.id)}
          className="apply-btn"
        >
          Eğitime Git
        </Button>
      </div>
    </div>
  );
};
export default CourseCard;