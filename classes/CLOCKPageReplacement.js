import { addOnColumn,resetReferenceCount } from "../components/pageFramesGenerator.js";
import  {addOnClockColumn}  from "../components/clockFramesGenerator.js";

export default class CLOCKPageReplacement {
    constructor(frameSize) {
        this.frameSize = frameSize;
        this.frames = [];
        this.clockFrames = [];
        this.pageFaults = 0;
        this.pointer = 0; 
        this.pinkyCounter = 1;
    }

    accessPage(page) {
        const pageIndex = this.frames.findIndex(item => item.page === page);
        console.log(pageIndex);
        //reset frames pinky
        this.resetPinky();
        if (pageIndex === -1) {
            // Page fault
            this.pageFaults++;
            if (this.frames.length < this.frameSize) {
                // Add the new page if there is space
                this.frames.push({
                    page: page,
                    pinky: true
                });
                this.clockFrames.push(0);
                this.checkPinkyCounter()
            } else {
                // Replace a page using the Clock algorithm
                this.replacePage(page);
            }
        } else {
            // Page already exists, set its referenced bit to 1
            this.clockFrames[pageIndex] = 1;
        }

        // Update result in DOM
        this.updateResult(page);
        resetReferenceCount();
    }

    //pinkyCouter auto run, and check if pinkyCounter > framsize, reset pinkyCounter
    checkPinkyCounter(){
        this.pinkyCounter++;
        if(this.pinkyCounter > this.frameSize){
            this.pinkyCounter = 1
        }
    }

    // resetPinky use to reset color when render, if pinky = true when render background color will be pink and otherwise backgroud color is white
    resetPinky(){
        this.frames.forEach( item => {
            item.pinky = false;
        })
    }

    replacePage(page) {
        while (true) {
            const currentPage = this.clockFrames[this.pointer];

            if (currentPage === 0) {
                // Replace this page
                this.frames[this.pointer] = {
                    page: page,
                    pinky: true
                };
                this.clockFrames[this.pointer] = 0;
                this.checkPinkyCounter();
                this.pointer = (this.pointer + 1) % this.frameSize; // go to next position
                break;
            } else {
                // Set the referenced bit to 0 and move the pointer
                this.clockFrames[this.pointer] = 0;
                this.pointer = (this.pointer + 1) % this.frameSize;
                this.checkPinkyCounter();
            }
        }
    }

    updateResult(page) {
        // Prepare the content to append
        addOnColumn(page,this.frameSize,this.frames);
        addOnClockColumn(this.pinkyCounter,this.frameSize,this.clockFrames);
    }

    getPageFaults() {
        return this.pageFaults;
    }
}
