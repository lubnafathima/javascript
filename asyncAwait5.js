const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved 1");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved 2");
  }, 10000);
});

async function handlePromise() {
  console.log("Hey");

  const val1 = await promise1;
  console.log("Hello 1");
  console.log(val1);

  const val2 = await promise2;
  console.log("Hello 2");
  console.log(val2);
}

handlePromise();