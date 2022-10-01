export async function fetchPosts(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
