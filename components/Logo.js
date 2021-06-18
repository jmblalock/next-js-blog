import React, { useState } from "react";
import Image from "next/image";
import { MyLink } from "./MyLink";

export const Logo = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MyLink href="/">
        {isHovering ? (
          <Image src="/logo4.png" width={88} height={77} alt="logo" />
        ) : (
          <Image src="/logo1.png" width={88} height={77} alt="logo" />
        )}
      </MyLink>
    </div>
  );
};
