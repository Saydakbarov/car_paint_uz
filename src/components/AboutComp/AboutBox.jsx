import { CarCrash, DirectionsCar } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

export default function AboutBox({ lang }) {
  return (
    <Box
      sx={{
        background: "black",
        pt: 10,
      }}
    >
      <Box className="globalContainer">
        <Grid
          container
          sx={{
            justifyContent: { xs: "center", sm: "center", md: "space-between" },
            alignItems: "center",
          }}
          gap={3}
        >
          <Grid item lg={3} md={3} sm={10} xs={11}>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "26px", md: "30px", lg: "44px" },
                color: "white",
                fontWeight: "bold",
              }}
            >
              {lang === "uz"
                ? "Biz eng zorimiz!"
                : lang === "ru"
                ? "Мы лучшие !"
                : "We Are The Best"}
            </Typography>

            <Typography
              sx={{
                color: "gray",
                mt: 2,
              }}
            >
              {lang === "uz"
                ? ". Car paint 2018 yildan beri dunyodagi yetakchi korxonalar hisoblanga PPG, DUXONE, AKRiPOL, Polaron, Orbay, Befar, Henkel,  Axalta, CST  bilan hamkorlikda ishlaydi. Bizdagi bo'yoq mahsulotlari bo'yalgan mahsulotlarning uzoq umr va ajoyib ko'rinishini ta'minlaydi. "
                : lang === "ru"
                ? ". С 2018 года компания «Автокраска» работает в сотрудничестве с ведущими мировыми компаниями, такими как PPG, DUXONE, AKRiPOL, Polaron, Orbay, Befar, Henkel, Axalta, CST. Наша лакокрасочная продукция обеспечивает долгий срок службы и отличный внешний вид окрашенных изделий."
                : ". Since 2018, Car paint has been working in cooperation with the world's leading companies such as PPG, DUXONE, AKRiPOL, Polaron, Orbay, Befar, Henkel, Axalta, CST. Our paint products ensure long life and excellent appearance of painted products."}
            </Typography>

            <Button variant="contained" color="error" sx={{ mt: 4 }}>
              Подробнее
            </Button>
          </Grid>

          <Grid
            item
            lg={8}
            md={8}
            sm={10}
            xs={11}
            sx={{
              background: "#1F1F20",
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "235px", textAlign: "center" }}>
                <IconButton color="error" sx={{ background: "red" }}>
                  <DirectionsCar sx={{ color: "white", fontSize: "34px" }} />
                </IconButton>

                <Typography sx={{ color: "white", fontSize: "18px", mt: 2 }}>
                  Our Vision
                </Typography>
                <Typography sx={{ color: "gray", mt: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus,.
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "250px",
                  textAlign: "center",
                  background: "red",
                  marginTop: { xs: "0px", sm: "0px", md: "-40px", lg: "-40px" },
                  borderRadius: "5px",
                }}
              >
                <IconButton color="error" sx={{ background: "red" }}>
                  <DirectionsCar sx={{ color: "white", fontSize: "34px" }} />
                </IconButton>

                <Typography sx={{ color: "white", fontSize: "18px", mt: 2 }}>
                  Our Vision
                </Typography>
                <Typography sx={{ color: "white", mt: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus,.
                </Typography>
              </Box>

              <Box sx={{ width: "235px", textAlign: "center" }}>
                <IconButton color="error" sx={{ background: "red" }}>
                  <DirectionsCar sx={{ color: "white", fontSize: "34px" }} />
                </IconButton>

                <Typography sx={{ color: "white", fontSize: "18px", mt: 2 }}>
                  Our Vision
                </Typography>
                <Typography sx={{ color: "gray", mt: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus,.
                </Typography>
              </Box>
            </Box>

            <Typography sx={{ color: "gray", mt: 4 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              tenetur iure perspiciatis exercitationem blanditiis quaerat quas
              reprehenderit ut nihil fuga sapiente vitae vel cum perferendis,
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
