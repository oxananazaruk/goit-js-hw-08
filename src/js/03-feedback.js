import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FEEDBACK_KEY = "feedback-form-state";
let parsetData = {};

formEl.addEventListener('input', throttle(onInputHandler, 500));
formEl.addEventListener('submit', onFormSubmitHandler);
updateForm();

function onInputHandler(event) {
    const emailValue = event.currentTarget.email.value;
    const messageValue = event.currentTarget.message.value;

    parsetData = {
       email: emailValue,
       message: messageValue,
    };

    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(parsetData))
}

function onFormSubmitHandler(event) {
    event.preventDefault();
    const { email, message } = event.currentTarget.elements;

    if (email.value === '' || message.value === '') {
        return alert("All fields must be filed");
    }

    console.log({ email: email.value, message: message.value });

    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_KEY);
    parsetData = {};
}

function updateForm() {
    const inputData = localStorage.getItem(FEEDBACK_KEY);
    if (inputData) {
        parsetData = JSON.parse(inputData);
       
        let { email, message } = formEl.elements;
    email.value = parsetData.email || '';
    message.value = parsetData.message || '';
    }
}