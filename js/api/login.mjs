import { BASE_URL } from "../main.mjs";

const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const errorMessage = document.getElementById("login-feedback");

/**
 * Logs in user
 * @param {string} url - The URL for the POST request
 * @param {object} data - The login information from the login form
 * @returns {object} - User account information and access token
 */

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
  errorMessage.innerHTML = `<p class="text-danger text-center">Invalid email or password. Please try again.</p>`;
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
