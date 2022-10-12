export async function fetchProfiles(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, options);
    const json = await response.json();

    displayProfiles(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

function displayProfiles(profiles) {
  const profilesContainer = document.getElementById("profiles");

  profiles.forEach((profile) => {
    const { name, avatar } = profile;

    const profileCard = document.createElement("div");
    const profileInfo = document.createElement("div");
    const profileName = document.createElement("h3");
    const profileAvatar = document.createElement("img");
    const followBtn = document.createElement("button");

    profileName.textContent = name;
    if (avatar !== "") {
      profileAvatar.src = avatar;
    } else {
      profileAvatar.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }
    followBtn.textContent = "Follow";

    profileCard.classList.add("d-flex", "flex-column", "flex-md-row", "gap-1", "align-items-center");
    profileInfo.classList.add("d-flex", "flex-column", "align-items-center", "align-items-md-start", "text-wrap");
    profileName.classList.add("text-wrap");
    profileAvatar.classList.add("img-fluid", "thumbnail", "rounded-circle");
    followBtn.classList.add("btn", "gradient", "btn-primary");

    profileInfo.append(profileName, followBtn);
    profileCard.append(profileAvatar, profileInfo);
    profilesContainer.append(profileCard);
  });
}
