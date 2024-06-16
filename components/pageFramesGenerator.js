const tableContainer = document.getElementById('tableContainer')


let pageIndexCount = 1;
const framsize = 4;

export const resetPageIndexCount = () => {
    pageIndexCount = 1;
}

const tableWrappler = document.createElement('div');
tableWrappler.classList.add('page-table');


//When click Run button, and excute firstTitleColumn one time
export const firstTitleColumn = (framsize) => {
    document.getElementById('tableContainer').style.display='block'
    tableWrappler.replaceChildren();
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title-div');

    const indexDiv = document.createElement('div');
    indexDiv.innerHTML = 'INDEX';
    indexDiv.classList.add('header-table-div');
    
    titleDiv.appendChild(indexDiv);

    const refDiv = document.createElement('div');
    refDiv.innerHTML='REF';
    refDiv.classList.add('header-table-div');
    refDiv.style.backgroundColor='#C7ECEE';
    titleDiv.appendChild(refDiv);

    
    for (let index = 1; index <= framsize; index++) {
        const fDiv = document.createElement('div');
        fDiv.innerHTML='f';
        fDiv.classList.add('content-table-div');
        titleDiv.appendChild(fDiv);
    }
    
    tableWrappler.appendChild(titleDiv);
    tableContainer.appendChild(tableWrappler);
}

const checkRefUndefined = (value) => {
    if(value === 'undefined'){
        value = '';
    }
    return value;
}

let referenceCount = 0;

export const resetReferenceCount = () => {
    referenceCount = 0;
}


//auto add column when updateresult in classes execute
export const addOnColumn = (reference, framsize, pageResult) => {
    const autoColumn = document.createElement('div');
    autoColumn.classList.add('title-div');

    // index div
    const indexDiv = document.createElement('div');
    indexDiv.innerHTML = `${pageIndexCount}`;
    pageIndexCount++;
    indexDiv.classList.add('content-table-div');
    autoColumn.appendChild(indexDiv);

    // reference div
    const referenceDiv = document.createElement('div');
    let refValue = `${reference}`;
    refValue = checkRefUndefined(refValue);
    referenceDiv.innerHTML = refValue;
    referenceCount++;
    referenceDiv.classList.add('content-table-div');
    referenceDiv.style.backgroundColor='#C7ECEE';
    autoColumn.appendChild(referenceDiv);

    // pagefault div
    for (let index = 0; index < framsize; index++) {
        let pageDiv = document.createElement('div');
        
        if (pageResult[index] !== undefined) {
            let pageResultValue = pageResult[index].page;
            pageDiv.innerHTML = `${pageResultValue}`;
            if(pageResult[index].pinky==true){
                pageDiv.classList.add('pinky');
            }
        } else {
            pageDiv.innerHTML = '';
        }

        pageDiv.classList.add('content-table-div');
        autoColumn.appendChild(pageDiv);
    }

    tableWrappler.appendChild(autoColumn);
}


//WORK FLOW

//after click RUN button. execute this function one time

// firstTitleColumn(framsize);

//when excute updateResult function in ago classes
// addOnColumn(reference,framsize,pageResult1);
// addOnColumn(reference,framsize,pageResult2);
// addOnColumn(reference,framsize,pageResult3);
// addOnColumn(reference,framsize,pageResult4);
// addOnColumn(reference,framsize,pageResult5);
// addOnColumn(reference,framsize,pageResult6);

/*
    div{
        titleDiv{
        
        }

        autoDiv{
        
        }
        ...
        autoDiv{
        
        }
        ...
        autoDiv{
        
        }
        ...
    }
*/