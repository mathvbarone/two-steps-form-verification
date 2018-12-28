import style from "./main.css";
import swal from "sweetalert2";

(() => {
    const buttonEmail = document.querySelector(".button-email");
    const buttonBack = document.querySelector(".button-back");
    const buttonComplete = document.querySelector(".button-complete");
    const emailInput = document.querySelector(".input-email");
    const passwordInput = document.querySelector(".input-password");
    const formWrapper = document.querySelector(".form-wrapper");
    const emailMessage = document.querySelector(".email-message");
    const passwordMessage = document.querySelector(".password-message");

    const regexEmail = /^[A-z0-9.-]{1,}@\w+\.[A-z]{2,3}(\.[a-z]{2})?$/;
    const regexPassword = /^\s*$/;

    const inputValid = (message, input) => {
        message.classList.add("is-hidden");
        input.classList.remove("shake-horizontal");
        input.classList.remove("is-danger");
    };

    const inputInvalid = (message, input) => {
        input.classList.add("shake-horizontal");
        input.classList.add("is-danger");
        message.classList.remove("is-hidden");
    };

    const emailValidate = e => {
        e.preventDefault();
        if (!regexEmail.test(emailInput.value)) {
            inputInvalid(emailMessage, emailInput);
        } else {
            inputValid(emailMessage, emailInput);
            formWrapper.classList.remove("show-email");
            formWrapper.classList.add("show-password");
        }
    };

    const emailKeyValidade = () => {
        inputValid(emailMessage, emailInput);
    };

    const backToEmail = () => {
        formWrapper.classList.remove("show-password");
        formWrapper.classList.add("show-email");
    };

    const passwordValidate = () => {
        if (!regexPassword.test(passwordInput.value)) {
            inputValid(passwordMessage, passwordInput);
            swal({
                type: "success",
                title: "Form submited"
            });
        } else {
            inputInvalid(passwordMessage, passwordInput);
        }
        e.preventDefault();
        formWrapper.classList.remove("show-password");
        formWrapper.classList.add("show-email");
    };

    const init = () => {
        buttonBack.addEventListener("click", backToEmail);
        buttonEmail.addEventListener("click", emailValidate);
        buttonComplete.addEventListener("click", passwordValidate);
        emailInput.addEventListener("keydown", emailKeyValidade);
    };

    init();
})();
