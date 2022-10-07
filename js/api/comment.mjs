export async function commentOnPost(url, data) {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    const json = await response.json();
    window.location.reload();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
