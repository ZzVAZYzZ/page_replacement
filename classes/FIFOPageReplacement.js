import { addOnColumn,resetReferenceCount } from "../components/pageFramesGenerator.js";

export default class FIFOPageReplacement {
    constructor(frameSize) {
        this.frameSize = frameSize;
        this.frames = [];
        this.pageFaults = 0;
        this.autoBot = 0;
    }   

    accessPage(page) {
        const pageExists = this.frames.some(item => item.page === page);
        //reset pinky
        this.resetPinky();
        if (!pageExists) {

            // Page fault
            this.pageFaults++;
            if (this.frames.length < this.frameSize) {
                // Add the new page if there is space
                this.frames.push({
                    page: page,
                    pinky: true
                });
            } else {
                // Replace the oldest page
                this.frames[this.autoBot].page = page;
                this.frames[this.autoBot].pinky = true;
            }
            this.runAutoBot();
        }
        // Update result in DOM
        this.updateResult(page);
        resetReferenceCount();
    }

    // resetPinky use to reset color when render, if pinky = true when render background color will be pink and otherwise backgroud color is white
    resetPinky(){
        this.frames.forEach( item => {
            item.pinky = false;
        })
    }

    runAutoBot(){
        this.autoBot++;
        //reset autoBot
        if(this.autoBot>=this.frameSize){
            this.autoBot = 0;
        }
    }

    updateResult(page) {
        addOnColumn(page,this.frameSize,this.frames);
    }

    getPageFaults() {
        return this.pageFaults;
    }
}
