import { LocationCity } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { usePartners } from "../../dataQuery/data.service";

export default function HomeCustomer({ lang }) {
  const { data: partners } = usePartners({ limit: 100, page: 1 });

  return (
    <Box
      sx={{
        background: "black",
        pt: 15,
      }}
    >
      <Box sx={{ p: 2 }} className="globalContainer">
        <Grid container justifyContent={"space-between"}>
          <Grid item lg={5}>
            <Typography
              sx={{
                fontSize: { xs: "34px", sm: "44px", md: "54px" },
                color: "white",
                fontWeight: "bold",
                lineHeight: "70px",
              }}
            >
              {lang === "uz"
                ? "Bizning mijozlarimiz nima deyishadi"
                : lang === "ru"
                ? "Что говорят наши клиенты"
                : "What Our Customers Say"}
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Typography sx={{ color: "gray" }}>
              {lang === "uz"
                ? "Carpain - mahsulot sifatiga ishonch demakdir.  Bizning xodimlarimiz o'z ishlariga sodiqdirlar va barcha mahsulotlar brendlari bo'yicha mijozlarimizga eng yuqori darajadagi sifatli xizmatni taqdim etadilar. "
                : lang === "ru"
                ? "Carpain – это уверенность в качестве продукции. Наши сотрудники преданы своей работе и обеспечивают высочайший уровень качества обслуживания наших клиентов по всем брендам продукции."
                : "Carpain means confidence in product quality. Our employees are dedicated to their work and provide the highest level of quality service to our customers across all product brands."}
            </Typography>

            <Link to={"/product"}>
              <Button variant="contained" color="error" sx={{ mt: 6 }}>
                {lang === "uz"
                  ? "Batafsil"
                  : lang === "en"
                  ? "More"
                  : "Подробнее "}
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            justifyContent: { xs: "center", sm: "center", md: "center" },
          }}
          mt={5}
          gap={3}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ paddingBottom: "50px" }}
          >
            {partners?.data?.map((v, i) => (
              <SwiperSlide>
                <Grid
                  item
                  lg={12}
               
                  sx={{ background: "#1C1C1D" }}
                  key={v.partner_id}
                >
                  <img
                    width={"100%"}
                    style={{
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src={v.product_image_url}
                    alt=""
                  />

                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                      background: "gray",
                      opacity: "80%",
                      width: "auto",
                      p: 1,
                    }}
                  >
                    <img
                      style={{
                        width: "100px",
                        objectFit: "contain",
                        height: "50px",
                      }}
                      src={v.partner_image_url}
                      alt=""
                    />
                    <Box>
                      <Typography sx={{ color: "white", fontWeight: "bold" }}>
                        {lang === "ru"
                          ? v.product_title_ru
                          : lang === "uz"
                          ? v.product_title_uz
                          : v.product_title_en}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ p: 2, mt: 3 }}>
                    <Typography
                      sx={{
                        fontSize: "22px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {lang === "ru"
                        ? v.product_title_ru
                        : lang === "uz"
                        ? v.product_title_uz
                        : v.product_title_en}
                    </Typography>

                    <Typography sx={{ color: "gray" }}>
                      {lang === "ru"
                        ? v.product_description_ru
                        : lang === "uz"
                        ? v.product_description_uz
                        : v.product_description_en}
                    </Typography>
                  </Box>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
          ;
          {/* <Grid
            item
            lg={3.5}
            md={3.5}
            sm={5}
            xs={11}
            sx={{ background: "#1C1C1D" }}
          >
            <img width={"100%"} src={BoxProduct2} alt="" />

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                background: "gray",
                opacity: "80%",
                width: "auto",
                p: 1,
              }}
            >
              <img
                style={{
                  width: "60px",
                }}
                src={BoxLogo2}
                alt=""
              />
              <Box>
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Axalta
                </Typography>
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Axalta Product
                </Typography>
              </Box>
            </Box>

            <Box sx={{ p: 2, mt: 3 }}>
              <Typography
                sx={{ fontSize: "22px", color: "white", fontWeight: "bold" }}
              >
                Great Reparation!
              </Typography>

              <Typography sx={{ color: "gray" }}>
                  Lorem ipsum dolor sit amet consectetur. Tortor nunc consequat
                  diam amet lacus felis. Augue sapien fringilla sed donec massa in
                  lobortis. Natoque congue malesuada aliquet vitae egestas.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            lg={3.5}
            md={3.5}
            sm={5}
            xs={11}
            sx={{ background: "#1C1C1D" }}
          >
            <img width={"100%"} src={BoxProduct3} alt="" />

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                background: "gray",
                opacity: "80%",
                width: "auto",
                p: 1,
              }}
            >
              <img
                style={{
                  width: "120px",
                }}
                src={BoxLogo3}
                alt=""
              />
              <Box>
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Nargil
                </Typography>
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Nargil Product
                </Typography>
              </Box>
            </Box>

            <Box sx={{ p: 2, mt: 3 }}>
              <Typography
                sx={{ fontSize: "22px", color: "white", fontWeight: "bold" }}
              >
                Great Reparation!
              </Typography>

              <Typography sx={{ color: "gray" }}>
                Lorem ipsum dolor sit amet consectetur. Tortor nunc consequat
                diam amet lacus felis. Augue sapien fringilla sed donec massa in
                lobortis. Natoque congue malesuada aliquet vitae egestas.
              </Typography>
            </Box>
          </Grid> */}
        </Grid>

        {/* <Box sx={{ mt: 8 }}>
          <Typography
            sx={{
              fontSize: { xs: "34px", sm: "44px", md: "54px" },
              color: "white",
              textAlign: "center",
            }}
          >
            Book Your Service Now
          </Typography>

          <Grid container justifyContent={"center"} gap={2} mt={3}>
            <Grid
              item
              lg={2.7}
              md={2.7}
              sm={5}
              xs={11}
              sx={{ display: "flex", gap: "10px" }}
            >
              <LocationCity sx={{ color: "red", fontSize: "28px" }} />
              <Box>
                <Typography sx={{ color: "#fff" }}>
                  Physical Address:
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  Sunset Road No 11 Denpasar, Bali
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={2.7}
              md={2.7}
              sm={5}
              xs={11}
              sx={{ display: "flex", gap: "10px" }}
            >
              <LocationCity sx={{ color: "red", fontSize: "28px" }} />
              <Box>
                <Typography sx={{ color: "#fff" }}>
                  Physical Address:
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  Sunset Road No 11 Denpasar, Bali
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={2.7}
              md={2.7}
              sm={5}
              xs={11}
              sx={{ display: "flex", gap: "10px" }}
            >
              <LocationCity sx={{ color: "red", fontSize: "28px" }} />
              <Box>
                <Typography sx={{ color: "#fff" }}>
                  Physical Address:
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  Sunset Road No 11 Denpasar, Bali
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={2.7}
              md={2.7}
              sm={5}
              xs={11}
              sx={{ display: "flex", gap: "10px" }}
            >
              <LocationCity sx={{ color: "red", fontSize: "28px" }} />
              <Box>
                <Typography sx={{ color: "#fff" }}>
                  Physical Address:
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  Sunset Road No 11 Denpasar, Bali
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box> */}
      </Box>
    </Box>
  );
}
