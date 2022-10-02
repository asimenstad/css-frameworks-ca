import { BASE_URL } from "../main.mjs";

const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginFeedbackContainer = document.getElementById("login-feedback");

async function logIn(url, data) {
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
    const accessToken = json.accessToken;
    const username = json.name;
    const avatar = json.avatar;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("username", username);
    localStorage.setItem("avatar", avatar);

    if (json.message === "Invalid email or password") {
      displayError();
    } else {
      window.location.href = "profile.html";
    }
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
    displayError();
  }
}

function displayError() {
  const loginErrorMessage = document.createElement("p");
  loginErrorMessage.textContent = "Invalid email or password. Please try again.";
  loginErrorMessage.classList.add("text-center", "text-danger");
  loginFeedbackContainer.appendChild(loginErrorMessage);
}

export function submitLogin() {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginUser = {
      email: loginEmail.value,
      password: loginPassword.value,
    };
    logIn(`${BASE_URL}/api/v1/social/auth/login`, loginUser);
  });
}
