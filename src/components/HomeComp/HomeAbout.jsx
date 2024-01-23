import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ModalVideo from "./ModalVideo";

export default function HomeAbout({ lang, setLang }) {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/Backgrounds-Section-2-.png')",
        pt: 10,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pb: 10,
      }}
    >
      <Box className="globalContainer">
        <Grid
          container
          sx={{
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "space-between",
              lg: "space-between",
            },
          }}
          gap={4}
        >
          <Grid item lg={5} md={5} sm={10} xs={11}>
            <Typography
              sx={{
                fontSize: { xs: "34px", sm: "44px", md: "54px" },
                color: "white",
              }}
            >
              {lang === "en"
                ? " Who We Are?"
                : lang === "ru"
                ? "Кто мы?"
                : "Biz kimmiz?"}
            </Typography>
            <Typography sx={{ color: "gray", mt: 3 }}>
              {lang === "uz"
                ? "paint 2018 yildan beri dunyodagi yetakchi korxonalar hisoblanga PPG, DUXONE, AKRiPOL, Polaron, Orbay, Befar, Henkel,  Axalta, CST  bilan hamkorlikda ishlaydi. Bizdagi bo'yoq mahsulotlari bo'yalgan mahsulotlarning uzoq umr va ajoyib ko'rinishini ta'minlaydi"
                : lang === "ru"
                ? "С 2018 года краска сотрудничает с PPG, DUXONE, AKRiPOL, Polaron, Orbay, Befar, Henkel, Axalta, CST, среди ведущих предприятий мира. Наша лакокрасочная продукция обеспечивает долгий срок службы и отличный внешний вид окрашенных изделий."
                : "Since 2018, paint has been cooperating with PPG, DUXONE, AKRiPOL, Polaron, Orbay, Befar, Henkel, Axalta, CST, among the world's leading enterprises. Our paint products ensure long life and excellent appearance of painted products"}
            </Typography>
          </Grid>
          <Grid item lg={5} md={5} sm={10} xs={11}>
            <Box
              sx={{
                backgroundImage:
                  "url('https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/Background-Video.png')",
                width: "100%",
                height: "300px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                lineHeight: "300px",
              }}
            >
              <ModalVideo videoSrc={"WVl6g5hvcDA"} />
            </Box>
          </Grid>
        </Grid>

        {/* <Box
          sx={{
            textAlign: "center",
            mt: 12,
            width: { xs: "300px", sm: "400px", md: "500px", lg: "700px" },
            margin: "0 auto",
          }}
        >
          <img
            style={{ width: "100%" }}
            src="https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/Team-1-1024x417.png"
            alt=""
          />
        </Box> */}
      </Box>
    </Box>
  );
}
