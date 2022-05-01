import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...Props }) => {
  return <CustomButtonContainer {...Props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
