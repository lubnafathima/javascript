async function handlePromise() {
  try {
    const API_URL = "https://api.github.com/users/lubnafathima";

    const data = await fetch(API_URL);

    const jsonData = data.json();

    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
