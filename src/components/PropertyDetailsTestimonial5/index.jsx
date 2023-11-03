import React from "react";

import { Img, List, Text } from "components";

const PropertyDetailsTestimonial5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
            size="txtRobotoBold48"
          >
            {props?.headingfour}
          </Text>
          <Text
            className="text-black-900 text-lg w-full"
            size="txtRobotoRegular18"
          >
            {props?.textfive}
          </Text>
        </div>
        <List
          className="bg-white-A700 sm:flex-col flex-row gap-2.5 grid md:grid-cols-1 grid-cols-2 justify-center p-2.5 w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col gap-8 items-center justify-end w-full">
              <Img
                className="h-[18px] w-[116px]"
                src="images/img_stars.svg"
                alt="stars"
              />
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <Text
                  className="leading-[140.00%] text-black-900 text-center text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.userdescriptionone}
                </Text>
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <Img
                    className="h-14 md:h-auto rounded-[50%] w-14"
                    src="images/img_avatarimage.png"
                    alt="avatarimage"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoSemiBold16"
                    >
                      {props?.usernameone}
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.userpositionone}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col gap-8 items-center justify-end w-full">
              <Img
                className="h-[18px] w-[116px]"
                src="images/img_stars.svg"
                alt="stars"
              />
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <Text
                  className="leading-[140.00%] text-black-900 text-center text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.userdescriptiontwo}
                </Text>
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <Img
                    className="h-14 md:h-auto rounded-[50%] w-14"
                    src="images/img_avatarimage.png"
                    alt="avatarimage"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoSemiBold16"
                    >
                      {props?.usernametwo}
                    </Text>
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      {props?.userpositiontwo}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

PropertyDetailsTestimonial5.defaultProps = {
  headingfour: "Satisfied Customers",
  textfive: "Read what our customers have to say about us",
  userdescriptionone: (
    <>
      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae
      erat.&quot;
    </>
  ),
  usernameone: "Name Surname",
  userpositionone: "Position, Company name",
  userdescriptiontwo: (
    <>
      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae
      erat.&quot;
    </>
  ),
  usernametwo: "Name Surname",
  userpositiontwo: "Position, Company name",
};

export default PropertyDetailsTestimonial5;
