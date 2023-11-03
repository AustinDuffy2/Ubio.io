import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const ContactUsContact8 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-full">
          <div className="bg-white-A700 flex flex-1 flex-col h-[834px] md:h-auto items-center justify-center p-2.5 w-full">
            <div className="flex flex-col gap-8 h-full items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoSemiBold16"
                >
                  {props?.subheading}
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                    size="txtRobotoBold48"
                  >
                    {props?.heading}
                  </Text>
                  <Text
                    className="text-black-900 text-lg w-full"
                    size="txtRobotoRegular18"
                  >
                    {props?.languageOne}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 h-[553px] md:h-auto items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.name}
                  </Text>
                  <Input
                    name="textinput"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-12 outline outline-[1px] outline-black-900 w-full"
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.email}
                  </Text>
                  <Input
                    name="textinputone"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-12 outline outline-[1px] outline-black-900 w-full"
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.message}
                  </Text>
                  <div className="bg-white-A700 flex flex-col md:gap-10 gap-[137px] h-[180px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900 p-3 rounded-[5px] w-full">
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtRobotoRegular16Gray800"
                    >
                      {props?.message1}
                    </Text>
                    <div className="relative w-1.5">
                      <Line className="absolute bg-gray-100 bottom-[0] h-px right-[0] rotate-[-135deg] w-0.5" />
                      <Line className="absolute bg-gray-100 h-px inset-[0] justify-center m-auto rotate-[-135deg] w-1.5" />
                    </div>
                  </div>
                </div>
                <CheckBox
                  className="!text-black-900 font-roboto text-left text-sm"
                  inputClassName="h-[18px] mr-[5px] outline outline-[1px] outline-blue_gray-400 w-[18px]"
                  name="label"
                  id="label"
                  label="I accept the Terms"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></CheckBox>
                <Button
                  className="!text-white-A700 cursor-pointer font-roboto h-12 min-w-[99px] outline outline-[1px] outline-white-A700 text-base text-center"
                  shape="round"
                  color="light_blue_400"
                  size="md"
                  variant="fill"
                >
                  {props?.submit}
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center md:px-10 px-16 sm:px-5 py-2.5 w-full">
            <Img
              className="h-[734px] md:h-auto object-cover w-full"
              src="images/img_placeholderimage_734x506.png"
              alt="placeholderimag"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ContactUsContact8.defaultProps = {
  subheading: "Tagline",
  heading: "Contact us",
  languageOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  name: "Name",
  email: "Email",
  message: "Message",
  submit: "Submit",
};

export default ContactUsContact8;
