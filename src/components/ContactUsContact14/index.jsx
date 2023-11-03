import React from "react";

import { Img, List, Text } from "components";

const ContactUsContact14 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingone}
          </Text>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoBold48"
            >
              {props?.headingone}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.text}
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-full">
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <List
                className="flex flex-col gap-10 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_iconenvelope.svg"
                    alt="iconenvelope"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoBold20"
                    >
                      {props?.heading}
                    </Text>
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      {props?.text1}
                    </Text>
                    <Text
                      className="text-base text-black-900 underline w-full"
                      size="txtRobotoRegular16"
                    >
                      {props?.email}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_iconphone.svg"
                    alt="iconphone"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoBold20"
                    >
                      {props?.heading1}
                    </Text>
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      {props?.text2}
                    </Text>
                    <Text
                      className="text-base text-black-900 underline w-full"
                      size="txtRobotoRegular16"
                    >
                      {props?.phonenumber}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_iconmap.svg"
                    alt="iconmap"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoBold20"
                    >
                      {props?.heading2}
                    </Text>
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      {props?.address}
                    </Text>
                    <div className="flex flex-col items-start justify-start pt-4 w-full">
                      <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-auto">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtRobotoRegular16"
                        >
                          {props?.button}
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <Img
              className="h-[516px] sm:h-auto object-cover w-[685px] md:w-full"
              src="images/img_placeholderimage_516x685.png"
              alt="placeholderimag_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ContactUsContact14.defaultProps = {
  subheadingone: "Discover",
  headingone: "Contact Information",
  text: "Find our physical locations and contact details here.",
  heading: "Email",
  text1: "Lorem ipsum dolor sit amet.",
  email: "hello@relume.io",
  heading1: "Phone",
  text2: "Lorem ipsum dolor sit amet.",
  phonenumber: "+1 (555) 000-0000",
  heading2: "Office",
  address: "123 Sample St, Sydney NSW 2000 AU",
  button: "Get Directions",
};

export default ContactUsContact14;
