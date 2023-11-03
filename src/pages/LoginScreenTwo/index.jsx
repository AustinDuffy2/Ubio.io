import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeLogo2 from "components/HomeLogo2";
import LoginScreenTwoLogin6 from "components/LoginScreenTwoLogin6";
import PropertyDetailsFaq3 from "components/PropertyDetailsFaq3";

const titleOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const titleoneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const titletwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const titlethreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const titlefourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LoginScreenTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <LoginScreenTwoLogin6 className="flex flex-col items-start justify-start w-full" />
        <HomeLogo2 className="bg-white-A700 flex flex-col gap-20 items-center justify-center md:px-10 px-16 sm:px-5 py-20 w-full" />
        <PropertyDetailsFaq3 className="bg-white-A700 flex flex-col gap-20 items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <Footer className="bg-white-A700 flex gap-8 items-center justify-center px-2.5 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default LoginScreenTwoPage;
