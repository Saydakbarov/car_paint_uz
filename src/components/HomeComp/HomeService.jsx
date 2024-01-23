import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import BackgroundService from "../../images/HomePage/HomeService/bacground.jpeg";

export default function HomeService({ lang }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundService})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pt: 15,
        backgroundPosition: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "white",
          fontSize: { xs: "34px", sm: "44px", md: "54px" },
        }}
      >
        {lang === "uz"
          ? "Bizning maxsulotimiz avfzalliklari"
          : lang === "ru"
          ? "Преимущества нашей продукции"
          : "Our product advantages"}
      </Typography>

      <Box sx={{ mt: 7, p: 2 }} className="globalContainer">
        <Grid
          container
          gap={2}
          sx={{
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          <Grid
            item
            lg={4}
            md={4}
            sm={5}
            xs={11}
            sx={{ p: 2, background: "#1C1C1D", opacity: "80%" }}
          >
            <img
              src="https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/Icon-Our-Service2.png"
              alt=""
            />

            <Typography
              sx={{
                color: "#fff",
                fontSize: "22px",
                mt: 2,
                textAlign: "center",
              }}
            >
              {lang == "uz"
                ? "•tez quritish (30 daqiqadan ko'p bo'lmagan)"
                : lang === "ru"
                ? "быстрое высыхание (не более 30 минут)"
                : "quick drying (no more than 30 minutes);"}
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={5}
            xs={11}
            sx={{ p: 2, background: "#1C1C1D", opacity: "80%" }}
          >
            <img
              src="https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/Icon-Our-Service2.png"
              alt=""
            />

            <Typography
              sx={{
                color: "#fff",
                fontSize: "22px",
                mt: 2,
                textAlign: "center",
              }}
            >
              {lang === "uz"
                ? "yuqori elastiklik"
                : lang === "ru"
                ? "высокая эластичность"
                : "high elasticity"}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          gap={2}
          sx={{
            mt: { xs: 10 },
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          <Grid
            item
            lg={4}
            md={4}
            sm={5}
            xs={11}
            sx={{ p: 2, background: "#1C1C1D", opacity: "80%" }}
          >
            <img
              src="https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/Icon-Our-Service2.png"
              alt=""
            />

            <Typography
              sx={{
                color: "#fff",
                fontSize: "22px",
                mt: 2,
                textAlign: "center",
              }}
            >
              {lang === "uz"
                ? "1600 xil maxsulot"
                : lang === "ru"
                ? "1600 различных товаров"
                : "1600 различных товаров"}
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={5}
            xs={11}
            sx={{ p: 2, background: "#1C1C1D", opacity: "80%" }}
          >
            <img
              src="https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/Icon-Our-Service2.png"
              alt=""
            />

            <Typography
              sx={{
                color: "#fff",
                fontSize: "22px",
                mt: 2,
                textAlign: "center",
              }}
            >
              {lang === "uz"
                ? "500 dan ortiq ranglar"
                : lang === "ru"
                ? "Более 500 цветов"
                : "More than 500 colors"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
