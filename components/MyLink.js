import React from "react";
import Link from "next/link";

export const MyLink = React.forwardRef(
  (
    { as, children, href, replace, scroll, shallow, passHref, ...rest },
    ref
  ) => (
    <Link as={as} href={href} passHref={passHref} replace={replace}>
      <a {...rest} ref={ref}>
        {children}
      </a>
    </Link>
  )
);
