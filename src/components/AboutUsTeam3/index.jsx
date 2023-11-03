import React from "react";

import { Button, Img, Text } from "components";

const AboutUsTeam3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoBold48"
            >
              {props?.headingfive}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.loremipsumdolorOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-24 items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[201px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text}
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
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name1}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle1}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[201px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.loremipsumdolor}
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
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name2}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle2}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[201px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text1}
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
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name3}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle3}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[201px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text2}
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
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name4}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle4}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[201px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text3}
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
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name5}
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[201px] md:max-w-full text-black-900 text-lg"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle5}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.loremipsumdolor1}
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
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name6}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle6}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[201px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text4}
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
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name7}
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle7}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[201px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.text5}
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
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                size="txtRobotoBold32"
              >
                {props?.headingsix}
              </Text>
              <Text
                className="text-black-900 text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.language}
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

AboutUsTeam3.defaultProps = {
  subheading: "Innovative",
  headingfive: "Meet Our Team",
  loremipsumdolorOne:
    "Our team consists of experts in data science, real estate, and technology.",
  name: "John Doe",
  jobtitle: "Data Scientist",
  text: "John is a data science enthusiast with a passion for real estate analytics.",
  name1: "Jane Smith",
  jobtitle1: "Real Estate Expert",
  loremipsumdolor:
    "Jane has years of experience in the real estate industry and a deep understanding of market trends.",
  name2: "Michael Johnson",
  jobtitle2: "Technology Guru",
  text1:
    "Michael is a tech-savvy professional who specializes in building innovative solutions for the real estate sector.",
  name3: "Sarah Davis",
  jobtitle3: "Business Analyst",
  text2:
    "Sarah brings a wealth of knowledge in data analysis and helps drive strategic decision-making.",
  name4: "David Wilson",
  jobtitle4: "Marketing Specialist",
  text3:
    "David is a creative marketer who excels at promoting real estate products and services.",
  name5: <>We&#39;re hiring!</>,
  jobtitle5: "Join our team and be part of our success story.",
  loremipsumdolor1: "Open positions",
  name6: "Full name",
  jobtitle6: "Job title",
  text4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name7: "Full name",
  jobtitle7: "Job title",
  text5:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  headingsix: "We’re hiring!",
  language: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  openPositions: "Open positions",
};

export default AboutUsTeam3;
