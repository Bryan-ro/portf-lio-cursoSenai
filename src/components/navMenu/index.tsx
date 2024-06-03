import { List, X, HouseDoor, Person, FileEarmark, BookHalf, Server, Envelope } from "react-bootstrap-icons";
import Profile, { ProfileProps } from "./Profile";
import MenuItem from "./MenuItem";
import Footer from "./Footer";
import { useEffect } from "react";

interface NavMenuProps extends ProfileProps {
    menuActive: boolean;
    toggleMenu: () => void;
    sectionActive: string;
}

export default function NavMenu({ image, profileStyle, profileTitle, menuActive, toggleMenu, sectionActive }: NavMenuProps) {
    useEffect(() => {
        const body = document.querySelector("body");

        if (!body) return;

        const handleResize = () => {
            if (window.innerWidth < 1024 && menuActive) {
                body.style.overflowY = "hidden";
            } else {
                body.style.overflowY = "scroll";
            }
        };

        handleResize(); // Chamada inicial para configurar corretamente a rolagem

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [menuActive]);


    return (
        <>
            <div className="
                    bg-primary 
                    text-white 
                    rounded-full                     
                    fixed 
                    right-3.5 
                    top-3.5  
                    lg:hidden
                    block
                    transition-all 
                    duration-1000 
                    w-10 
                    h-10
                    cursor-pointer
                    "

                onClick={() => {
                    toggleMenu();
                }}
            >
                {!menuActive ? <List className="text-2xl text-white w-10 h-10" /> : <X className="text-2xl text-white w-10 h-10" />}
            </div>

            <header className={`select-none fixed top-0 bottom-0 lg:left-0 ${menuActive ? "left-0" : "-left-80"} bg-primary w-[300px] transition-all duration-1000`}>
                <Profile image={image} profileStyle={profileStyle} profileTitle={profileTitle} />

                <nav>
                    <MenuItem Icon={HouseDoor} text="Início" menuLink="#hero" active={sectionActive === "hero"} />
                    <MenuItem Icon={Person} text="Sobre" menuLink="#about" active={sectionActive === "about"} />
                    <MenuItem Icon={FileEarmark} text="Resumo" menuLink="#resume" active={sectionActive === "resume"} />
                    <MenuItem Icon={BookHalf} text="Portfólio" menuLink="#" active={false} />
                    <MenuItem Icon={Server} text="Produtos" menuLink="#" active={false} />
                    <MenuItem Icon={Envelope} text="Contato" menuLink="#" active={false} />
                </nav>

                <Footer />
            </header>
        </>
    );
}