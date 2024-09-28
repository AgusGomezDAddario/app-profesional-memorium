import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../Games.css";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const ColorButton = styled(Button)(({ theme }) => ({
  fontFamily: "Gentium Plus",
  color: theme.palette.getContrastText("#2f5496"),
  backgroundColor: "#2f5496",
  "&:hover": {
    backgroundColor: "#00659d",
  },
}));

export default function BasicModalGameVideo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="button-center">
        <ColorButton variant="contained" onClick={handleOpen}>
          Conozca Más
        </ColorButton>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/fnYiPeNA2zg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}