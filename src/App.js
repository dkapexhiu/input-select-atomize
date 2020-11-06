import React from "react";
import atomize from "@quarkly/atomize";

const Select = ({
  opt1 = "Label1",
  opt2 = "Label2",
  opt3 = "Label3",
  ...props
}) => {
  const handleSelectChange = e => {
    console.clear(), console.log(e.target.value);
  };
  return (
    <div {...props}>
      <select onChange={e => handleSelectChange(e)} name="role" tabindex="1">
        <option value={`${opt1}`}>{`${opt1}`}</option>
        <option value={`${opt2}`}>{`${opt2}`}</option>
        <option value={`${opt3}`}>{`${opt3}`}</option>
      </select>
    </div>
  );
};

const SelectContainer = atomize(Select)({
  name: "Select Role",
  description: "",
  propInfo: {
    opt1: {
      control: "input",
      category: "Main"
    },
    opt2: {
      control: "input",
      category: "Main"
    },
    opt3: {
      control: "input",
      category: "Main"
    }
  }
});

export default SelectContainer;
