console.log("Start");

// function a() {
//     console.log("A");
// }
// a();

// ________________________________________________________________

// setTimeout(function cb() {
//   console.log("Callback");
// }, 1000);

// ________________________________________________________________

// document.getElementById("btn").addEventListener("click", function cb() {
//     console.log("callback");
// })

// ________________________________________________________________

// setTimeout(function cb() {
//   console.log("Callback");
// }, 1000);

// fetch("https://jsonplaceholder.typicode.com/todos/1").then(function cbF() {
//     console.log("Fetched");
// })

// ________________________________________________________________

const cart = ["milk", "bread", "butter"];

// createOrder(cart, function () {
//     payment();
// });

// ________________________________________________________________

// createOrder(cart, function () {
//     payment(function() {
//         summary(function() {
//             wallet();
//         })
//     })
// })

// ________________________________________________________________

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//   return payment(orderId);
// });

// ________________________________________________________________

// createOrder(cart)
//   .then(() => payment())
//   .then(() => summary())
//   .then(() => wallet());

// ________________________________________________________________

// const promise = createOrder(cart);

// promise
//   .then((orderId) => console.log(orderId))

// function createOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is empty");
//       reject(err);
//     }

//     const orderId = "12345";
//     if (orderId) {
//       resolve(orderId);
//     }
//   });

//   return pr;
// }

// function validateCart(cart) {
//   return true;
// }

// ________________________________________________________________

// const promise = createOrder(cart);

// promise
//   .then((orderId) => console.log(orderId))
//   .catch((err) => console.log(err));

// function createOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       reject("Cart is empty");
//     }

//     const orderId = "1234";
//     if (orderId) {
//       resolve(orderId);
//     } else {
//       reject("No order found");
//     }
//   });

//   return pr;
// }

// function validateCart(cart) {
//   return true;
// }

// ________________________________________________________________

// const promise = createOrder(cart);

// promise
//   .then((orderId) => orderId)
//   .then((orderId) => payment(orderId))
//   .catch((err) => console.log(err));

// function createOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       reject("Cart is empty");
//     }

//     const orderId = "1234";
//     if (orderId) {
//       resolve(orderId);
//     } else {
//       reject("No order found");
//     }
//   });

//   return pr;
// }

// function validateCart(cart) {
//   return true;
// }

// function payment(orderId) {
//     console.log("Successful Payment, ID:", orderId)
// }

// ________________________________________________________________

console.log("End");
