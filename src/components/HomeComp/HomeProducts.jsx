import React, { useEffect, useState } from "react";
import Products from "./products";
import { Box, Typography } from "@mui/material";
import { useProducts } from "../../dataQuery/data.service";
import { useMutation } from "@tanstack/react-query";
import { getProducts } from "../../dataQuery/data.fn";
import axios from "axios";

export default function HomeProducts({ lang, setLang }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const query = {
        params: {
          limit: 15,
          page: 1,
        },
      };
      const res = await getProducts(query);
      // console.log(res);
      setData(res?.data);
    }

    getData();
  }, []);

  console.log(data);

  return (
    <Box sx={{ background: "black", p: 4 }}>
      <Box className="globalContainer">
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "36px", md: "44px", lg: "54px" },
            color: "white",
            textAlign: "center",
          }}
        >
          Our Products
        </Typography>
        <Products data={data} lang={lang} setLang={setLang} />
      </Box>
    </Box>
  );
}
