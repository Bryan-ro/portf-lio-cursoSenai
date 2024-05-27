import { useState } from "react";
import { ReactTyped } from "react-typed";

import NavMenu from "../components/navMenu";
import Section from "../components/section/Section";
import SectionTitle from "../components/texts/SectionTitle";
import Paragraph from "../components/texts/Paragraph";

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

            <main className={`w-auto h-screen lg:ml-[300px] ml-0 scroll-smooth lg:overflow-auto ${menuActive ? "overflow-hidden" : "overflow-auto"}`}>
                <section id="hero" className="h-screen w-full flex justify-center items-center">
                    <div className="lg:w-[900px] w-auto h-44">
                        <h1 className="font-raleway sm:text-7xl text-4xl font-bold text-white">Rocha Informática</h1>
                        <h2 className="font-raleway text-2xl text-white">
                            Os melhores <ReactTyped
                                strings={["Softwares", "Desktops", "Notebooks"]} typeSpeed={100} backDelay={2000} backSpeed={40} loop={true}
                                className="border border-t-0 border-l-0 border-r-0 border-b-4 border-primary pb-1"
                            />
                        </h2>
                    </div>
                </section>

                <Section id="about">
                    <SectionTitle text="Sobre" />

                    <Paragraph>Seja bem-vindo! Aqui você encontra as melhores soluções de desenvolvimento de software e manutenção de hardware. Explore nossos projetos e confira nossos incriveis computadores.</Paragraph>

                    <div className="pt-8 flex gap-10 w-full lg:flex-row lg:items-start items-center flex-col">
                        <img src={logo} alt="Logo Rocha Informática" className="w-full h-full" />

                        <div>
                            <h2 className="text-[30px] font-raleway font-bold text-primary mb-1">Rocha Informática</h2>
                            <Paragraph className="italic">Na Rocha Informática, estamos comprometidos em fornecer as soluções mais avançadas em desenvolvimento de software e manutenção de hardware para atender às suas necessidades. Com uma equipe apaixonada e experiente, buscamos constantemente a excelência em cada projeto que realizamos.</Paragraph>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </Section>
            </main>
        </div>
    );
}