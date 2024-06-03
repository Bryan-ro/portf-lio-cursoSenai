type ResumeTitleProps = { text: string }

export default function ResumeTitle({ text }: ResumeTitleProps) {
    return <h2 className="text-[25px] font-raleway font-extrabold text-primary mb-7">{text}</h2>;
}