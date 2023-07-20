import NavLink from "./NavLink";
import NavLogo from "./NavLogo";

function Header(){
    return (
        <header className='bg-stone-300 shadow-md'>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <NavLogo/>
            <NavLink/>
            <NavLink/>
            <NavLink/>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="rounded-md bg-emerald-800 px-3.5 py-2.5 text-sm font-semibold leading-6 text-stone-100">
                    DONATE
                </a>
            </div>
        </nav>
        </header>  
    );
}

export default Header;