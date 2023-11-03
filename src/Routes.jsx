import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LoginScreenTwo = React.lazy(() => import("pages/LoginScreenTwo"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Home1 = React.lazy(() => import("pages/Home1"));
const PropertySearch = React.lazy(() => import("pages/PropertySearch"));
const DataTrends = React.lazy(() => import("pages/DataTrends"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const PropertyDetails = React.lazy(() => import("pages/PropertyDetails"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/datatrends" element={<DataTrends />} />
          <Route path="/propertysearch" element={<PropertySearch />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/loginscreentwo" element={<LoginScreenTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
