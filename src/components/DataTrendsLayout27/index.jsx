import React from "react";

import { Img, Text } from "components";

const DataTrendsLayout27 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-12 items-start justify-start w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-full"
                size="txtRobotoBold36"
              >
                {props?.headingthree}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1400px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.descriptionThree}
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start py-2 w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-full"
                  size="txtRobotoBold36"
                >
                  {props?.number}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.text}
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-full"
                  size="txtRobotoBold36"
                >
                  {props?.numberone}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.textone}
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="h-[348px] md:h-auto object-cover w-full"
            src="images/img_placeholderimage_344x484.png"
            alt="placeholderimag_One"
          />
        </div>
      </div>
    </>
  );
};

DataTrendsLayout27.defaultProps = {
  headingthree: "Long heading is what you see here in this feature section",
  descriptionThree:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  number: "50%",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  numberone: "50%",
  textone:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
};

export default DataTrendsLayout27;
