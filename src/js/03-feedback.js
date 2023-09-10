const formEl = document.querySelector('.feedback-form');
const FEEDBACK_KEY = "feedback-form-state";

formEl.addEventListener('input', onInputHandler);

function onInputHandler(event) {
    const emailValue = event.currentTarget.elements.email.value;
    const messageValue = event.currentTarget.elements.message.value;

    const result = {
       email: emailValue,
        message: messageValue,
    };

    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(result))

    updateOutput();

}

function updateOutput() {

}