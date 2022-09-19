function Footer(){
    return(
        <footer className="w-full fixed bottom-0 footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover" href="https://twitter.com/ABC123Community">Twitter</a>
                <a className="link link-hover" href="https://discord.com/invite/abccommunity">Discord</a>
                <a className="link link-hover" href="https://opensea.io/collection/abcabracadabra">Open Sea</a>
                <a className="link link-hover" href="https://magiceden.io/marketplace/abc_abracadabra">Magic Eden</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">

                    <a href="https://twitter.com/ABC123Community"><img width="28px" className="rounded-full" height="28px" src="https://abc123community.com/images/twitter.png" alt=""/></a>
                    <a href="https://discord.com/invite/abccommunity"><img width="28px" className="rounded-full" height="28px" src="https://abc123community.com/images/discord.png" alt=""/></a>
                    <a href="https://opensea.io/collection/abcabracadabra"><img width="28px" className="rounded-full" height="28px" src="https://abc123community.com/images/opensea.png" alt=""/></a>
                    <a href="https://magiceden.io/marketplace/abc_abracadabra"><img width="28px" className="rounded-full" height="28px" src="https://abc123community.com/images/magic_eden.png" alt=""/></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by ABC</p>
            </div>
        </footer>
    );
}
export default Footer;