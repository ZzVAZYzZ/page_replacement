import FIFOPageReplacement from '../classes/FIFOPageReplacement.js';
import LRUPageReplacement from '../classes/LRUPageReplacement.js';
import OPTIMALPageReplacement from '../classes/OPTIMALPageReplacement.js';
import CLOCKPageReplacement from '../classes/CLOCKPageReplacement.js';
import { resetPageIndexCount } from '../components/pageFramesGenerator.js';


export const runFIFO = (frameChoice,inputValue) => {
    const pages = inputValue.split(' ').map(Number);
    
    const fifo = new FIFOPageReplacement(frameChoice);

    pages.forEach(page => fifo.accessPage(page));
    
    resetPageIndexCount();

    const totalPageFaults = fifo.getPageFaults();
}

export const runLRU = (frameChoice,inputValue) => {
    const pages = inputValue.split(' ').map(Number);
    
    const lru = new LRUPageReplacement(frameChoice);
    pages.forEach(page => lru.accessPage(page));
    resetPageIndexCount();
    const totalPageFaults = lru.getPageFaults();
}

export const runOPTIMAL = (frameChoice,inputValue) => {
    const pages = inputValue.split(' ').map(Number);
    
    const optimal = new OPTIMALPageReplacement(frameChoice);
    pages.forEach(page => optimal.accessPage(page));
    resetPageIndexCount();
    const totalPageFaults = optimal.getPageFaults();
}

export const runCLOCK = (frameChoice,inputValue) => {
    const pages = inputValue.split(' ').map(Number);
    
    const optimal = new CLOCKPageReplacement(frameChoice);
    pages.forEach(page => optimal.accessPage(page));
    resetPageIndexCount();
    const totalPageFaults = optimal.getPageFaults();
}

