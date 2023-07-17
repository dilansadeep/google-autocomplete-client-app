import React, { memo } from "react";
import { Spin as AntSpin } from "antd";
import "./Spinner.scss";

const Spinner = memo((props) => {
  const { exClass = "", size = "large", ...rest } = props;

  return (
    <div className={`spinner-wrapper ${exClass}`}>
      <AntSpin size={size} {...rest} />
    </div>
  );
});

export default Spinner;
