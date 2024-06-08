import { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import PureCounter from "@srexi/purecounterjs";
import "waypoints/lib/noframework.waypoints.min.js";
import Isotope from "isotope-layout";


import NavMenu from "../components/navMenu";
import Section from "../components/section/Section";
import SectionTitle from "../components/texts/SectionTitle";
import Paragraph from "../components/texts/Paragraph";
import Achievement from "../components/achievements/Achievement";
import ProgressBar from "../components/progressBar/ProgressBar";
import ResumeTitle from "../components/resume/ResumeTitle";
import ResumeItem from "../components/resume/ResumeItem";
import YearDiv from "../components/resume/YearDiv";
import FilterItem from "../components/portfolio/FilterItem";

import { Github, Whatsapp, Linkedin, Geo, Envelope, Calendar2Date, PcDisplay, Laptop, Award, CodeSlash } from "react-bootstrap-icons";

import logo from "/logo.png";
import pcGamer from "/PcGamer.png";
import notebookGamer from "/notebookGamer.png";

export default function Home() {
    const [menuActive, setMenuActive] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [progressBarLoading, setProgressBarLoading] = useState(false);

    const isotope = useRef<Isotope>();
    const [filterkey, setFilterKey] = useState(".all");

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

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let newActiveSection = "";

            const position = window.scrollY + 500;

            for (const section of sections) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const isVisible =
                    position >= sectionTop &&
                    position < sectionTop + sectionHeight;



                if (window.scrollY < 60) {
                    newActiveSection = "hero";
                } else if (isVisible) {
                    newActiveSection = section.id;
                    break;
                }
            }

            setActiveSection(newActiveSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }), [];


    useEffect(() => {
        const statistics = document.getElementById("statistics");

        if (!statistics) {
            return;
        }

        new Waypoint({
            element: statistics,
            offset: "80%",
            handler: () => {
                setProgressBarLoading(true);
            }
        });
    }, []);


    useEffect(() => {
        isotope.current = new Isotope(".filter-container", {
            itemSelector: ".filter-item",
            masonry: {
                gutter: 30,
                fitWidth: true
            }

        });

        return () => {
            if (isotope.current) {
                isotope.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (isotope.current) {
            isotope.current.arrange({ filter: filterkey !== ".all" ? filterkey : "*" });
        }

    }, [filterkey]);


    return (
        <div>
            <div className="bg-hero bg-no-repeat bg-cover h-screen w-screen fixed z-[-10]"></div>
            <NavMenu
                image={logo}
                profileStyle={1}
                profileTitle="Rocha Informática"
                menuActive={menuActive}
                toggleMenu={toggleMenu}
                sectionActive={activeSection}
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

                <section id="about">
                    <Section>
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


                    <Section className="-mt-1 bg-tertiary">
                        <SectionTitle text="Conquistas" />

                        <Paragraph>A melhor manutenção para o seu computador!!</Paragraph>
                        <Paragraph>Maior qualidade no desenvolvimento do seu software!!</Paragraph>

                        <div className="flex max-sm:gap-10 sm:flex-row flex-col max-custom:justify-between mt-3">
                            <div className="max-sm:gap-10 flex lg:flex-row flex-col w-[50%] justify-around">
                                <Achievement Icon={PcDisplay} counter={103} text="Manutenções em Desktops" />

                                <Achievement Icon={Laptop} counter={93} text="Manutenções em Notebooks" />
                            </div>

                            <div className="max-sm:gap-10 flex lg:flex-row flex-col w-[50%] justify-around">
                                <Achievement Icon={CodeSlash} counter={27} text="Softwares Desenvolvidos" />
                                <Achievement Icon={Award} counter={15} text="Certificados" />
                            </div>
                        </div>
                    </Section>


                    <Section className="-mt-1 h-[2000px] bg-tertiary">
                        <div id="statistics">
                            <SectionTitle text="Estátisticas" />
                            <Paragraph>Veja o percentual da nossa capacitação em cada área específica!</Paragraph>

                            <div className="flex md:gap-10 max-md:flex-col mt-8">
                                <div className="flex flex-col w-full">
                                    <ProgressBar progressBarLoading={progressBarLoading} progressBarWidth={100} title="Desktops" />
                                    <ProgressBar progressBarLoading={progressBarLoading} progressBarWidth={85} title="Notebooks" />
                                </div>

                                <div className="flex flex-col w-full">
                                    <ProgressBar progressBarLoading={progressBarLoading} progressBarWidth={95} title="Desenvolvimento Web" />
                                    <ProgressBar progressBarLoading={progressBarLoading} progressBarWidth={70} title="Desenvolvimento Mobile" />
                                </div>
                            </div>
                        </div>
                    </Section>
                </section>

                <Section id="resume">
                    <SectionTitle text="Resumo" />
                    <Paragraph>Minhas informações Academicas e Profissionais</Paragraph>

                    <div className="mt-5 flex max-md:flex-col gap-5">
                        <div className="md:w-1/2 w-full">
                            <div>
                                <ResumeTitle text="Sumário" />

                                <ResumeItem title="Bryan Rocha">
                                    <ul>
                                        <li>&gt; São Paulo - SP</li>
                                        <li>&gt; (11) 91210-8826</li>
                                        <li>&gt; bryangomesrocha@gmail.com</li>
                                    </ul>
                                </ResumeItem>
                            </div>

                            <div className="mt-5">
                                <ResumeTitle text="Escolaridade" />

                                <ResumeItem title="Ciência da Computação">
                                    <YearDiv startYear={2024} endYear={"Atual"} />
                                    <p className="italic">SPTech School - SP</p>
                                </ResumeItem>

                                <ResumeItem title="Ensino médio">
                                    <YearDiv startYear={2020} endYear={2023} />
                                    <p className="italic">E.E Professora Beatriz Lopes - SP</p>
                                </ResumeItem>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full">
                            <div>
                                <ResumeTitle text="Experiencia Profissional" />

                                <ResumeItem title="Assistente de Tráfego">
                                    <YearDiv startYear={2020} endYear={2023} />
                                    <p className="italic">Extreme Reach - SP</p>

                                    <ul className="mt-3 space-y-2">
                                        <li>&gt; Validar chamadas de APIs para entrega precisa de comerciais.</li>
                                        <li>&gt; Fornecer suporte técnico a clientes e emissoras.</li>
                                        <li>&gt; Coordenar fluxo de comerciais, incluindo controle de qualidade.</li>
                                        <li>&gt; Garantir continuidade do serviço em caso de falhas na plataforma.</li>
                                    </ul>
                                </ResumeItem>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-tertiary" id="portfolio">
                    <SectionTitle text="Portfólio" />


                    <div className="w-full flex justify-center mb-8" data-aos="fade-up">
                        <div className="flex justify-evenly rounded-lg md:w-3/6 w-full cursor-pointer bg-primary text-white">
                            {
                                ["all", "Desktop", "Notebook", "Web", "Mobile"].map((filterButton) => {
                                    return (
                                        <div className="group border-r w-full text-center p-1" onClick={() => setFilterKey("." + filterButton.toLowerCase())}>
                                            <Paragraph className={`
                                            group-hover:text-blue-600 
                                            group-hover:font-bold 
                                            duration-300 
                                            max-sm:text-sm
                                            ${filterkey == "." + filterButton.toLowerCase() ? "text-blue-600 font-bold" : null}
                                            `}>
                                                {filterButton === "all" ? "Todos" : filterButton}
                                            </Paragraph>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className="flex justify-center" data-aos="fade-up">
                        <div className="filter-container">
                            <FilterItem image={pcGamer} filterKey="desktop" />
                            <FilterItem image={pcGamer} filterKey="desktop" />
                            <FilterItem image={notebookGamer} filterKey="notebook" />
                            <FilterItem image={notebookGamer} filterKey="notebook" />
                            <FilterItem image={notebookGamer} filterKey="notebook" />
                            <FilterItem image={pcGamer} filterKey="desktop" />
                            <FilterItem image={pcGamer} filterKey="desktop" />
                            <FilterItem image={pcGamer} filterKey="desktop" />
                            <FilterItem image={pcGamer} filterKey="desktop" />
                        </div>
                    </div>
                </Section>

                <Section>
                    <></>
                </Section>
            </main>
        </div>
    );
}