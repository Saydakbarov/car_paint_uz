import { Box } from "@mui/material";
import React from "react";
import ProductMain from "../components/Product/ProductMain";
import ProductContainer from "../components/Product/ProductContainer";
import Footer from "../components/HomeComp/Footer";

export default function ProductPage({ lang, setLang }) {
  return (
    <Box>
      <ProductMain lang={lang} setLang={setLang} />
      <ProductContainer lang={lang} setLang={setLang} />
      <Footer lang={lang} setLang={setLang} />
    </Box>
  );
}
