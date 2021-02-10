let axios = require("axios");

let minutes = 0.1;
let interval = minutes * 60 * 1000;

loop = (todo, interval) => {
  setInterval(() => {
    console.log("executing");
    todo();
  }, interval);
}

run = () => {
  axios.post("google.ca", {})
  .then((res) => {
    console.log(res.response);
  })
  .catch((err) => {
    console.log(`${err.code} : ${err.response}`);
  });
}

// loop(run, interval);

run();
