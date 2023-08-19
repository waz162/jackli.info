// PortfolioImage.tsx
import React from "react";
import Image from "next/image";

interface PortfolioImageProps {
  alt: string;
  src: string;
}

const PortfolioImage: React.FC<PortfolioImageProps> = ({ alt, src }) => {
  return (
    <div className="basis-1/3 flex-1 mr-20 ">
      <Image
        alt={alt}
        src={src}
        className="rounded-lg object-cover project-image"
      />
    </div>
  );
};

export default PortfolioImage;
