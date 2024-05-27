type ParagraphProps = { children: string, className?: string }

export default function Paragraph({ children, className }: ParagraphProps,) {
    return <p className={`text-lg ${className}`}>{children}</p>;
}