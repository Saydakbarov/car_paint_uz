import { Check } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import BackgroundBox from "../../images/HomePage/HomeBox/bacground.png";

export default function HomeBox({ lang }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundBox})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pt: 10,
      }}
    >
      <Box className="globalContainer">
        <Box sx={{ mt: { xs: 5, sm: 10, md: 20, lg: 90 }, p: 2 }}>
          <Typography
            sx={{
              pb: 2,
              color: "white",
              fontSize: { xs: "34px", sm: "44px", md: "54px" },
              fontWeight: "bold",
            }}
          >
            {lang === "uz"
              ? "Nega aynan biz?"
              : lang === "ru"
              ? "Почему мы?"
              : "Why us?"}
          </Typography>

          <Grid
            container
            gap={5}
            mt={4}
            sx={{ pt: 4, borderTop: "2px solid gray", p: 2 }}
          >
            <Grid item lg={2.7} md={2.7} sm={5} xs={11}>
              <Check
                sx={{
                  color: "white",
                  p: 1,
                  background: "red",
                  fontSize: "24px",
                  fontWeight: "bold",
                  borderRadius: "50%",
                }}
              />
              <Typography sx={{ color: "#fff", fontSize: "20px", mt: 2 }}>
                {lang === "uz"
                  ? "Carpaint - mahsulot sifatiga ishonch demakdir.  Bizning xodimlarimiz o'z ishlariga sodiqdirlar "
                  : lang === "ru"
                  ? "Carpaint – это уверенность в качестве продукции. Наши сотрудники преданы своей работе"
                  : "Carpaint means confidence in product quality. Our employees are committed to their work"}
              </Typography>
            </Grid>
            <Grid item lg={2.7} md={2.7} sm={5} xs={11}>
              <Check
                sx={{
                  color: "white",
                  p: 1,
                  background: "red",
                  fontSize: "24px",
                  fontWeight: "bold",
                  borderRadius: "50%",
                }}
              />
              <Typography sx={{ color: "#fff", fontSize: "20px", mt: 2 }}>
                {lang === "uz"
                  ? "Barcha mahsulotlar brendlari bo'yicha mijozlarimizga eng yuqori darajadagi sifatli xizmatni taqdim etadilar. "
                  : lang == "ru"
                  ? "Они обеспечивают высочайший уровень качества обслуживания наших клиентов по всем брендам продукции."
                  : "They provide the highest level of quality service to our customers across all product brands."}
              </Typography>
            </Grid>
            <Grid item lg={2.7} md={2.7} sm={5} xs={11}>
              <Check
                sx={{
                  color: "white",
                  p: 1,
                  background: "red",
                  fontSize: "24px",
                  fontWeight: "bold",
                  borderRadius: "50%",
                }}
              />
              <Typography sx={{ color: "#fff", fontSize: "24px", mt: 2 }}>
                {lang === "uz"
                  ? "Carpaint da  ranglarning mukammal moslashuvi uchun cheksiz rang tanlovini taklif etamiz."
                  : lang === "ru"
                  ? "В Carpaint мы предлагаем неограниченный выбор цветов для идеального сочетания цветов."
                  : "At Carpaint, we offer an unlimited choice of colors for the perfect color match."}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
