import CountryPhoneInput, {
  ConfigProvider,
} from "antd-country-phone-input";

import { useFormikContext } from "formik";
import { Form } from "formik-antd";
import React from "react";
import en from "world_countries_lists/data/countries/en/world.json";
import { validatePhoneNumber } from "../Form/utils/helpers";
import { Label } from "./InputControl";

const PhoneControl = ({ name, itemProps, label, ...rest }) => {
  const [phoneVal, setPhoneVal] = React.useState({ code: 234, phone: "" });
  const { setFieldValue, touched, setFieldTouched, setFieldError } =
    useFormikContext();

  const handleChange = (value, phoneInfo) => {
    if (!touched.phoneNumber) setFieldTouched(name, true);
    const { error, value: newValue } = validatePhoneNumber(value || "");
    setFieldError(name, error);
    setFieldValue(name, newValue, false);
    if (phoneInfo) setPhoneVal(phoneInfo);
  };

  return (
    <Form.Item {...itemProps} name={name} showValidateSuccess>
      {/* <Label>{label}</Label> */}
      <ConfigProvider locale={en}>
        <CountryPhoneInput
          onChange={(val) => handleChange(`+${val.code}${val.phone}`, val)}
          value={phoneVal}
          {...rest}
        />
      </ConfigProvider>
    </Form.Item>
  );
};

export default PhoneControl;
