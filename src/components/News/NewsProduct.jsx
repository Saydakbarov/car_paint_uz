import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { NewsData } from "../../data";
import { useNews } from "../../dataQuery/data.service";

export default function NewsProduct({ lang, setLang }) {
  const { data: news } = useNews({ limit: 20, page: 1 });

  return (
    <Box
      sx={{
        background: "black",
        pt: 10,
        pb: 10,
      }}
    >
      <Box className="globalContainer">
        <Grid container justifyContent={"center"} gap={3} sx={{ p: 2 }}>
          {news?.data?.map((v, i) => (
            <Grid
              item
              lg={3.5}
              sx={{ p: 2, background: "#891111" }}
              key={v.new_id}
            >
              <img style={{ width: "100%" }} src={v.new_image} alt="" />

              <Typography
                sx={{
                  mt: 2,
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {lang === "ru"
                  ? v.new_title_ru
                  : lang === "uz"
                  ? v.new_title_uz
                  : v.new_title_en}
              </Typography>

              <p
                style={{
                  mt: 2,
                  color: "#fff",
                  fontSize: "16px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    lang == "ru"
                      ? v.new_description_ru
                      : lang === "uz"
                      ? v.new_description_uz
                      : v.new_description_en,
                }}
              ></p>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
