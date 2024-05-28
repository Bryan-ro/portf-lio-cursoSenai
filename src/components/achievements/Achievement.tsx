import { IconProps } from "react-bootstrap-icons";
import { FC } from "react";

interface AchievementsProps {
    Icon: FC<IconProps>;
    counter: number;
    text: string;
}

export default function Achievement({ counter, Icon, text }: AchievementsProps) {
    return (
        <div className="w-56" data-aos="fade-up">
            <div className="flex items-center text-5xl font-bold gap-4 pt-2 pb-2">
                <Icon className="text-blue-600" /><h1 className="purecounter" data-purecounter-start="0" data-purecounter-end={counter} data-purecounter-duration="1"></h1>
            </div>
            <p className="font-bold font-raleway text-center">{text}</p>
        </div>
    );
}