function Header(){
    return(
        <div className="navbar fixed bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="https://twitter.com/ABC123Community">Twitter</a></li>
                        <li><a href="https://discord.com/invite/abccommunity">Discord</a></li>
                        <li><a href="https://opensea.io/collection/abcabracadabra">OpenSea</a></li>
                        <li><a href="https://magiceden.io/marketplace/abc_abracadabra">Magic Eden</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">ABCFlip</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="https://twitter.com/ABC123Community">Twitter</a></li>
                    <li><a href="https://discord.com/invite/abccommunity">Discord</a></li>
                    <li><a href="https://opensea.io/collection/abcabracadabra">OpenSea</a></li>
                    <li><a href="https://magiceden.io/marketplace/abc_abracadabra">Magic Eden</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Connect wallet</a>
            </div>
        </div>
    );
}
export default Header;