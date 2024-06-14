export default class LRUPageReplacement {
    constructor(frameSize, resultElement) {
        this.frameSize = frameSize;
        this.frames = [];
        this.pageFaults = 0;
        this.resultElement = resultElement;
        this.countOfPageIndex = 1;
    }

    accessPage(page) {
    
        if (!this.frames.includes(page)) {
            // Page fault
            this.pageFaults++;
            if (this.frames.length < this.frameSize) {
                // Add the new page if there is space
                this.frames.push({
                    page: page,
                    countOfPageIndex: this.countOfPageIndex
                });
                this.countOfPageIndex++;
            } else {
                // Replace the least recently used page (LRU logic)
                const lruPageIndex = this.findLRUPage();
                this.frames.splice(lruPageIndex, 1, {
                    page: page,
                    countOfPageIndex: this.countOfPageIndex
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
        this.updateResult();
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

    updateResult() {

        const framesContent = this.frames.map(item => item.page).join(', ');
    
        const contentToAppend = `
            <p>Frames: [${framesContent}]</p>
        `;

        this.resultElement.innerHTML += contentToAppend;
    }
    

    getPageFaults() {
        return this.pageFaults;
    }
}
