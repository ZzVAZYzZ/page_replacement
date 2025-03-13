import { changeBgTextColor } from "../helpers/changeBgTextColorHelper.js";
import { resetBgTextColor } from "../helpers/resetBgTextColorHelper.js";
import { colorHex } from "../utils/colorHex.js";
import { agoChoice } from "../utils/agoChoice.js";

let _algorithm = 1;


const setAlgorithm = (value) => {
    _algorithm = value;
};
//Click ago
agoChoice.FIFOChoice.addEventListener('click', () => {
    setAlgorithm(1);
    changeBgTextColor(agoChoice.FIFOChoice,colorHex.pink,colorHex.white);
    resetBgTextColor(agoChoice.FIFOChoice,1);
});

agoChoice.LRUChoice.addEventListener('click', () => {
    setAlgorithm(2);
    changeBgTextColor(agoChoice.LRUChoice,colorHex.pink,colorHex.white);
    resetBgTextColor(agoChoice.LRUChoice,1);
});

agoChoice.OPTIMALChoice.addEventListener('click', () => {
    setAlgorithm(3);
    changeBgTextColor(agoChoice.OPTIMALChoice,colorHex.pink,colorHex.white);
    resetBgTextColor(agoChoice.OPTIMALChoice,1);
});

agoChoice.CLOCKChoice.addEventListener('click', () => {
    setAlgorithm(4);
    changeBgTextColor(agoChoice.CLOCKChoice,colorHex.pink,colorHex.white);
    resetBgTextColor(agoChoice.CLOCKChoice,1);
});

//Move mouse enter ago
agoChoice.FIFOChoice.addEventListener('mouseenter', () => {
    changeBgTextColor(agoChoice.FIFOChoice,colorHex.pink,colorHex.white);
});

agoChoice.LRUChoice.addEventListener('mouseenter', () => {
    changeBgTextColor(agoChoice.LRUChoice,colorHex.pink,colorHex.white);
});

agoChoice.OPTIMALChoice.addEventListener('mouseenter', () => {
    changeBgTextColor(agoChoice.OPTIMALChoice,colorHex.pink,colorHex.white);
});

agoChoice.CLOCKChoice.addEventListener('mouseenter', () => {
    changeBgTextColor(agoChoice.CLOCKChoice,colorHex.pink,colorHex.white);
});

//Move mouse leave ago
agoChoice.FIFOChoice.addEventListener('mouseleave', () => {
    if(_algorithm !== 1) resetBgTextColor(agoChoice.FIFOChoice,2);
});

agoChoice.LRUChoice.addEventListener('mouseleave', () => {
    if(_algorithm !== 2) resetBgTextColor(agoChoice.LRUChoice,2);
});

agoChoice.OPTIMALChoice.addEventListener('mouseleave', () => {
    if(_algorithm !== 3) resetBgTextColor(agoChoice.OPTIMALChoice,2);
});

agoChoice.CLOCKChoice.addEventListener('mouseleave', () => {
    if(_algorithm !== 4) resetBgTextColor(agoChoice.CLOCKChoice,2);
});


export const getAlgorithm = () =>  _algorithm;