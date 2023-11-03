import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          <div className="border border-black-900 border-solid flex md:flex-col flex-row md:gap-10 gap-32 items-center justify-center px-2.5 py-12 w-full">
            <div className="flex flex-col gap-6 h-[454px] md:h-auto items-start justify-start px-5 w-[300px]">
              <Img
                className="h-[27px] w-[63px]"
                src="images/img_logo.svg"
                alt="logo_One"
              />
              <Text
                className="leading-[150.00%] max-w-[260px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                Stay up to date on the latest features and releases by joining
                our newsletter.
              </Text>
              <div className="flex flex-col gap-4 h-72 md:h-auto items-start justify-start w-full">
                <div className="flex flex-col gap-4 h-[200px] md:h-auto items-start justify-start w-full">
                  <Input
                    name="textinput_Three"
                    placeholder="Enter your email"
                    className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                    wrapClassName="outline outline-[1px] outline-black-900 w-[98%]"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="bg-transparent cursor-pointer font-roboto min-w-[119px] outline outline-[1px] teal_A400_blue_400_border16 text-base text-center"
                    shape="round"
                    color="light_blue_400_26"
                    size="md"
                    variant="fill"
                  >
                    Subscribe
                  </Button>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[260px] md:max-w-full text-black-900 text-xs"
                  size="txtRobotoRegular12"
                >
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-center w-auto">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoSemiBold16"
                >
                  Column One
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtRobotoRegular14"
                    >
                      Home
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtRobotoRegular14"
                    >
                      About Us
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="leading-[150.00%] max-w-[89px] md:max-w-full text-black-900 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Property Search
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="leading-[150.00%] max-w-[89px] md:max-w-full text-black-900 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Property Detail
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtRobotoRegular14"
                    >
                      Data Trends
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center w-auto">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoSemiBold16"
                >
                  Column Two
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="leading-[150.00%] max-w-[90px] md:max-w-full text-black-900 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Login and Sign Up
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtRobotoRegular14"
                    >
                      Link Seven
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtRobotoRegular14"
                    >
                      Link Eight
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtRobotoRegular14"
                    >
                      Link Nine
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtRobotoRegular14"
                    >
                      Link Ten
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 h-[225px] md:h-auto items-center justify-start w-[102px]">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoSemiBold16"
                >
                  Follow us
                </Text>
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <div className="flex flex-row gap-3 items-start justify-start py-2 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconfacebook.svg"
                        alt="iconfacebook"
                      />
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Facebook
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-3 items-start justify-start py-2 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_camera.svg"
                        alt="camera"
                      />
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Instagram
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-3 items-start justify-start py-2 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_icontwitter.svg"
                        alt="icontwitter"
                      />
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Twitter
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-3 items-start justify-start py-2 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin"
                      />
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        LinkedIn
                      </Text>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start pb-4 w-full">
            <Line className="bg-black-900 h-px w-full" />
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtRobotoRegular14"
              >
                © 2023 Relume. All rights reserved.
              </Text>
              <div className="flex flex-row gap-4 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-sm underline w-auto"
                  size="txtRobotoRegular14"
                >
                  Privacy Policy
                </Text>
                <Text
                  className="text-black-900 text-sm underline w-auto"
                  size="txtRobotoRegular14"
                >
                  Terms of Service
                </Text>
                <Text
                  className="text-black-900 text-sm underline w-auto"
                  size="txtRobotoRegular14"
                >
                  Cookies Settings
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
