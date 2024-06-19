import FIFOPageReplacement from '../classes/FIFOPageReplacement.js';
import LRUPageReplacement from '../classes/LRUPageReplacement.js';
import OPTIMALPageReplacement from '../classes/OPTIMALPageReplacement.js';
import CLOCKPageReplacement from '../classes/CLOCKPageReplacement.js';
import { resetPageIndexCount } from '../components/pageFramesGenerator.js';

export const runFIFO = (frameChoice,inputValue) => {
    const pages = inputValue;
    
    const fifo = new FIFOPageReplacement(frameChoice);

    pages.forEach(page => fifo.accessPage(page));
    
    resetPageIndexCount();

    const totalPageFaults = fifo.getPageFaults();

    document.getElementById('pageFault').innerHTML=`Total Page Fault: ${totalPageFaults}`;
}

export const runLRU = (frameChoice,inputValue) => {
    const pages = inputValue;
    
    const lru = new LRUPageReplacement(frameChoice);
    pages.forEach(page => lru.accessPage(page));
    resetPageIndexCount();
    const totalPageFaults = lru.getPageFaults();
    document.getElementById('pageFault').innerHTML=`Total Page Fault: ${totalPageFaults}`;
}

export const runOPTIMAL = (frameChoice,inputValue) => {
    const pages = inputValue;
    
    const optimal = new OPTIMALPageReplacement(frameChoice);
    pages.forEach(page => optimal.accessPage(page));
    resetPageIndexCount();
    const totalPageFaults = optimal.getPageFaults();
    document.getElementById('pageFault').innerHTML=`Total Page Fault: ${totalPageFaults}`;
}

export const runCLOCK = (frameChoice,inputValue) => {
    const pages = inputValue;
    
    const optimal = new CLOCKPageReplacement(frameChoice);
    pages.forEach(page => optimal.accessPage(page));
    // firstClockRender(frameChoice);
    resetPageIndexCount();
    const totalPageFaults = optimal.getPageFaults();
    document.getElementById('pageFault').innerHTML=`Total Page Fault: ${totalPageFaults}`;
}

