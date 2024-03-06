// 1-main.js
import getFullResponseFromAPI from './1-promise';

// Test with success=true
getFullResponseFromAPI(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

// Test with success=false
getFullResponseFromAPI(false)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
