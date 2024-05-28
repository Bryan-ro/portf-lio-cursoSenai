import { ReactNode } from "react";

type SectionProps = { children: ReactNode, id?: string, className?: string }

export default function Section({ children, id, className }: SectionProps) {
    return <section id={id} className={`h-fit bg-secundary pt-12 pb-12 ${className}`}><div className="custom:w-[80%] w-[90%] m-auto">{children}</div></section>;
}