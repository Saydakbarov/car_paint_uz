import { Box } from "@mui/material";
import React from "react";
import ContactMain from "../components/Contact/ContactMain";
import ContactBox from "../components/Contact/ContactBox";
import HomeContact from "../components/HomeComp/HomeContact";
import Footer from "../components/HomeComp/Footer";

export default function ContactPage({lang, setLang}) {
  return (
    <Box>
      <ContactMain lang={lang} setLang={setLang}  />
      <ContactBox lang={lang} setLang={setLang}  />

      <HomeContact lang={lang} setLang={setLang}  />

      <Footer lang={lang} setLang={setLang}  />
    </Box>
  );
}
