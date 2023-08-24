// PortfolioImage.tsx
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface PortfolioImageProps {
  alt: string;
  src: string | StaticImageData;
}

const PortfolioImage: React.FC<PortfolioImageProps> = ({ alt, src }) => {
  return (
    <div className="project-image mr-20 flex-1 basis-1/3">
      <Image alt={alt} src={src} />
    </div>
  );
};

export default PortfolioImage;
