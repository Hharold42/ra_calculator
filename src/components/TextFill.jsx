import React from "react";

const TextFill = ({ children, ...props }) => {
  const MAX_SIZE = 10;
  const MIN_SIZE = 3;
  const sizeType = "vw";

  const sizeHandler = (length) => {
    console.log(length);
    const res = MAX_SIZE - (length > MIN_SIZE ? length : MIN_SIZE) + sizeType
    return res
};

  return <div {...props} style={{ fontSize: sizeHandler(children.length) }}>{children}</div>;
};

export default TextFill;
