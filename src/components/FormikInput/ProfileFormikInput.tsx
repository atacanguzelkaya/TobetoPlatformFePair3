import { ErrorMessage, Field } from "formik";
import { Col } from "react-bootstrap";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  as?: string;
  value?: any;
};

const ProfileFormikInput = (props: Props) => {
  return (
    <Col className="mb-3">
      <label className="form-label">{props.label}</label>
      <Field
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
        className={props.className || "form-control"}
        as={props.as}
        value={props.value}
      />
      <ErrorMessage name={props.name}>
        {(message) => <p className="text-danger">{message}</p>}
      </ErrorMessage>
    </Col>
  );
};
export default ProfileFormikInput;