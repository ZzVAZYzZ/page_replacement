import FIFOPageReplacement from '../classes/FIFOPageReplacement.js';
import LRUPageReplacement from '../classes/LRUPageReplacement.js';
import OPTIMALPageReplacement from '../classes/OPTIMALPageReplacement.js';
import CLOCKPageReplacement from '../classes/CLOCKPageReplacement.js';

export const runFIFO = (frameChoice) => {
    const inputValue = document.getElementById('referenceDetail').value.trim();
    const pages = inputValue.split(' ').map(Number);
    const result = document.getElementById('result');
    result.innerHTML = "";
    const fifo = new FIFOPageReplacement(frameChoice,result);

    pages.forEach(page => fifo.accessPage(page));
    
    const totalPageFaults = fifo.getPageFaults();

    result.innerHTML += `Total page faults: ${totalPageFaults}`;
}

export const runLRU = (frameChoice) => {
    const inputValue = document.getElementById('referenceDetail').value.trim();
    const pages = inputValue.split(' ').map(Number);
    const result = document.getElementById('result');
    result.innerHTML = "";
    const lru = new LRUPageReplacement(frameChoice,result);
    pages.forEach(page => lru.accessPage(page));
    const totalPageFaults = lru.getPageFaults();
    result.innerHTML += `Total page faults: ${totalPageFaults}`;
}

export const runOPTIMAL = (frameChoice) => {
    const inputValue = document.getElementById('referenceDetail').value.trim();
    const pages = inputValue.split(' ').map(Number);
    const result = document.getElementById('result');
    result.innerHTML = "";
    const optimal = new OPTIMALPageReplacement(frameChoice,result);
    pages.forEach(page => optimal.accessPage(page));
    const totalPageFaults = optimal.getPageFaults();
    result.innerHTML += `Total page faults: ${totalPageFaults}`;
}

export const runCLOCK = (frameChoice) => {
    const inputValue = document.getElementById('referenceDetail').value.trim();
    const pages = inputValue.split(' ').map(Number);
    const result = document.getElementById('result');
    result.innerHTML = "";
    const optimal = new CLOCKPageReplacement(frameChoice,result);
    pages.forEach(page => optimal.accessPage(page));
    const totalPageFaults = optimal.getPageFaults();
    result.innerHTML += `Total page faults: ${totalPageFaults}`;
}

