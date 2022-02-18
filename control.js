// task-1
// changing font color

document.getElementById('color-chng').style.color = 'orange'

/* ------------------------------------------------------------------ */

// task-2
// changing background color

document.getElementById('back-chng').style.backgroundColor = 'rgba(64, 221, 219, 0.8)';
document.getElementById('back-chng').style.padding = '7px';
document.getElementById('back-chng').style.borderRadius = '10px';

/* ------------------------------------------------------------------ */

// task-3
// adding ul when button is clicked

document.getElementById('addWithClick').addEventListener('click', function () {
    // console.log('clicked')

    const li = document.createElement('li'); //li is created
    li.innerText = 'click is working'; //text is written in li
    li.classList.add('item'); //then it is added in the item class
    const parent = document.getElementById('main'); //connected with id parants name main
    parent.appendChild(li) // added it as a chile of main
})

/* ------------------------------------------------------------------ */
// task-4
// creating input number field and increase or decrease number pressing button

document.getElementById('chngWithClick').addEventListener('click', function () {
    // console.log('click is working');


    const input = document.getElementById('input');
    const inputText = input.value;
    const takeInputNumber = parseInt(inputText);
    const increaseInputNumber = takeInputNumber + 1;
    input.value = increaseInputNumber
})

/* ------------------------------------------------------------------ */

// task-5
document.getElementById('chngWithClickk').addEventListener('click', function () {
    // console.log('click is working');


    const inputt = document.getElementById('inputt');
    const inputText = inputt.value;
    const takeInputNumber = parseInt(inputText);
    if (takeInputNumber < 5) {
        const increaseInputNumber = takeInputNumber + 1;
        inputt.value = increaseInputNumber;
    }
    if (inputt.value == 5) {
        document.getElementById('chngWithClickk').setAttribute('disabled', true);
    }
})

// /* -------------------------------------------------------------------------- */

// // task-6

// const books = [
//     'You Don,t Know JS',
//     'An In-Depth Guide for Programmers',
//     'Single Page Apps in Depth',
//     'A Smarter Way to Learn JAvaScript',
//     'DOM Enlightenment',
//     'Beginning React'
// ]

// let search = 'javascript'
// let output = []
// for (const book of books) {
//     if (book.toLowerCase().indexOf(search.toLowerCase()) != -1) {
//         output.push(book);
//     }
// }

// console.log(output)

/* -------------------------------------------------------------------------- */

// // task-7

// // use of sort

// const number = [4, 2, 5, 9, 7, 1, 6, 3];

// console.log(number.sort());