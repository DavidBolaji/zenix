import React from "react";
import { Form, Field } from "formik";
import { AntInput, AntPassword } from "../controls/FormControls";

import { validateEmail, validatPassword } from "../validate/validate";
import FormPhone from "../../Form3/FormPhone";
import FormSelect from "../../Form3/FormSelect";

const planOptions = [
  { key: "Select Option", value: "" },
  { key: "Starter--1500/3months", value: "starter" },
  { key: "Premium--3000/year", value: "premium" }
];


export const Display2 = ({
  handleSubmit,
  values,
  submitCount,
  isSubmitting,
}) => (
  <Form className="form-container" onSubmit={handleSubmit}>
    <Field
      component={AntInput}
      name="email"
      type="email"
      placeholder="Enter Email"
      validate={validateEmail}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntPassword}
      name="password"
      placeholder="Enter Password"
      type="password"
      validate={validatPassword}
      hasFeedback
    />

    <FormPhone
        control="phone"
        name="phone"
        label="Phone Number:"
        formik={handleSubmit}
      />

      <FormSelect
        control="plan"
        name="plan"
        options={planOptions}
      />

    <div className="submit-container">
      <button
        className="ant-btn ant-btn-primary"
        type="submit"
        // disabled={isSubmitting}
      >
        Sign Up
      </button>
    </div>
  </Form>
);
