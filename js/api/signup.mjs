import { BASE_URL } from "../main.mjs";

const signUpForm = document.getElementById("sign-up-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const avatar = document.getElementById("avatar");
const feedbackContainer = document.getElementById("form-feedback");

async function signUp(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
    console.log(json.statusCode);
    if ((json.statusCode === 400) | (json.statusCode === 500)) {
      displayError();
    } else {
      window.location.href = "login.html";
    }
    signUpForm.reset();
    return json;
  } catch (error) {
    console.log(error);
    displayError();
  }
}

function displayError() {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = "Sorry! An error occurred. Please try again.";
  errorMessage.classList.add("text-center", "text-danger");
  feedbackContainer.appendChild(errorMessage);
}

export function submitSignUp() {
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userSignUp = {
      name: username.value,
      email: email.value,
      password: password.value,
      avatar: avatar.value,
    };
    if (userSignUp.avatar === "") {
      delete userSignUp.avatar;
    }
    signUp(`${BASE_URL}/api/v1/social/auth/register`, userSignUp);
  });
}
