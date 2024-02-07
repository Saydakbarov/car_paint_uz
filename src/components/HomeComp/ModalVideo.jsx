import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "300px", sm: "350px", md: "450px", lg: "550px" },

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
  height: "400px",
};

export default function ModalVideo({ videoSrc }) {
  console.log(videoSrc);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        margin: "0 auto",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <IconButton
        sx={{
          background: "red",
          p: 1,
          "&:hover": {
            background: "red",
          },
        }}
        onClick={handleOpen}
      >
        <PlayArrow sx={{ color: "white", fontSize: "30px" }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            title="YouTube Video"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoSrc}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </Box>
  );
}
