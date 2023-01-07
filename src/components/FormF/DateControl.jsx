import React from "react";

import { DatePicker, DatePickerProps, Form } from "formik-antd";
import { Label } from "./InputControl";
import { useFormikContext } from "formik";

function DateControl({ label, itemProps, name, ...rest }) {
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <Label>{label}</Label>
      <Form.Item {...itemProps} name={name} showValidateSuccess>
        <DatePicker
          onChange={(val) => setFieldValue(name, val?.toISOString())}
          name={name}
          {...rest}
        />
      </Form.Item>
    </div>
  );
}

DateControl.propTypes = {};

export default DateControl;
