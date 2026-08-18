// first page
const firstPage = document.querySelector('.first__page');
const quizForm = document.querySelector('.first__page--card');
const nameInput = document.querySelector('#name');

// second page
const secondPage = document.querySelector('.second__page');
const backBtn = document.querySelector('.go-back');
const startExamBtn = document.querySelector('.start-exam-btn');
const readInstructionsCheckbox = document.querySelector('#read-checkbox');

// third page
const thirdPage = document.querySelector('.third__page');

// first page start

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

    // setting the attributes on user object
    user.name = name;
    user.difficulty = difficulty.value;

    // switching the pages
    firstPage.classList.toggle('hide');
    secondPage.classList.toggle('hide');

    // making the checkbox empty
    readInstructionsCheckbox.checked = false;

    // make the start exam button look unclickable
    startExamBtn.classList.add('rejected-btn');
    startExamBtn.classList.remove('classic-btn');

    // make the button actually unclickable
    startExamBtn.disabled = true;

    console.log(user);
});

// first page end

////////////////////////////////////////////////////////////////////

// second page start

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
});


readInstructionsCheckbox.addEventListener('change' , function(e){
    e.preventDefault();

    if(readInstructionsCheckbox.checked){
        // make the start exam button look clickable
        startExamBtn.classList.toggle('rejected-btn');
        startExamBtn.classList.toggle('classic-btn');

        // make the button actually clickable
        startExamBtn.disabled = false;
    }
    else{
        // make the start exam button look unclickable
        startExamBtn.classList.toggle('rejected-btn');
        startExamBtn.classList.toggle('classic-btn');

        // make the button actually clickable
        startExamBtn.disabled = true;
    }

    console.log('checked')
})


startExamBtn.addEventListener('click' , function(e){
    e.preventDefault();

    console.log('start exam')

    // switching the pages
    // secondPage.classList.toggle('hide');
    thirdPage.classList.toggle('hide');
})



// second page end