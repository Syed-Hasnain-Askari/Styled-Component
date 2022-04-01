import createGlobalStyle  from "styled-components";
import primaryFont from "./assets/fonts/FontsFree-Net-RocGrotesk.ttf";
import primaryFont2 from "./assets/fonts/FontsFree-Net-RocGrotesk2.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Roc-Grotesk';
        src: url(${primaryFont});
    }
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Roc-Grotesk';
    }
`;
