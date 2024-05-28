import { IconProps } from "react-bootstrap-icons";
import { FC } from "react";

export interface MenuItemProps {
    Icon: FC<IconProps>;
    text: string;
    menuLink: string;
    active?: boolean;
}

export default function MenuItem({ Icon, text, menuLink, active }: MenuItemProps) {
    return (
        <a href={menuLink} className="flex items-center w-full pl-10 pt-4 pb-4 gap-2 text-white hover:text-gray-400 transition-colors duration-300">
            <Icon className={`${!active ? "text-white" : "text-blue-600"} text-2xl`} />
            <span>{text}</span>
        </a>
    );
}