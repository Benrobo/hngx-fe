import React from "react";
import { LazyLoadImg } from "./Image";
import { motion } from "framer-motion";
import Image from "next/image";

function Gallery({ images }) {
  console.log(images);
  return (
    <>
      <motion.div
        className="w-full md:max-w-5xl lg:max-w-6xl h-auto md:h-auto md:columns-4 columns-2 mx-auto gap-5 px-5 pb-5 py-5 space-y-5 "
        layout
      >
        {images.map((d, idx) => (
          <LazyLoadImg
            key={idx}
            src={d.image}
            hash={d.hash}
            alt={"gallery image"}
            height={d.height ?? 0}
            width={d.width ?? 300}
            className={"min-w-full rounded-[10px] "}
          />
          // <Image
          //   src={d.image}
          //   className={"min-w-full rounded-[10px] "}
          //   alt="gallery-image"
          //   width={300}
          //   height={0}
          //   placeholder="blur"
          //   blurDataURL={d.image}
          //   objectFit="cover"
          // />
        ))}
      </motion.div>
      <div className="w-full h-[120px] "></div>
    </>
  );
}

export default Gallery;
