import { addOnColumn,resetReferenceCount } from "../components/pageFramesGenerator.js";

export default class LRUPageReplacement {
    constructor(frameSize, resultElement) {
        this.frameSize = frameSize;
        this.frames = [];
        this.pageFaults = 0;
        this.resultElement = resultElement;
        this.countOfPageIndex = 1;
    }

    accessPage(page) {
        const pageExists = this.frames.some(item => item.page === page);
        //reset pinky
        this.resetPinky()
        if (!pageExists) {
            // Page fault
            this.pageFaults++;
            if (this.frames.length < this.frameSize) {
                // Add the new page if there is space
                this.frames.push({
                    page: page,
                    countOfPageIndex: this.countOfPageIndex,
                    pinky: true
                });
                this.countOfPageIndex++;
            } else {
                // Replace the least recently used page (LRU logic in function findLRUPage)
                const lruPageIndex = this.findLRUPage();
                this.frames.splice(lruPageIndex, 1, {
                    page: page,
                    countOfPageIndex: this.countOfPageIndex,
                    pinky: true
                });
                this.countOfPageIndex++;
            }
        } else {
            // Page already exists, update its countOfPageIndex
            const pageIndex = this.frames.findIndex(item => item.page === page);
            this.frames[pageIndex].countOfPageIndex = this.countOfPageIndex;
            this.countOfPageIndex++;
        }
    
        // Update result in DOM
        this.updateResult(page);
        resetReferenceCount();
    }
    
    findLRUPage() {
        let oldestPageIndex = 0;
        let oldestPageCount = this.frames[0].countOfPageIndex;
        //swap oldest CountOfPageIndex
        this.frames.forEach((item, index) => {
            if (item.countOfPageIndex < oldestPageCount) {
                oldestPageIndex = index;
                oldestPageCount = item.countOfPageIndex;
            }
        });
    
        return oldestPageIndex;
    }

    // resetPinky use to reset color when render, if pinky = true when render background color will be pink and otherwise backgroud color is white
    resetPinky(){
        this.frames.forEach( item => {
            item.pinky = false;
        })
    }

    updateResult(page) {
        addOnColumn(page,this.frameSize,this.frames);
    }
    

    getPageFaults() {
        return this.pageFaults;
    }
}