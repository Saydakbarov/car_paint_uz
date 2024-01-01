import { Box } from "@mui/material";
import React from "react";
import NewsMain from "../components/News/NewsMain";
import NewsProduct from "../components/News/NewsProduct";
import Footer from "../components/HomeComp/Footer";

export default function NewsPage({lang, setLang}) {
  return (
    <Box>
      <NewsMain lang={lang} setLang={setLang}  />
      <NewsProduct lang={lang} setLang={setLang}  />

      <Footer lang={lang} setLang={setLang}  />
    </Box>
  );
}
