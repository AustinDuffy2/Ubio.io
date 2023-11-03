import React from "react";

import { Button, Img, Text } from "components";

const ContactUsTeam2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingtwo}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoBold48"
            >
              {props?.headingtwo}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.loremipsumdolor}
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-center px-2.5 py-10 w-full">
          <div className="flex flex-col items-center justify-start w-[81%]">
            <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 flex flex-1 flex-col h-[525px] md:h-auto items-center justify-center p-2.5 w-full">
                <div className="flex flex-col gap-6 h-[513px] md:h-auto items-center justify-start w-[319px]">
                  <Img
                    className="h-[296px] sm:h-auto object-cover w-full"
                    src="images/img_placeholderimage_296x319.png"
                    alt="placeholderimag"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.name}
                      </Text>
                      <Text
                        className="text-black-900 text-center text-lg w-full"
                        size="txtRobotoRegular18"
                      >
                        {props?.jobtitle}
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[319px] md:max-w-full text-base text-black-900 text-center"
                      size="txtRobotoRegular16"
                    >
                      {props?.loremipsumdolorOne}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icontwitter.svg"
                      alt="icontwitter"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icondribble.svg"
                      alt="icondribble"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col h-[525px] md:h-auto items-center justify-center p-2.5 w-full">
                <div className="flex flex-col gap-6 h-[513px] md:h-auto items-center justify-start w-[319px]">
                  <Img
                    className="h-[296px] sm:h-auto object-cover w-full"
                    src="images/img_placeholderimage_296x319.png"
                    alt="placeholderimag"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.name1}
                      </Text>
                      <Text
                        className="text-black-900 text-center text-lg w-full"
                        size="txtRobotoRegular18"
                      >
                        {props?.jobtitle1}
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[319px] md:max-w-full text-base text-black-900 text-center"
                      size="txtRobotoRegular16"
                    >
                      {props?.loremipsumdolorone1}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icontwitter.svg"
                      alt="icontwitter"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icondribble.svg"
                      alt="icondribble"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col h-[525px] md:h-auto items-center justify-center p-2.5 w-full">
                <div className="flex flex-col gap-6 h-[513px] md:h-auto items-center justify-start w-[319px]">
                  <Img
                    className="h-[296px] sm:h-auto object-cover w-full"
                    src="images/img_placeholderimage_296x319.png"
                    alt="placeholderimag"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.name2}
                      </Text>
                      <Text
                        className="text-black-900 text-center text-lg w-full"
                        size="txtRobotoRegular18"
                      >
                        {props?.jobtitle2}
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[319px] md:max-w-full text-base text-black-900 text-center"
                      size="txtRobotoRegular16"
                    >
                      {props?.loremipsumdolorone2}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icontwitter.svg"
                      alt="icontwitter"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icondribble.svg"
                      alt="icondribble"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col h-[525px] md:h-auto items-center justify-center p-2.5 w-full">
                <div className="flex flex-col gap-6 h-[513px] md:h-auto items-center justify-start w-[319px]">
                  <Img
                    className="h-[296px] sm:h-auto object-cover w-full"
                    src="images/img_placeholderimage_296x319.png"
                    alt="placeholderimag"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.name3}
                      </Text>
                      <Text
                        className="text-black-900 text-center text-lg w-full"
                        size="txtRobotoRegular18"
                      >
                        {props?.jobtitle3}
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[319px] md:max-w-full text-base text-black-900 text-center"
                      size="txtRobotoRegular16"
                    >
                      {props?.loremipsumdolorone3}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icontwitter.svg"
                      alt="icontwitter"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icondribble.svg"
                      alt="icondribble"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col h-[525px] md:h-auto items-center justify-center p-2.5 w-full">
                <div className="flex flex-col gap-6 h-[513px] md:h-auto items-center justify-start w-[319px]">
                  <Img
                    className="h-[296px] sm:h-auto object-cover w-full"
                    src="images/img_placeholderimage_296x319.png"
                    alt="placeholderimag"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.name4}
                      </Text>
                      <Text
                        className="text-black-900 text-center text-lg w-full"
                        size="txtRobotoRegular18"
                      >
                        {props?.jobtitle4}
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[319px] md:max-w-full text-base text-black-900 text-center"
                      size="txtRobotoRegular16"
                    >
                      {props?.loremipsumdolorone4}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icontwitter.svg"
                      alt="icontwitter"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icondribble.svg"
                      alt="icondribble"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col h-[525px] md:h-auto items-center justify-center p-2.5 w-full">
                <div className="flex flex-col gap-6 h-[513px] md:h-auto items-center justify-start w-[319px]">
                  <Img
                    className="h-[296px] sm:h-auto object-cover w-full"
                    src="images/img_placeholderimage_296x319.png"
                    alt="placeholderimag"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.name5}
                      </Text>
                      <Text
                        className="text-black-900 text-center text-lg w-full"
                        size="txtRobotoRegular18"
                      >
                        {props?.jobtitle5}
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[319px] md:max-w-full text-base text-black-900 text-center"
                      size="txtRobotoRegular16"
                    >
                      {props?.loremipsumdolorone5}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icontwitter.svg"
                      alt="icontwitter"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icondribble.svg"
                      alt="icondribble"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32"
              >
                {props?.headingthree}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.languageTwo}
              </Text>
            </div>
            <Button
              className="cursor-pointer font-roboto min-w-[155px] outline outline-[1px] outline-white-A700 text-base text-center"
              shape="round"
              color="light_blue_400_26"
              size="md"
              variant="fill"
            >
              {props?.openPositions}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ContactUsTeam2.defaultProps = {
  subheadingtwo: "Innovative",
  headingtwo: "Meet Our Team",
  loremipsumdolor: "Get to know the talented individuals behind our company",
  name: "Full name",
  jobtitle: "Job title",
  loremipsumdolorOne:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name1: "Full name",
  jobtitle1: "Job title",
  loremipsumdolorone1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name2: "Full name",
  jobtitle2: "Job title",
  loremipsumdolorone2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name3: "Full name",
  jobtitle3: "Job title",
  loremipsumdolorone3:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name4: "Full name",
  jobtitle4: "Job title",
  loremipsumdolorone4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name5: "Full name",
  jobtitle5: "Job title",
  loremipsumdolorone5:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  headingthree: "We’re hiring!",
  languageTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  openPositions: "Open positions",
};

export default ContactUsTeam2;
