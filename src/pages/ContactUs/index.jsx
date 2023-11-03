import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import ContactUsContact14 from "components/ContactUsContact14";
import ContactUsContact8 from "components/ContactUsContact8";
import ContactUsCta28 from "components/ContactUsCta28";
import ContactUsFaq6 from "components/ContactUsFaq6";
import ContactUsHeader44 from "components/ContactUsHeader44";
import ContactUsHeader46 from "components/ContactUsHeader46";
import ContactUsPricing14 from "components/ContactUsPricing14";
import ContactUsTeam2 from "components/ContactUsTeam2";
import Footer from "components/Footer";
import Header from "components/Header";

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

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <ContactUsHeader44 className="bg-white-A700 flex flex-col gap-12 items-start justify-start px-5 py-16 w-full" />
        <ContactUsContact8 className="bg-white-A700 flex flex-col gap-20 items-start justify-start pl-16 pr-[77px] md:px-10 sm:px-5 py-28 w-full" />
        <ContactUsContact14 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-start justify-start px-5 py-28 w-full" />
        <ContactUsTeam2 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <ContactUsFaq6 className="bg-white-A700 flex flex-col gap-20 items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <ContactUsPricing14
          className="bg-white-A700 flex flex-col gap-12 items-center justify-start px-5 py-28 w-full"
          price={
            <Text className="font-bold text-black-900 text-center text-xl w-auto">
              <span className="md:text-5xl sm:text-[42px] text-black-900 font-adamina text-[56px] font-normal">
                $19
              </span>
              <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px]">
                /mo
              </span>
            </Text>
          }
          price1={
            <Text className="font-bold text-black-900 text-center text-xl w-auto">
              <span className="md:text-5xl sm:text-[42px] text-black-900 font-adamina text-[56px] font-normal">
                $29
              </span>
              <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px]">
                /mo
              </span>
            </Text>
          }
        />
        <ContactUsCta28
          className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-20 h-[519px] items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full"
          style={{ backgroundImage: "url('images/img_cta3desktop.png')" }}
        />
        <ContactUsHeader46 className="bg-white-A700 flex flex-col gap-20 items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <Footer className="bg-white-A700 flex gap-8 items-center justify-center px-2.5 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default ContactUsPage;
