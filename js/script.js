// first page start

const quizForm = document.querySelector('.first__page--card');
const nameInput = document.querySelector('#name');
const firstPage = document.querySelector('.first__page');
const secondPage = document.querySelector('.second__page');

const user = {};

quizForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const difficulty = document.querySelector(
        'input[name="difficulty"]:checked'
    );

    // Validate name
    if (!name) {
        alert('Please enter your name.');
        return;
    }

    // Validate difficulty
    if (!difficulty) {
        alert('Please select a difficulty.');
        return;
    }

    user.name = name;
    user.difficulty = difficulty.value;


    firstPage.classList.toggle('hide');
    secondPage.classList.toggle('hide');
    console.log(user);
});

// first page end

////////////////////////////////////////////////////////////////////

// second page start

const backBtn = document.querySelector('.go-back');


backBtn.addEventListener('click' , function(e){
    e.preventDefault();

    // selecting the selected radio button
    const difficulty = document.querySelector(
        'input[name="difficulty"]:checked'
    );

    // switching pages
    firstPage.classList.toggle('hide');
    secondPage.classList.toggle('hide');

    // resetting the user object
    user.name = undefined;
    user.difficulty = undefined;
    
    // making the input fields empty
    nameInput.value = '';
    difficulty.checked = false;

    console.log(user);
})

// second page end