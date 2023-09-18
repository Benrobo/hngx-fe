import React from "react";

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

import { useState } from "react";

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
