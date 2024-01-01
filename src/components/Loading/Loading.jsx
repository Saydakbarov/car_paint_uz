import React from "react";
import "./Loading.scss";
import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ background: "black", width: "100%", height: "100vh" }}>
      <div class="spinner">
        <div class="spinnerin"></div>
      </div>
    </Box>
  );
}
