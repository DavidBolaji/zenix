import styled from "@emotion/styled";
import { Card } from "antd";
import { ErrorMessage, Field, useFormikContext } from "formik";
// import { FemaleIcon, MaleIcon } from 'icons';
import React from "react";
import { FaCheck } from "react-icons/fa";

const getActiveColor = (activeValue, value) =>
  value === activeValue ? "text-[#b7076b]" : "text-[rgba(232,240,254)]";


const StyledCard = styled(Card)`
  width: 100px;
  height: 100px;

  p {
    font-size: 8px;
  }
`

const genderIcons = {
  start: <StyledCard title={'title'} bordered={true}>
      <p>Basic</p>
      <p>&#8358; 1000/quarterly</p>
      <p><FaCheck /> Access to all resources</p>
      <p><FaCheck /> Access to all resources</p>
      <p><FaCheck /> Access to all resources</p>
      <p><FaCheck /> Access to all resources</p>
    </StyledCard>,
  premium: <StyledCard title={'title2'} bordered={true}>
      <p>Basic</p>
      <p>&#8358; 1000/quarterly</p>
      <p><FaCheck /> Access to all resources</p>
      <p><FaCheck /> Access to all resources</p>
      <p><FaCheck /> Access to all resources</p>
      <p><FaCheck /> Access to all resources</p>
    </StyledCard>,
};

function GenderControl({ name, options = ["start", "premium"] }) {
  const { values } = useFormikContext();

  const safelyGetNestedValues = (nameStr) => {
    const nameArr = nameStr.split(".");

    if (nameArr?.length > 1) {
      return nameArr.reduce((acc, currKey) => {
        return acc[currKey];
      }, values);
    } else {
      return values[name];
    }
  };

  return (
    <div>
      {options?.map((opt) => (
        <Field
          type="radio"
          key={`radio_${opt}`}
          id={opt}
          name={name}
          className="hidden"
          value={opt}
        />
      ))}

      <Field
        type="radio"
        id="female"
        name={name}
        className="hidden"
        value="female"
      />
      
      <div className="flex items-center gap-4">
        {options?.map((opt) => (
          <label
            key={`label_${opt}`}
            htmlFor={opt}
            className={`${getActiveColor(
              opt,
              safelyGetNestedValues(name)
            )} cursor-pointer flex flex-col items-center`}
          >
            {genderIcons[opt]}
            <span className="text-[#3E4954] text-xs capitalize">{opt}</span>
          </label>
        ))}
      </div>
      <span className="text-red-500">
        <ErrorMessage name="gender" />
      </span>
    </div>
  );
}

GenderControl.propTypes = {};

export default GenderControl;
