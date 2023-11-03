import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import HomeColumnsubheading from "components/HomeColumnsubheading";
import HomeCta7 from "components/HomeCta7";
import HomeLayout207 from "components/HomeLayout207";
import HomeLogo2 from "components/HomeLogo2";
import HomePricing23 from "components/HomePricing23";
import PropertySearchLayout219 from "components/PropertySearchLayout219";
import PropertySearchLayout254 from "components/PropertySearchLayout254";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto py-10 w-auto sm:w-full md:w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <Line className="bg-white-A700 h-px w-full" />
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <Line className="bg-white-A700 h-px w-full" />
            <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-full">
              <div className="flex flex-1 flex-col items-center justify-center p-2.5 w-full">
                <div className="flex flex-col items-center justify-center p-2.5 w-full">
                  <div className="flex sm:flex-col flex-row gap-[35px] items-center justify-between px-5 w-full">
                    <Img
                      className="h-[27px] w-[63px]"
                      src="images/img_logo.svg"
                      alt="logo"
                    />
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      Link One
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      Link Two
                    </Text>
                    <Text
                      className="text-base text-black-900 w-[74px]"
                      size="txtRobotoRegular16"
                    >
                      Link Three
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start w-[220px]">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtRobotoRegular16"
                      >
                        Link Four
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-2.5 w-auto">
                <div className="flex flex-row gap-4 items-center justify-end w-auto">
                  <Button
                    className="cursor-pointer min-w-[88px] outline outline-[1px] outline-black-900 text-base text-center"
                    shape="round"
                    color="light_blue_400_26"
                    size="sm"
                    variant="fill"
                  >
                    Button
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[88px] outline outline-[1px] outline-black-900 text-base text-center"
                    shape="round"
                    color="black_900"
                    size="sm"
                    variant="fill"
                  >
                    Button
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <PropertySearchLayout219
          className="bg-white-A700 flex flex-col gap-20 items-center justify-start w-full"
          headingtext="Find Your Dream Property with AI-Powered Search Engine"
        />
        <HomeLogo2
          className="bg-white-A700 flex flex-col gap-20 items-center justify-center md:px-10 px-16 sm:px-5 py-20 w-full"
          headingThree={<>Used by the world&#39;s most average companies</>}
          logoimage="images/img_logo3.svg"
        />
        <HomeColumnsubheading className="bg-white-A700 flex flex-col gap-12 items-center justify-start px-5 py-16 w-full" />
        <PropertySearchLayout254
          className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-5 w-full"
          subheading="Revolutionize"
          headingthree="Discover the Power of Data-Driven Real Estate"
          descriptionOne="Our data-driven trend models and decision-making benefits provide you with the insights you need to make better business decisions. With our user-friendly interface and personalized search experience, finding the perfect property has never been easier."
        />
        <HomeLayout207 className="bg-white-A700 flex flex-col gap-20 items-center justify-start px-2.5 py-5 w-full" />
        <HomePricing23
          className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start w-full"
          price={
            <Text className="font-bold text-black-900 text-center text-xl w-auto">
              <span className="md:text-5xl sm:text-[42px] text-black-900 font-roboto text-[56px]">
                $19
              </span>
              <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px]">
                /mo
              </span>
            </Text>
          }
          price1={
            <Text className="font-bold text-black-900 text-center text-xl w-auto">
              <span className="md:text-5xl sm:text-[42px] text-black-900 font-roboto text-[56px]">
                $29
              </span>
              <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px]">
                /mo
              </span>
            </Text>
          }
          price2={
            <Text className="font-bold text-black-900 text-center text-xl w-auto">
              <span className="md:text-5xl sm:text-[42px] text-black-900 font-roboto text-[56px]">
                $49
              </span>
              <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px]">
                /mo
              </span>
            </Text>
          }
        />
        <HomeCta7 className="bg-white-A700 flex flex-col gap-20 items-start justify-start md:px-10 px-16 sm:px-5 py-5 w-full" />
        <footer className="bg-white-A700 flex items-center justify-center px-2.5 md:px-5 py-5 w-full">
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
                      name="textinput"
                      placeholder="Enter your email"
                      className="!placeholder:text-gray-800 !text-gray-800 p-0 text-base text-left w-full"
                      wrapClassName="outline outline-[1px] outline-black-900 w-[98%]"
                      type="email"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Button
                      className="bg-transparent cursor-pointer min-w-[119px] outline outline-[1px] teal_A400_blue_400_border40 text-base text-center"
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
                    By subscribing, you agree to our Privacy Policy and consent
                    to receive updates from our company.
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
                      <a href="javascript:">
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
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
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
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
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
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
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
                      </a>
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
                  <a
                    href="javascript:"
                    className="text-black-900 text-sm underline w-auto"
                  >
                    <Text size="txtRobotoRegular14">Privacy Policy</Text>
                  </a>
                  <a
                    href="javascript:"
                    className="text-black-900 text-sm underline w-auto"
                  >
                    <Text size="txtRobotoRegular14">Terms of Service</Text>
                  </a>
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
      </div>
    </>
  );
};

export default Home1Page;
