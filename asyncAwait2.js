const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 5000);
});

async function handlePromise() {
  console.log("Hey");
  const val = await promise;
  console.log("Hello");
  console.log(val);
}

handlePromise();
