import { useState } from "react";
import { List, X, HouseDoor, Person, FileEarmark, BookHalf, Server, Envelope } from "react-bootstrap-icons";
import Profile, { ProfileProps } from "./Profile";
import MenuItem from "./MenuItem";
import Footer from "./Footer";

interface NavMenuProps extends ProfileProps { }

export default function NavMenu({ image, profileStyle, profileTitle }: NavMenuProps) {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        if (menuActive) {
            setMenuActive(false);
        } else {
            setMenuActive(true);
        }
    };

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

                onClick={() => toggleMenu()}
            >
                {!menuActive ? <List className="text-2xl text-white w-10 h-10" /> : <X className="text-2xl text-white w-10 h-10" />}
            </div>

            <header className={`select-none fixed top-0 bottom-0 lg:left-0 ${menuActive ? "left-0" : "-left-80"} bg-primary w-80 transition-all duration-1000`}>
                <Profile image={image} profileStyle={profileStyle} profileTitle={profileTitle} />

                <nav>
                    <MenuItem Icon={HouseDoor} text="Início" menuLink="#" />
                    <MenuItem Icon={Person} text="Sobre" menuLink="#" />
                    <MenuItem Icon={FileEarmark} text="Resumo" menuLink="#" />
                    <MenuItem Icon={BookHalf} text="Portfólio" menuLink="#" />
                    <MenuItem Icon={Server} text="Produtos" menuLink="#" />
                    <MenuItem Icon={Envelope} text="Produtos" menuLink="#" />
                </nav>

                <Footer />
            </header>
        </>
    );
}