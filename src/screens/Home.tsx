import { useState } from "react";
import { ReactTyped } from "react-typed";

import NavMenu from "../components/navMenu";
import logo from "/logo.png";

export default function Home() {
    const [menuActive, setMenuActive] = useState(false);


    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="bg-hero bg-no-repeat bg-cover">
            <NavMenu
                image={logo}
                profileStyle={1}
                profileTitle="Rocha Informática"
                menuActive={menuActive}
                toggleMenu={toggleMenu}
            />

            <main className={`w-auto h-fit lg:ml-[300px] ml-0 scroll-smooth lg:overflow-auto ${menuActive ? "overflow-hidden" : "overflow-auto"}`}>
                <section id="hero" className="h-screen w-full flex justify-center items-center">
                    <div className="lg:w-[1000px] w-auto h-44">
                        <h1 className="font-raleway sm:text-7xl text-4xl font-bold text-white">Rocha Informática</h1>
                        <h2 className="font-raleway text-2xl text-white">
                            Os melhores <ReactTyped
                                strings={["Softwares", "Desktops", "Notebooks"]} typeSpeed={100} backDelay={2000} backSpeed={40} loop={true}
                                className="border border-t-0 border-l-0 border-r-0 border-b-4 border-primary pb-1"
                            />
                        </h2>
                    </div>
                </section>
            </main>
        </div>
    );
}