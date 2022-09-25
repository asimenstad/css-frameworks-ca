export const signUpForm = document.getElementById("sign-up-form");
const feedback = document.getElementById("form-feedback");

export async function signUp(url, data) {
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
      displaySuccess();
    }
    signUpForm.reset();
    return json;
  } catch (error) {
    console.log(error);
    displayError();
  }
}

function displayError() {
  feedback.innerHTML = `<p class="text-center text-danger">Sorry! An error occurred. Please try again.</p>`;
}

function displaySuccess() {
  feedback.innerHTML = `<p class="text-center text-success">Success! Your account was created.</p>`;
}
