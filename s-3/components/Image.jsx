import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

function ImageTag({ src, width, height, alt, className, style, ...props }) {
  return (
    <img
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={height}
      style={style}
      crossOrigin={"anonymous"}
      loading="lazy"
      {...props}
    />
  );
}

export default ImageTag;

export const ImageLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  console.log({ loading });

  return (
    <div className="image-loader">
      {loading && <div className="skeleton-animation"></div>}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: loading ? "none" : "block" }}
      />
    </div>
  );
};

export function LazyLoadImg({
  src,
  width,
  height,
  alt,
  className,
  style,
  hash,
}) {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();
    img.onload = () => setImgLoaded(true);
    img.src = src;
  }, [src]);

  return (
    <>
      {!imgLoaded && (
        <Blurhash
          hash={hash} // each img hash
          width={"100%"}
          height={"100%"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imgLoaded && (
        <img
          src={src}
          className={className}
          alt={alt}
          width={width}
          height={height}
          style={style}
          crossOrigin={"anonymous"}
          loading="lazy"
        />
      )}
    </>
  );
}
