import React from "react";

import { Img, Text } from "components";

const PropertyDetailsLayout90 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Text
              className="leading-[120.00%] max-w-[616px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtRobotoBold40"
            >
              {props?.headingtext}
            </Text>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Text
              className="leading-[150.00%] max-w-[616px] md:max-w-full text-black-900 text-lg"
              size="txtRobotoRegular18"
            >
              {props?.descriptiontext}
            </Text>
          </div>
        </div>
        <Img
          className="h-[738px] md:h-auto object-cover w-full"
          src="images/img_placeholderimage_738x1312.png"
          alt="placeholderimag_Four"
        />
      </div>
    </>
  );
};

PropertyDetailsLayout90.defaultProps = {
  headingtext: "Unlock AI-Driven Insights for Better Business Decisions",
  descriptiontext:
    "Discover valuable property value trends and neighborhood data to help you make informed decisions about real estate investments. Our AI-driven platform provides comprehensive data and powerful search tools, giving you a competitive edge in the market.",
};

export default PropertyDetailsLayout90;
