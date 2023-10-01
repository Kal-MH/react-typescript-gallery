import { Box, Grid } from "@chakra-ui/react";
import React from "react";

import img1 from "@/assets/images/img1-800.jpg";
import img2 from "@/assets/images/img2-800.jpg";
import img3 from "@/assets/images/img3-800.jpg";
import img4 from "@/assets/images/img4-800.jpg";
import img5 from "@/assets/images/img5-800.jpg";
import img6 from "@/assets/images/img6-800.jpg";
import img7 from "@/assets/images/img7-800.jpg";
import img8 from "@/assets/images/img8-800.jpg";
import img9 from "@/assets/images/img9-800.jpg";
import img10 from "@/assets/images/img10-800.jpg";
import img11 from "@/assets/images/img11-800.jpg";
import img12 from "@/assets/images/img12-800.jpg";
import img13 from "@/assets/images/img13-800.jpg";
import LinkImage from "./LinkImage";

const MainGrid = () => {
  return (
    <Box as="main">
      <Grid
        w="80vw"
        m="0 auto 3vw"
        gap="1vw"
        templateColumns="repeat(3, 26vw)"
        templateRows="repeat(5, 26vw)"
      >
        <LinkImage src={img1} alt="Sainte Chapelle" />
        <LinkImage src={img2} alt="Sainte Chapelle" />
        <LinkImage src={img3} alt="Sainte Chapelle" />
        <LinkImage
          src={img4}
          alt="Sainte Chapelle"
          gridClassName="grid-big-top"
        />
        <LinkImage src={img5} alt="Sainte Chapelle" />
        <LinkImage src={img6} alt="Sainte Chapelle" />
        <LinkImage src={img7} alt="Sainte Chapelle" />
        <LinkImage src={img8} alt="Sainte Chapelle" />
        <LinkImage src={img9} alt="Sainte Chapelle" />
        <LinkImage
          src={img10}
          alt="Sainte Chapelle"
          gridClassName="grid-big-bottom"
        />
        <LinkImage src={img11} alt="Sainte Chapelle" />
        <LinkImage src={img12} alt="Sainte Chapelle" />
        <LinkImage src={img13} alt="Sainte Chapelle" />
      </Grid>
    </Box>
  );
};

export default MainGrid;
