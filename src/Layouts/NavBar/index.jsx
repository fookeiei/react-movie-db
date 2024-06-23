import NavBarList from "./navBarList";
import { navItemLeaf, navItemRight } from './navItems'

const NavBar = () => {
    return <nav className="h-16 bg-tmdbDarkBlue flex text-white font-semibold justify-between items-center max-w-[1300px] mx-auto px-10">
        <NavBarList items={navItemLeaf} />
        <NavBarList items={navItemRight} />
    </nav>
}

export default NavBar;