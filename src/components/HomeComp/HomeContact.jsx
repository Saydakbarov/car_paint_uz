import { Box, Button } from "@mui/material";
import React from "react";

import BackgroundContact from "../../images/HomePage/HomeContact/background.png";

export default function HomeContact({ lang }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundContact})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        backgroundPosition: "center",
        pt: { xs: 5, sm: 8, md: 10, lg: 20 },
        pb: { xs: 5, sm: 8, md: 10, lg: 20 },
      }}
    >
      <Box
        sx={{
          p: 2,
          background: "#1F1F1F",
          opacity: "60%",
          width: { xs: "200px", sm: "400px", md: "500px" },
        }}
        className="globalContainer"
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <label style={{ color: "white" }}>
            {lang === "en"
              ? "Your Name"
              : lang === "uz"
              ? "Sizning ismingiz"
              : "Ваше имя"}
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            style={{
              border: "1px solid gray",
              outline: "none",
              padding: "14px 16px",
              background: "none",
              marginTop: "15px",
              color: "#ffff",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
          <label style={{ color: "white" }}>
            {lang === "en"
              ? "Your Email"
              : lang === "uz"
              ? "Elektron pochta manzili"
              : "Ваш адрес электронной почты"}
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              border: "1px solid gray",
              outline: "none",
              padding: "14px 16px",

              background: "none",
              marginTop: "15px",
              color: "#ffff",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
          <label style={{ color: "white" }}>
            {lang === "en"
              ? "Your Number"
              : lang === "uz"
              ? "Telefon raqamingiz"
              : "Твой номер"}
          </label>
          <input
            type="text"
            placeholder="Enter your number"
            style={{
              border: "1px solid gray",
              outline: "none",
              padding: "14px 16px",

              background: "none",
              marginTop: "15px",
              color: "#ffff",
            }}
          />
        </Box>

        <Button fullWidth color="error" variant="contained" sx={{ mt: 3 }}>
          Отправить
        </Button>
      </Box>
    </Box>
  );
}
