import FIFOPageReplacement from './classes/FIFOPageReplacement.js';

window.runFIFO = () => {
    const inputValue = document.getElementById('referenceDetail').value.trim();
    const pages = inputValue.split(' ').map(Number);
    const fifo = new FIFOPageReplacement(3);

    pages.forEach(page => fifo.accessPage(page));
    
    console.log(`Total page faults: ${fifo.getPageFaults()}`);
}


