import { Box, Typography } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./styles/Product.scss";
import { Link } from "react-router-dom";

export default function Products({ data, lang, setLang }) {
  console.log(data);
  return (
    <Box sx={{ mt: 8 }}>
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
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ paddingBottom: "50px" }}
      >
        {data?.map((v, i) => (
          <SwiperSlide className="swiperSlideBox">
            <Box
              sx={{
                width: "100%",
                position: "relative",
                height: "300px",
                borderTopLeftRadius: "20px",
                border: "1px solid white",
              }}
              className="productBox"
            >
              <Link key={i} to={`/single/${v.product_id}`}>
                <img
                  style={{
                    width: "150px",
                    position: "absolute",
                    bottom: "0%",
                    right: "0%",
                  }}
                  className="productImage"
                  src={v.product_image_url[0]}
                  alt=""
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "center",
                    mt: 3,
                  }}
                  className="productText"
                >
                  {lang === "ru"
                    ? v.product_title_ru
                    : lang === "uz"
                    ? v.product_title_uz
                    : v.product_title_en}
                </Typography>
              </Link>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
