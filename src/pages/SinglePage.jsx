import React from "react";
import ProductMain from "../components/Product/ProductMain";
import SingleContainer from "../components/SinglePage/SingleContainer";
import Footer from "../components/HomeComp/Footer";

export default function SinglePage({ lang, setLang }) {
  return (
    <div>
      <ProductMain lang={lang} setLang={setLang} />
      <SingleContainer lang={lang} setLang={setLang} />

      <Footer lang={lang} setLang={setLang} />
    </div>
  );
}
