import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import PureCounter from "@srexi/purecounterjs";

import NavMenu from "../components/navMenu";
import Section from "../components/section/Section";
import SectionTitle from "../components/texts/SectionTitle";
import Paragraph from "../components/texts/Paragraph";

import { Github, Whatsapp, Linkedin, Geo, Envelope, Calendar2Date, PcDisplay, Laptop, Award, CodeSlash } from "react-bootstrap-icons";

import logo from "/logo.png";

export default function Home() {
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });

        new PureCounter({
            selector: ".purecounter"
        });
    });


    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div>
            <div className="bg-hero bg-no-repeat bg-cover h-screen w-screen fixed z-[-10]"></div>
            <NavMenu
                image={logo}
                profileStyle={1}
                profileTitle="Rocha Informática"
                menuActive={menuActive}
                toggleMenu={toggleMenu}
            />

            <main className="w-auto h-fit lg:ml-[300px] ml-0 scroll-smooth overflow-x-hidden">
                <section id="hero" className="h-screen w-full flex justify-center items-center" data-aos="fade-in">
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

                    <div className="pt-8 flex gap-6 w-full lg:flex-row lg:items-start items-center flex-col">
                        <img src={logo} alt="Logo Rocha Informática" data-aos="fade-right" className="custom:w-[55%] sm:w-[75%] h-full" />

                        <div className="w-full" data-aos="fade-left">
                            <h2 className="text-[30px] font-raleway font-bold text-primary mb-1">Rocha Informática</h2>
                            <Paragraph className="italic">Na Rocha Informática, estamos comprometidos em fornecer as soluções mais avançadas em desenvolvimento de software e manutenção de hardware para atender às suas necessidades. Com uma equipe apaixonada e experiente, buscamos constantemente a excelência em cada projeto que realizamos.</Paragraph>

                            <div className="mt-5 flex justify-evenly custom:flex-row flex-col">
                                <ul>
                                    <li className="flex items-center gap-2 pt-1 pb-1"><Whatsapp height={18} width={20} /><span className="font-bold">Telefone: </span>(11) 91210-8826</li>
                                    <li className="flex items-center gap-2 pt-1 pb-1"><Github height={20} width={20} />github.com/Bryan-ro</li>
                                    <li className="flex items-center gap-2 pt-1 pb-1"><Calendar2Date height={20} width={20} /><span className="font-bold">Desde:</span>Maio de 2024</li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-2 pt-1 pb-1 font-bold"><Geo height={18} width={20} />São Paulo</li>
                                    <li className="flex items-center gap-2 pt-1 pb-1"><Envelope height={20} width={20} />bryangomesrocha@gmail.com</li>
                                    <li className="flex items-center gap-2 pt-1 pb-1"><Linkedin height={20} width={20} />bryan-rocha-808293216</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section id="Achievements" className="-mt-1">
                    <SectionTitle text="Conquistas" />

                    <Paragraph>A melhor manutenção para o seu computador!!</Paragraph>
                    <Paragraph>Maior qualidade no desenvolvimento do seu software!!</Paragraph>

                    <div className="flex max-sm:gap-10 sm:flex-row flex-col max-custom:justify-between mt-3">
                        <div className="max-sm:gap-10 flex lg:flex-row flex-col w-[50%] justify-around">
                            <div className="w-56" data-aos="fade-up">
                                <div className="flex items-center text-5xl font-bold gap-4 pt-2 pb-2">
                                    <PcDisplay className="text-blue-600" /><h1 className="purecounter" data-purecounter-start="0" data-purecounter-end="104" data-purecounter-duration="1"></h1>
                                </div>
                                <p className="font-bold font-raleway text-center">Manutenções em Desktops</p>
                            </div>

                            <div className="w-56" data-aos="fade-up">
                                <div className="flex items-center text-5xl font-bold gap-4 pt-2 pb-2">
                                    <Laptop className="text-blue-600" /><h1 className="purecounter" data-purecounter-start="0" data-purecounter-end="93" data-purecounter-duration="1"></h1>
                                </div>
                                <p className="font-bold font-raleway text-center">Manutenções em Notebooks</p>
                            </div>
                        </div>

                        <div className="max-sm:gap-10 flex lg:flex-row flex-col w-[50%] justify-around">
                            <div className="w-56" data-aos="fade-up">
                                <div className="flex items-center text-5xl font-bold gap-4 pt-2 pb-2">
                                    <CodeSlash className="text-blue-600" /><h1 className="purecounter" data-purecounter-start="0" data-purecounter-end="27" data-purecounter-duration="1"></h1>
                                </div>
                                <p className="font-bold font-raleway text-center">Softwares Desenvolvidos</p>
                            </div>

                            <div className="w-56" data-aos="fade-up">
                                <div className="flex items-center text-5xl font-bold gap-4 pt-2 pb-2">
                                    <Award className="text-blue-600" /><h1 className="purecounter" data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1"></h1>
                                </div>
                                <p className="font-bold font-raleway text-center">Certificações</p>
                            </div>
                        </div>

                    </div>
                </Section>

                <Section id="Achievements" className="-mt-1 h-[2000px]">

                </Section>
            </main>
        </div>
    );
}