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

                    <a href="https://twitter.com/ABC123Community"><img width="28px" className="rounded-full" height="28px" src="data:image/png;base64,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" alt=""/></a>
                    <a href="https://discord.com/invite/abccommunity"><img width="28px" className="rounded-full" height="28px" src="data:image/png;base64,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" alt=""/></a>
                    <a href="https://opensea.io/collection/abcabracadabra"><svg width="28px" height="28px" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z" fill="white"/>
                        <path d="M22.2011 46.512L22.3952 46.2069L34.1015 27.8939C34.2726 27.6257 34.6748 27.6535 34.8043 27.9447C36.7599 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3947 44.4593 35.3544 46.2069C35.2204 46.4612 35.0724 46.7109 34.9152 46.9513C34.8413 47.0622 34.7164 47.127 34.5823 47.127H22.5432C22.2195 47.127 22.03 46.7756 22.2011 46.512Z" fill="#2081E2"/>
                        <path d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1303 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.9489C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3022 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.046 56.7435 35.655 57.7283 37.3933 57.7283H43.866V52.675H37.4673C37.139 52.675 36.9449 52.2959 37.1344 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9712 50.8257 38.8358 49.4895 39.6957 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4757 44.3438 41.5497 44.1449C41.6745 43.7936 41.804 43.4653 41.8964 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4466 40.3723 42.4466 39.3459C42.4466 38.9437 42.4281 38.523 42.3911 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4572 32.864 41.3278 32.4618C40.9625 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7618 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2856 24.6437 38.1562 24.371 38.0267 24.112C37.9343 23.9132 37.8279 23.7283 37.7539 23.5434L36.9634 22.0824C36.8524 21.8836 37.0373 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2293 23.0533 42.234 23.0533L42.8858 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0033 18 46.4088 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5203 25.0968 49.5619 25.1153 49.5989 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.334 25.7071 50.5328 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7705 27.8107 52.9185 27.9587C53.7229 28.7076 54.6245 29.5861 55.4844 30.557C55.7248 30.8297 55.9606 31.1071 56.201 31.3984C56.4415 31.6943 56.6957 31.9856 56.9177 32.2769C57.2089 32.6652 57.5233 33.0674 57.7961 33.4882C57.9255 33.687 58.0735 33.8904 58.1983 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4096 36.2529 59.5206 36.5257C59.8488 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.362 39.0963 60.3805 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3435 42.2956C60.2742 42.6239 60.1817 42.9336 60.0708 43.2619C59.9598 43.5763 59.8488 43.9045 59.7055 44.2143C59.4281 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4387 46.5583 58.2908 46.7802C58.129 47.016 57.9625 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.1719 48.2828C56.9731 48.5556 56.7697 48.8284 56.5478 49.0688C56.238 49.434 55.9421 49.7808 55.6324 50.1137C55.4474 50.331 55.2486 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.458 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0895 52.638 52.9924 52.675 52.8907 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2135 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1031 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z" fill="#2081E2"/>
                    </svg></a>
                    <a href="https://magiceden.io/marketplace/abc_abracadabra"><img width="28px" className="rounded-full" height="28px" src="https://apifyusercontent.com/a04e49441b810a5c80b8fac5eba6e28c737ee9d8/68747470733a2f2f61706966792d696d6167652d75706c6f6164732d70726f642e73332e616d617a6f6e6177732e636f6d2f66645436634d4a72444454304a5069746c2f52417a624d4371343865445a37345774392d68747470735f5f5f6275636b65746565722d65303562626338342d626161332d343337652d393531382d6164623332626537373938342e73332e616d617a6f6e" alt=""/></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by ABC</p>
            </div>
        </footer>
    );
}
export default Footer;