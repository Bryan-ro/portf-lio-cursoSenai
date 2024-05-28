import { Whatsapp, Github, Linkedin } from "react-bootstrap-icons";

export interface ProfileProps {
    image: string;
    profileTitle: string;
    profileStyle: 1 | 2;
}

export default function Profile({ image, profileStyle, profileTitle }: ProfileProps) {
    return (
        <section id="profile" className="w-full h-fit p-4">
            <div id="logo" className="w-full">
                <img src={image} alt="Rocha informatica logo" className={`rounded-full m-auto ${profileStyle === 1 ? "h-36" : "h-96"} border-2`} />
            </div>

            <h1 className={`${profileStyle === 1 ? "text-xl" : "text-3xl"} font-raleway text-white text-center m-2 font-bold`}>{profileTitle}</h1>


            <div id="social-media" className={`flex justify-center  ${profileStyle === 1 ? "gap-5" : "gap-1"}  w-full`}>
                <a href="https://wa.me/5511912108826" target="_blank" className={`${profileStyle === 1 ? "bg-white w-8 h-8" : "text-white w-6 h-6"}  rounded-full flex justify-center items-center`}>
                    <Whatsapp className={profileStyle === 1 ? "text-xl" : "text-lg"} />
                </a>
                <a href="https://github.com/Bryan-ro" target="_blank" className={`${profileStyle === 1 ? "bg-white w-8 h-8" : "text-white w-6 h-6"}  rounded-full flex justify-center items-center`}>
                    <Github className={profileStyle === 1 ? "text-xl" : "text-lg"} />
                </a>
                <a href="https://www.linkedin.com/in/bryan-rocha-808293216/" target="_blank" className={`${profileStyle === 1 ? "bg-white w-8 h-8" : "text-white w-6 h-6"}  rounded-full flex justify-center items-center`}>
                    <Linkedin className={profileStyle === 1 ? "text-xl" : "text-lg"} />
                </a>
            </div>
        </section>
    );
}