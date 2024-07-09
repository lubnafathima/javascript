// what would be printed first? Hello or Promise resolved
// WITHOUT Async Await

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 5000);
});

function getData() {
  promise.then((res) => console.log(res));
  console.log("Hello");
}

getData();

// WITH Async Await

// async function handlePromise() {
//     const val = await promise;
//     console.log("Hello");
//     console.log(val)
// }

// handlePromise();