import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import AboutUsCta19 from "components/AboutUsCta19";
import AboutUsLayout135 from "components/AboutUsLayout135";
import AboutUsTeam3 from "components/AboutUsTeam3";
import Footer from "components/Footer";
import Header from "components/Header";
import PropertySearchHeader65 from "components/PropertySearchHeader65";
import PropertySearchLayout219 from "components/PropertySearchLayout219";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <PropertySearchHeader65
          className="bg-cover bg-no-repeat flex flex-col gap-20 h-[470px] items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full"
          style={{ backgroundImage: "url('images/img_cta3desktop.png')" }}
          userheading="Discover. Analyze. Decide."
          userdescription="We are on a mission to revolutionize the real estate industry with AI-driven data and tools."
          usersearchlabel="Learn More"
          userlearnmorelabel="Sign Up"
        />
        <AboutUsLayout135 className="bg-white-A700 flex flex-col gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <PropertySearchLayout219 className="bg-white-A700 flex flex-col gap-20 items-center justify-start w-full" />
        <div className="bg-white-A700 flex flex-col gap-12 items-center justify-start py-5 w-full">
          <Text
            className="text-black-900 text-center text-lg w-full"
            size="txtRobotoBold18"
          >
            Trusted by top real estate companies worldwide
          </Text>
          <Img
            className="h-32 w-full"
            src="images/img_content.svg"
            alt="contenttwo"
          />
        </div>
        <AboutUsTeam3 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <AboutUsCta19 className="bg-white-A700 flex flex-col gap-20 items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <Footer className="bg-white-A700 flex gap-8 items-center justify-center px-2.5 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
