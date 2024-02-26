import { ErrorMessage, Field } from "formik";

type Props = {
  name: string;
  type?: string;
  placeholder?: string;
  as?: string;
};

const FormikInput = (props: Props) => {
  return (
    <div className="mb-3">
      {/* <label className="form-label">{props.label}</label> */}
      <Field
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
        as={props.as}
        className="form-control"
      />
      <ErrorMessage name={props.name}>
        {(message) => <p className="text-danger">{message}</p>}
      </ErrorMessage>
    </div>
  );
};
export default FormikInput;