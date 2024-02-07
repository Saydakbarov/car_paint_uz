import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HeaderMenu from "../AllComp/HeaderMenu";

export default function ProductMain({ lang, setLang }) {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/futuristic-technology-wave-hexagon-pattern-modern-2022-11-02-00-16-45-utc-1-1.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeaderMenu lang={lang} setLang={setLang} />

      <Box className="globalContainer" sx={{ mt: 10, pb: 3 }}>
        <Grid container justifyContent={"space-between"} sx={{ p: 1 }}>
          <Grid item lg={5}>
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "36px", md: "44px", lg: "54px" },
                color: "white",
                fontWeight: "bold",
              }}
            >
              {lang === "en"
                ? "Products"
                : lang === "ru"
                ? "Продукты"
                : "Mahsulotlar"}
            </Typography>

            <Typography
              sx={{
                pb: 5,
                borderBottom: "1px solid white",
                mt: 1,
                color: "white",
              }}
            >
              {lang === "uz"
                ? "CAR PAINT savdo maydonchamizga xush kelibsiz. Ushbu sahifada siz ishonchli yetkazib beruvchilarimizdan avtomobil bo'yoqlari, laklarini tez va oson tanlashingiz va xarid qilishingiz mumkin. "
                : lang === "ru"
                ? "Добро пожаловать на нашу платформу продаж CAR PAINT. На этой странице вы сможете быстро и легко выбрать и купить автомобильные краски и лаки у наших надежных поставщиков."
                : "Welcome to our CAR PAINT sales platform. On this page, you can quickly and easily choose and buy car paints and varnishes from our reliable suppliers."}
            </Typography>
          </Grid>

          <Grid item lg={6}>
            <img
              style={{
                width: "100%",
                borderRadius: "40px 0px 40px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              src="https://i.pinimg.com/564x/4d/11/1a/4d111a3aff03ad99cdf84aced3fdcebf.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
