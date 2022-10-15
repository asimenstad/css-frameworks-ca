export async function deletePost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const postData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(url, postData);
    const json = await response.json();

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
