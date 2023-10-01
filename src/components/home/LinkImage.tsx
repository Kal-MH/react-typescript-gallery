import { Link } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import LinkImageStyles from "./LinkImage.module.scss";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  gridClassName?: string;
}

const LinkImage = ({ src, alt, gridClassName }: ImageProps) => {
  let props = {};

  if (gridClassName === "grid-big-top") {
    props = {
      gridColumn: "1/3",
      gridRow: "2/3",
    };
  }
  if (gridClassName === "grid-big-bottom") {
    props = {
      gridColumn: "2/4",
      gridRow: "4/5",
    };
  }

  return (
    <Link href="#" style={{ ...props }}>
      <Image
        className={LinkImageStyles.gridItem}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "grayscale(100%)",
        }}
        src={src}
        alt={alt}
      />
    </Link>
  );
};

export default LinkImage;
