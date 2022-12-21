const firstName = document.querySelector("#first-name");
const secondName = document.querySelector("#second-name");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#repeat-password");
const phoneNumber = document.querySelector("#number");

const submitButton = document.querySelector(".submit-button")
const test = document.querySelector('.test');

console.log("testing");

// submitButton.addEventListener("click", () => {

//     console.log(firstName.value);
//     console.log(secondName.value);
//     console.log(password.value);
//     console.log(passwordCheck.value);
//     console.log(phoneNumber.value);
// });


test.addEventListener('click', () => {
    console.log('1');

    console.log(firstName.value);
    console.log(secondName.value);
    console.log(password.value);
    console.log(passwordCheck.value);
    console.log(phoneNumber.value);
});