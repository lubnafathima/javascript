async function handlePromise() {
  try {
    const DICTIONARY_API = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";

    const data = await fetch(DICTIONARY_API);

    const jsonData = data.json();

    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
