import { ReactNode } from "react";
import "./resume.css";

interface ResumeItemProps {
    title: string;
    children: ReactNode
}


export default function ResumeItem({ title, children }: ResumeItemProps) {
    return (
        <div className="resume-item">

            <p className="font-bold text-xl mb-3">{title.toUpperCase()}</p>

            <div>
                {children}
            </div>
        </div>
    );
}
