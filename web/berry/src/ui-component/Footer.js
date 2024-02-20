// material-ui
import { Box, Container, Link } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const Footer = () => {
  const siteInfo = useSelector((state) => state.siteInfo);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "64px",
      }}
    >
    </Container>
  );
};

export default Footer;
