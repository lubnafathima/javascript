// 1. Promise.all() 
// a. When all cases are success - after 3s returns all promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P2 Success"), 1000);
  // b. Wehn promise fails - as soon as faced error in 1s, immediately returns the error
  setTimeout(() => reject("P2 Reject"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 2000);
});

// Promise.all([p1, p2, p3])
// 2. Promise.allSettled()
Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
