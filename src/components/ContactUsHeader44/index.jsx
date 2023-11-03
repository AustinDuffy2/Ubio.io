import React from "react";

import { Button, Text } from "components";

const ContactUsHeader44 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoSemiBold16"
            >
              {props?.usertagline}
            </Text>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 w-full"
                size="txtRobotoBold56"
              >
                {props?.usershortheading}
              </Text>
              <Text
                className="text-black-900 text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.userdescription}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start pt-4 w-auto">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[96px] outline outline-[1px] outline-white-A700 text-base text-center"
              shape="round"
              color="light_blue_400"
              size="md"
              variant="fill"
            >
              {props?.userbuttonone}
            </Button>
            <Button
              className="bg-transparent cursor-pointer font-roboto min-w-[96px] outline outline-[1px] teal_A400_blue_400_border2 text-base text-center"
              shape="round"
              color="light_blue_400_26"
              size="md"
              variant="fill"
            >
              {props?.userbuttontwo}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ContactUsHeader44.defaultProps = {
  usertagline: "Tagline",
  usershortheading: "Short heading here",
  userdescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ",
  userbuttonone: "Button",
  userbuttontwo: "Button",
};

export default ContactUsHeader44;
