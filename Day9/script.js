const changeText=()=>{
    const headingText=document.getElementById("heading")
    headingText.textContent="Changed Text"

   
}


// Task 2: Select HTML elements by their class and change their background color.
// This method will change the color of all the elements which is aligned with class name "color-change"
function changeBackgroundColor() {
    const elements = document.getElementsByClassName('color-change');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'lightblue';
    }
}


// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
function createAndAppendDiv() {
    const newDiv = document.createElement('div'); // create the div
    newDiv.textContent = 'This is a new div';  // set the content
    document.body.appendChild(newDiv); // add new div in the body 
}
createAndAppendDiv();

// Task 4: Create a new li element and add it to an existing ul list.
function addListItem() {
    const ul = document.getElementById('list'); 
    const newLi = document.createElement('li');
    newLi.textContent = 'Item 3';
    ul.appendChild(newLi);
}
addListItem();


// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
function removeElement() {
    const element = document.getElementById('heading'); // it will remove paragraph
    if (element) {
        element.remove();
    }
}
removeElement();

// Task 6: Remove the last child of a specific HTML element.
function removeLastChild() {
    const ul = document.getElementById('list'); // it will remove item 3 
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
}
removeLastChild();


// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
function changeImageSource() {
    const img = document.getElementById('image');
    img.src = 'https://cdn.pixabay.com/photo/2020/05/16/09/44/couple-5176740_1280.jpg'; // it will change the image by finding the id image
}
changeImageSource();

// Task 8: Add and remove a CSS class to/from an HTML element.
function toggleHighlight() {
    const paragraph = document.getElementById('paragraph');
    paragraph.classList.toggle('highlight');
}

// Activity 5:
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById('changeTextButton').addEventListener('click', function() {
    const paragraph = document.getElementById('textParagraph');
    paragraph.textContent = 'Text has been changed!';
});


// Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById('box').addEventListener('mouseover', function() {
    this.style.border = '2px solid blue';
});

