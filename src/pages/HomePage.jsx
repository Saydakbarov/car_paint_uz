import React from "react";
import HeaderMain from "../components/HomeComp/HeaderMain";
import HomeAbout from "../components/HomeComp/HomeAbout";
import HomeService from "../components/HomeComp/HomeService";
import HomeBox from "../components/HomeComp/HomeBox";
import HomeCustomer from "../components/HomeComp/HomeCustomer";
import HomeContact from "../components/HomeComp/HomeContact";
import Footer from "../components/HomeComp/Footer";
import HomeProducts from "../components/HomeComp/HomeProducts";

export default function HomePage({ lang, setLang }) {
  return (
    <div>
      <HeaderMain lang={lang} setLang={setLang} />
      <HomeProducts lang={lang} setLang={setLang} />
      <HomeAbout lang={lang} setLang={setLang} />
      <HomeService lang={lang} setLang={setLang} />
      <HomeBox lang={lang} setLang={setLang} />
      <HomeCustomer lang={lang} setLang={setLang} />
      <HomeContact lang={lang} setLang={setLang} />
      <Footer lang={lang} setLang={setLang} />
    </div>
  );
}
