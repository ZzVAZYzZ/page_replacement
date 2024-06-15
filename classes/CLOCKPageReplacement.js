export default class CLOCKPageReplacement {
    constructor(frameSize, resultElement) {
        this.frameSize = frameSize;
        this.frames = [];
        this.clockFrames = []; // Mảng để lưu trạng thái các khung trang trong Clock
        this.pageFaults = 0;
        this.resultElement = resultElement;
        this.pointer = 0; // Con trỏ để theo dõi vị trí hiện tại trong vòng tròn
        this.pinkyCounter = 1;
    }

    accessPage(page) {
        const pageIndex = this.frames.findIndex(item => item.page === page);
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
                this.clockFrames.push({
                    referenced: 0
                });
                this.checkPinkyCounter()
            } else {
                // Replace a page using the Clock algorithm
                this.replacePage(page);
            }
        } else {
            // Page already exists, set its referenced bit to 1
            this.clockFrames[pageIndex].referenced = 1;
        }

        // Update result in DOM
        this.updateResult();
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

            if (currentPage.referenced === 0) {
                // Replace this page
                this.frames[this.pointer] = {
                    page: page,
                    pinky: true
                };
                this.clockFrames[this.pointer] = {
                    referenced: 0
                };
                this.checkPinkyCounter();
                this.pointer = (this.pointer + 1) % this.frameSize; // go to next position
                break;
            } else {
                // Set the referenced bit to 0 and move the pointer
                currentPage.referenced = 0;
                this.pointer = (this.pointer + 1) % this.frameSize;
                this.checkPinkyCounter();
            }
        }
    }

    updateResult() {
        // Prepare the content to append
        const framesContent = this.frames.map(item => `${item.page}:${item.pinky}`).join(', ');
        const clockFramesContent = this.clockFrames.map(item => `${item.referenced}`).join(', ');
        const pinkyCounter = this.pinkyCounter;
        // Create HTML content to append
        const contentToAppend = `
            <p>Frames: [${framesContent}] AND Clock Frames: [${clockFramesContent}] AND pinkyCounter:${pinkyCounter} </p>
        `;

        // Clear previous content and append new content to resultElement
        this.resultElement.innerHTML += contentToAppend;
    }

    getPageFaults() {
        return this.pageFaults;
    }
}
