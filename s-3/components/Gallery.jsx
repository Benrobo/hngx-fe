import React from "react";
import { LazyLoadImg } from "./Image";
import { motion } from "framer-motion";
import Image from "next/image";

function Gallery({ images }) {
  // console.log(images);
  return (
    <>
      <motion.div
        layout
        className="w-full md:max-w-5xl lg:max-w-6xl h-auto md:h-auto md:columns-4 columns-2 mx-auto gap-5 px-5 pb-5 py-5 space-y-5 relative"
      >
        {images.map((d, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            layout
            className="relative"
          >
            <LazyLoadImg
              key={idx}
              src={d.image}
              hash={d.hash}
              alt={"gallery image"}
              height={d.height ?? 0}
              width={d.width ?? 300}
              className={"min-w-full rounded-[10px] "}
            />

            <div className="w-full flex items-center justify-start absolute top-0 left-5 py-4 gap-2 px-3">
              {d?.tags?.length > 0 ? (
                d?.tags.map((t) => (
                  <div className="w-auto text-center px-5 py-2 bg-dark-600 font-ppB text-white-100 rounded-[30px] text-[12px] backdrop-blur scale-[.85] ">
                    {t}
                  </div>
                ))
              ) : (
                <div className="w-auto text-center px-5 py-2 bg-dark-600 font-ppB text-white-100 rounded-[30px] text-[12px] backdrop-blur scale-[.85] ">
                  {"N/A"}
                </div>
              )}
            </div>
          </motion.div>
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
