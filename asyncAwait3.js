const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 5000);
  });
  
  async function handlePromise() {
    console.log("Hey");

    const val1 = await promise;
    console.log("Hello 1");
    console.log(val1);
    
    const val2 = await promise;
    console.log("Hello 2");
    console.log(val2);
  }
  
  handlePromise();
  