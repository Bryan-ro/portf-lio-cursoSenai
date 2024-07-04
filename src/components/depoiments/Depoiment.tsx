import "./depoiment.css";

import { Quote } from "react-bootstrap-icons";
import Paragraph from "../texts/Paragraph";

interface DepoimentProps {
    depoiment: string;
    image: string;
    name: string;
    job: string
}

export default function Depoiment({ depoiment, image, name, job }: DepoimentProps) {
    return (
        <div className="pb-5 pt-5">
            <p className="baloom">
                <Quote className="inline-block text-2xl text-blue-600" />
                {depoiment}
                <Quote className="inline-block text-2xl text-blue-600" />
            </p>

            <div className="flex items-center flex-col">
                <img src={image} className="w-24 rounded-full" />

                <Paragraph className="text-blue-600 font-bold">{name}</Paragraph>
                <Paragraph>{job}</Paragraph>
            </div>
        </div>
    );
}