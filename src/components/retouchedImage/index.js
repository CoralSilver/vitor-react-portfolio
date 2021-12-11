import React, { memo } from "react";

export const RetouchedImage = memo(({ file, alt, showRetouched }) => {
  return (
    <img
      src={`imgs/retouched/${file}_${showRetouched ? "after" : "before"}.jpg`}
      alt={alt}
      className="img-swap"
    />
  );
});
