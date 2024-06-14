import React from "react";

type TitleProps = { children: React.ReactNode, className?: string }

export default function Title({ children, className }: TitleProps) {
    return <h2 className={`text-[25px] font-raleway font-extrabold text-primary ${className}`}>{children}</h2>;
}