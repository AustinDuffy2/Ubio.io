import React from "react";

import { Button, Img, Input, PagerIndicator, Text } from "components";

const SignUpSignup6 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-center p-2.5 w-full">
          <div className="flex flex-1 flex-col gap-2.5 items-center justify-center p-2.5 w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
                size="txtRobotoBold48"
              >
                {props?.login}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.descriptiontext}
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-center w-full">
                <Input
                  name="textinput"
                  placeholder="Email"
                  className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                  wrapClassName="outline outline-[1px] outline-blue_gray-400 w-full"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Input
                  name="textinputone"
                  placeholder="Password"
                  className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                  wrapClassName="outline outline-[1px] outline-blue_gray-400 w-full"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="!text-white-A700 cursor-pointer font-roboto min-w-[92px] outline outline-[1px] outline-white-A700 text-base text-center"
                  shape="round"
                  color="light_blue_400"
                  size="md"
                  variant="fill"
                >
                  {props?.logIn}
                </Button>
                <Img
                  className="h-8 w-full"
                  src="images/img_separator.svg"
                  alt="separator"
                />
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[216px] outline outline-[1px] outline-white-A700"
                  leftIcon={
                    <Img
                      className="h-6 mr-3"
                      src="images/img_icon_google.svg"
                      alt="Icon / Google"
                    />
                  }
                  shape="round"
                  color="light_blue_400_26"
                  size="md"
                  variant="fill"
                >
                  <div className="font-roboto text-base text-left">
                    {props?.logInWithGoogle}
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[235px] outline outline-[1px] outline-white-A700"
                  leftIcon={
                    <Img
                      className="h-6 mr-3"
                      src="images/img_iconfacebook.svg"
                      alt="Icon / Facebook"
                    />
                  }
                  shape="round"
                  color="light_blue_400_26"
                  size="md"
                  variant="fill"
                >
                  <div className="font-roboto text-base text-left">
                    {props?.logInWithFacebook}
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[207px] outline outline-[1px] outline-white-A700"
                  leftIcon={
                    <Img
                      className="h-6 mr-3"
                      src="images/img_icon_apple.svg"
                      alt="Icon / Apple"
                    />
                  }
                  shape="round"
                  color="light_blue_400_26"
                  size="md"
                  variant="fill"
                >
                  <div className="font-roboto text-base text-left">
                    {props?.logInWithApple}
                  </div>
                </Button>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Text
                  className="text-base text-black-900 text-center underline w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.link}
                </Text>
                <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                  <Text
                    className="text-base text-black-900 text-center w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.confirmation}
                  </Text>
                  <Text
                    className="text-base text-black-900 text-center underline w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.linkoneOne}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <Img
                  className="h-[18px] w-[116px]"
                  src="images/img_stars.svg"
                  alt="stars"
                />
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <Text
                    className="leading-[140.00%] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                    size="txtRobotoBold24"
                  >
                    {props?.description}
                  </Text>
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_avatarimage.png"
                      alt="avatarimage"
                    />
                    <div className="flex flex-1 flex-col gap-1.5 items-start justify-start px-2.5 w-full">
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtRobotoSemiBold16"
                      >
                        {props?.nametext}
                      </Text>
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtRobotoRegular16"
                      >
                        {props?.positiontext}
                      </Text>
                    </div>
                    <Img
                      className="h-12 max-h-12 sm:w-[] md:w-[]"
                      src="images/img_webflowblack.svg"
                      alt="webflowblack"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-12 items-center justify-center w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_icon.svg"
                  alt="icon"
                />
                <PagerIndicator
                  className="flex gap-[9px] h-7 items-start justify-start p-2.5 w-[62px]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-black-900 w-2"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-400_01 w-2"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Img
                  className="h-12 w-12"
                  src="images/img_icon_black_900.svg"
                  alt="iconone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignUpSignup6.defaultProps = {
  login: "Sign Up",
  descriptiontext: "Lorem ipsum dolor sit amet adipiscing elit.",
  logIn: "Log In",
  logInWithGoogle: "Log in with Google",
  logInWithFacebook: "Log in with Facebook",
  logInWithApple: "Log in with Apple",
  link: "Forgot your password?",
  confirmation: <>Don&#39;t have an account?</>,
  linkoneOne: "Sign Up",
  description: (
    <>
      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla.&quot;
    </>
  ),
  nametext: "Name Surname",
  positiontext: "Position, Company name",
};

export default SignUpSignup6;
