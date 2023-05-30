function checkForm(form) {
    // Checks if all form fields are filled
    for (let i = 0; i < form.length; i++) {
        if (form[i].required && !form[i].value) {
            alert("Please fill all required fields.");
            return false;
        }
    }

    // If everything is filled, a success message pops up. 
    alert("Form submitted successfully!");
    return true;
}

let byEmail = document.getElementById("byEmail");
let byPhone = document.getElementById("byPhone");
let noReply = document.getElementById("noReply");
let emailField = document.getElementById("emailField");
let phoneField = document.getElementById("phoneField");

if (byEmail) {
    byEmail.addEventListener('change', function () {
        emailField.required = true;
        phoneField.required = false;
    });
}

if (byPhone) {
    byPhone.addEventListener('change', function () {
        emailField.required = false;
        phoneField.required = true;
    });
}

if (noReply) {
    noReply.addEventListener('change', function () {
        emailField.required = false;
        phoneField.required = false;
    });
}


// ----------------------------

let nameInput = document.querySelector('#name-input');
let nameIsInput = document.querySelector('#done-btn');
let imageCountingSheep = document.getElementById('imageCountingSheep');
let welcomeMessage;

const displayWelcomeMessage = () => {
    if (nameInput.value === '') {
        welcomeMessage = 'We respect your wish to remain anonymous and we are glad to see you here.';
    }
    else {
        welcomeMessage = 'Nice to meet you, ' + nameInput.value + '!';
    };

    alert(`${welcomeMessage}`);
    nameInput.value = '';
}

if (nameInput && nameIsInput) {
    nameIsInput.addEventListener('click', displayWelcomeMessage);

    nameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            displayWelcomeMessage();
        }
    });

    nameInput.style.animation = 'pulse 2s infinite';
    imageCountingSheep.style.boxShadow = '-0.5px -0.5px 27px 13px rgba(173, 5, 65, 0.18)';
}



// ----------------------------

// Object declaration
// HTML element with the id of 'contactForm' is assigned to the variable form.
document.addEventListener('DOMContentLoaded', function () {
    let contactForm = document.querySelector('#contactForm');

    contactForm.addEventListener('submit', ($event) => {
        // Prevents the default action of the form submission from happening, i.e. prevents it from refreshing the page. 
        $event.preventDefault();

        // Creates properties in the 'formData' object.
        let formData = {
            name: document.querySelector('#nameField').value,
            email: document.querySelector('#emailField').value,
            phone: document.querySelector('#phoneField').value,
            text: document.querySelector('#textArea').value
        };

        // Logs the formData object to the console.
        console.log(formData);
    });
});


// ----------------------------    

document.addEventListener('DOMContentLoaded', function (e) {
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var collapseElem = entry.target.querySelector('.collapse');
                var btnElem = entry.target.querySelector('.btn-primary');
                if (collapseElem && btnElem) {
                    btnElem.click();
                    observer.unobserve(entry.target);
                }
            }
        });
    });

    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        observer.observe(card);
    });
});


// Forum
// DOM ELEMENT REFERENCES

document.addEventListener("DOMContentLoaded", function (e) {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const submitBtn = document.getElementById('submit-button');
    const sidebarForm = document.getElementById('sidebar');
    const commentForm = document.getElementById('comment-form');

    submitBtn.addEventListener('click', () => {
        sidebarForm.textContent = 'Hello, ' + firstNameInput.value + ' ' + lastNameInput.value + '!';
        commentForm.reset();
    });
});



// let searchBtn = document.querySelector('search-btn');
// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     let searchData = {
//         searchItem: document.querySelector('#search-input').value
//     };
//     console.log(searchData);
// });


// DOM ELEMENT REFERENCES
const sleepEnvironmentHabitsResult = document.getElementById('sleep-environment-habits-result');
const sleepPatternResult = document.getElementById('sleep-pattern-result');
const musicResult = document.getElementById('music-result');

document.getElementById('pets-in-bedroom-habit-checkbox').addEventListener('change', ($event) => {
    if ($event.target.checked) {
        sleepEnvironmentHabitsResult.children[0].classList.remove('text-secondary');
    } else {
        sleepEnvironmentHabitsResult.children[0].classList.add('text-secondary');
    }
});

document.getElementById('tv-in-bed-habit-checkbox').addEventListener('change', ($event) => {
    if ($event.target.checked) {
        sleepEnvironmentHabitsResult.children[1].classList.remove('text-secondary');
    } else {
        sleepEnvironmentHabitsResult.children[1].classList.add('text-secondary');
    }
});

document.getElementById('read-in-bed-habit-checkbox').addEventListener('change', ($event) => {
    if ($event.target.checked) {
        sleepEnvironmentHabitsResult.children[2].classList.remove('text-secondary');
    } else {
        sleepEnvironmentHabitsResult.children[2].classList.add('text-secondary');
    }
});

document.getElementById('work-in-bed-habit-checkbox').addEventListener('change', ($event) => {
    if ($event.target.checked) {
        sleepEnvironmentHabitsResult.children[3].classList.remove('text-secondary');
    } else {
        sleepEnvironmentHabitsResult.children[3].classList.add('text-secondary');
    }
});

document.getElementById('drink-alcohol-habit-checkbox').addEventListener('change', ($event) => {
    if ($event.target.checked) {
        sleepEnvironmentHabitsResult.children[4].classList.remove('text-secondary');
    } else {
        sleepEnvironmentHabitsResult.children[4].classList.add('text-secondary');
    }
});

// Radion Button Event Listeners
const sleepPatternMethodRadioBtns = document.getElementsByName('sleep-pattern-method');

for (let radioButton of sleepPatternMethodRadioBtns) {
    radioButton.addEventListener('change', ($event) => {
        sleepPatternResult.innerHTML = "&nbsp;&nbsp;" + $event.target.value;
    });
};

// Dropdown Menu Listener
const musicPreferenceDropdown = document.getElementById('music-preference');
musicPreferenceDropdown.addEventListener('change', ($event) => {
    musicResult.innerHTML = "&nbsp;&nbsp;" + $event.target.value;
});


// ------------------------------------- HW3

document.getElementById('submit-button').addEventListener('click', async function (event) {
    event.preventDefault();

    let sidebar = document.getElementById('sidebar');


    let userData = {
        firstNameInput: firstNameInput,
        lastNameInput: lastNameInput,
        sleepPatternMethod: sleepPatternMethod,
        sleepPatternMethodRadioBtns: sleepPatternMethodRadioBtns
    };

    // Send a POST request to the Node.js server
    fetch('/saveData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.text())
        .then(message => {
            // Display the server's response on the page
            sidebar.innerHTML += '<p>' + message + '</p>';
        });
});


const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/saveData', (req, res) => {
    let data = req.body;

    fs.writeFile('data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while writing to the file.');
        } else {
            console.log('Data written to file');
            res.send('Data successfully written to file.');
        }
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));
