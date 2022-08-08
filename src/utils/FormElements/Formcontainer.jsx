import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../utils/FormElements/FormikControl";

const FormicContaner = () => {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const checkboxOptions = [
    { key: "cOption 1", value: "coption1" },
    { key: "cOption 2", value: "coption2" },
    { key: "cOption 3", value: "coption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    description: Yup.string().required("Description is Required"),
    selectOption: Yup.string().required("Description is Required"),
    radioOption: Yup.string().required("Requied"),
    checkboxOption: Yup.array().required("Required"),
  });
  const onSubmit = (values) => console.log("Form date", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(Formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email : "
            name="email"
            placeholder="Email"
            autoComplete="off"
          />

          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />

          <FormikControl
            control="select"
            label="Select a topic : "
            name="selectOption"
            options={dropdownOptions}
          />

          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />

          <FormikControl
            control="checkbox"
            label="Check topics"
            name="checkboxOption"
            options={checkboxOptions}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormicContaner;
