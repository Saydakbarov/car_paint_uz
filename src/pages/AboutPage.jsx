import { Box } from "@mui/material";
import React from "react";
import AboutMain from "../components/AboutComp/AboutMain";
import AboutBox from "../components/AboutComp/AboutBox";
import AboutTeam from "../components/AboutComp/AboutTeam";
import Footer from "../components/HomeComp/Footer";

export default function AboutPage({lang, setLang}) {
  return (
    <Box>
      <AboutMain lang={lang} setLang={setLang}  />
      <AboutBox lang={lang} setLang={setLang}  />
      <AboutTeam lang={lang} setLang={setLang}  />

      <Footer lang={lang} setLang={setLang}  />
    </Box>
  );
}
