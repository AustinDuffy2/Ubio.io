import React from "react";

import { Text } from "components";

const AboutUsLayout135 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Text
            className="leading-[120.00%] max-w-[1312px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
            size="txtRobotoBold40"
          >
            {props?.headingtext}
          </Text>
          <Text
            className="leading-[150.00%] max-w-[1312px] md:max-w-full text-black-900 text-center text-lg"
            size="txtRobotoRegular18"
          >
            {props?.descriptiontext}
          </Text>
        </div>
      </div>
    </>
  );
};

AboutUsLayout135.defaultProps = {
  headingtext:
    "Transforming the real estate industry with data-driven insights and innovative tools.",
  descriptiontext:
    "Founded in 2015 by a team of real estate enthusiasts, our company has quickly grown to become a leading platform in the industry. We are dedicated to providing comprehensive data trend models and property search tools that empower businesses to make informed decisions.",
};

export default AboutUsLayout135;
