import { List, X, HouseDoor, Person, FileEarmark, BookHalf, Server, Envelope } from "react-bootstrap-icons";
import Profile, { ProfileProps } from "./Profile";
import MenuItem from "./MenuItem";
import Footer from "./Footer";

interface NavMenuProps extends ProfileProps {
    menuActive: boolean;
    toggleMenu: () => void;
}

export default function NavMenu({ image, profileStyle, profileTitle, menuActive, toggleMenu }: NavMenuProps) {
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

            <header className={`select-none fixed top-0 bottom-0 lg:left-0 ${menuActive ? "left-0" : "-left-80"} bg-primary w-[300px] transition-all duration-1000`}>
                <Profile image={image} profileStyle={profileStyle} profileTitle={profileTitle} />

                <nav>
                    <MenuItem Icon={HouseDoor} text="Início" menuLink="#hero" active={true} />
                    <MenuItem Icon={Person} text="Sobre" menuLink="#about" />
                    <MenuItem Icon={FileEarmark} text="Resumo" menuLink="#" />
                    <MenuItem Icon={BookHalf} text="Portfólio" menuLink="#" />
                    <MenuItem Icon={Server} text="Produtos" menuLink="#" />
                    <MenuItem Icon={Envelope} text="Contato" menuLink="#" />
                </nav>

                <Footer />
            </header>
        </>
    );
}