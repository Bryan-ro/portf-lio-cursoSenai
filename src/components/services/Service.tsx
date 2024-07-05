import { IconProps } from "react-bootstrap-icons";
import Paragraph from "../texts/Paragraph";
import Title from "../texts/Title";
import { FC } from "react";


interface ServiceProps {
    Icon: FC<IconProps>;
    title: string;
    description: string;

}

export default function Service({ Icon, title, description }: ServiceProps) {
    return (
        <div className="flex md:items-center items-start gap-4 md:w-1/2 w-full p-10 max-md:pr-0 max-md:pl-0" data-aos="fade-up">
            <div className="border-2 border-blue-600 w-14 h-14 rounded-full bg-primary flex justify-center items-center min-w-14">
                <Icon className="text-2xl text-white" />
            </div>

            <div className="w-[80%]">
                <Title>{title}</Title>

                <Paragraph>{description}</Paragraph>
            </div>
        </div>
    );
}