// 0-promise.js
function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    // Simulate an asynchronous operation, such as an API call
    setTimeout(() => {
      resolve("API response data"); // Resolve the promise with the desired data
    }, 1000); // Simulating a delay of 1000 milliseconds (1 second)
  });

  return promise;
}

export default getResponseFromAPI;
