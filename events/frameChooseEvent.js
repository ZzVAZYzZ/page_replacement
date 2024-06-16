import { frameChoice } from "../utils/frameChoice.js";
import { changeBgTextColor } from "../helpers/changeBgTextColorHelper.js";
import { resetBgTextColor } from "../helpers/resetBgTextColorHelper.js";
import { colorHex } from "../utils/colorHex.js";


let _frameChoice = 4;

const setFrameChoice = (value) => {
    _frameChoice = value;
};
//frammeChoice click
frameChoice.frameOne.addEventListener('click',()=>{
    setFrameChoice(1);
    changeBgTextColor(frameChoice.frameOne,colorHex.pink,colorHex.white);
    resetBgTextColor(frameChoice.frameOne,1);
})

frameChoice.frameTwo.addEventListener('click',()=>{
    setFrameChoice(2);
    changeBgTextColor(frameChoice.frameTwo,colorHex.pink,colorHex.white);
    resetBgTextColor(frameChoice.frameTwo,1);
})

frameChoice.frameThree.addEventListener('click',()=>{
    setFrameChoice(3);
    changeBgTextColor(frameChoice.frameThree,colorHex.pink,colorHex.white);
    resetBgTextColor(frameChoice.frameThree,1);
})

frameChoice.frameFour.addEventListener('click',()=>{
    setFrameChoice(4);
    changeBgTextColor(frameChoice.frameFour,colorHex.pink,colorHex.white);
    resetBgTextColor(frameChoice.frameFour,1);
})

frameChoice.frameFive.addEventListener('click',()=>{
    setFrameChoice(5);
    changeBgTextColor(frameChoice.frameFive,colorHex.pink,colorHex.white);
    resetBgTextColor(frameChoice.frameFive,1);
})

//Move mouse enter frameChoice
frameChoice.frameOne.addEventListener('mouseenter', () => {
    changeBgTextColor(frameChoice.frameOne,colorHex.pink,colorHex.white);
});

frameChoice.frameTwo.addEventListener('mouseenter', () => {
    changeBgTextColor(frameChoice.frameTwo,colorHex.pink,colorHex.white);
});

frameChoice.frameThree.addEventListener('mouseenter', () => {
    changeBgTextColor(frameChoice.frameThree,colorHex.pink,colorHex.white);
});

frameChoice.frameFour.addEventListener('mouseenter', () => {
    changeBgTextColor(frameChoice.frameFour,colorHex.pink,colorHex.white);
});

frameChoice.frameFive.addEventListener('mouseenter', () => {
    changeBgTextColor(frameChoice.frameFive,colorHex.pink,colorHex.white);
});
//Move mouse leave frameChoice
frameChoice.frameOne.addEventListener('mouseleave', () => {
    if(_frameChoice !== 1) resetBgTextColor(frameChoice.frameOne,2);
});

frameChoice.frameTwo.addEventListener('mouseleave', () => {
    if(_frameChoice !== 2) resetBgTextColor(frameChoice.frameTwo,2);
});

frameChoice.frameThree.addEventListener('mouseleave', () => {
    if(_frameChoice !== 3) resetBgTextColor(frameChoice.frameThree,2);
});

frameChoice.frameFour.addEventListener('mouseleave', () => {
    if(_frameChoice !== 4) resetBgTextColor(frameChoice.frameFour,2);
});

frameChoice.frameFive.addEventListener('mouseleave', () => {
    if(_frameChoice !== 5) resetBgTextColor(frameChoice.frameFive,2);
});

export const getFrameChoice = () => _frameChoice;