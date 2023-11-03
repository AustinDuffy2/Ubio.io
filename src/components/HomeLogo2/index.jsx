import React from "react";

import { Img, Text } from "components";

const HomeLogo2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row md:gap-10 gap-16 items-center justify-center w-full">
          {!!props?.headingThree ? (
            <Text
              className="leading-[140.00%] md:max-w-full max-w-xs text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtRobotoBold24"
            >
              {props?.headingThree}
            </Text>
          ) : null}
          {!!props?.logoimage ? (
            <Img
              className="flex-1 h-44 max-h-44 sm:w-[]"
              alt="logoThree"
              src={props?.logoimage}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

HomeLogo2.defaultProps = {};

export default HomeLogo2;
