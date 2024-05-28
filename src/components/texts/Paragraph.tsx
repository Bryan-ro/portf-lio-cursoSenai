import { ReactNode } from "react";

type ParagraphProps = { children: ReactNode, className?: string }

export default function Paragraph({ children, className }: ParagraphProps,) {
    return <p className={`text-lg ${className}`}>{children}</p>;
}