async function handlePromise() {
  try {
    const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";

    const data = await fetch(API_URL);

    const jsonData = data.json();

    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
