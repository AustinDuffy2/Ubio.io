import React from "react";

import { Img, Line, Text } from "components";

const PropertyDetailsTestimonial14 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-full">
          <div className="bg-gray-200 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <Img
              className="h-[640px] w-full"
              src="images/img_placeholderlightbox.svg"
              alt="placeholderligh"
            />
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Img
                className="h-[18px] w-[116px]"
                src="images/img_stars.svg"
                alt="stars"
              />
              <Text
                className="leading-[140.00%] max-w-[665px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtRobotoBold24"
              >
                {props?.userdescription}
              </Text>
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoSemiBold16"
                  >
                    {props?.username}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.userposition}
                  </Text>
                </div>
                <Line className="bg-black-900 h-[61px] w-px" />
                <Img
                  className="h-12 w-[120px]"
                  src="images/img_webflowblack.svg"
                  alt="webflowblack"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsTestimonial14.defaultProps = {
  userdescription: (
    <>
      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae
      erat.&quot;
    </>
  ),
  username: "Name Surname",
  userposition: "Position, Company name",
};

export default PropertyDetailsTestimonial14;
