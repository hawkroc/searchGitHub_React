
const url="https://api.github.com/search/repositories";
const query="?q=";
const sort="&sort=";
const getJSON = (q,s) => {
  let final=url+query+q+sort+s;
  console.log(final);
  let promise = new Promise((resolve, reject) => {
    let client = new XMLHttpRequest();
    client.open("GET", final);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();


    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
        console.log(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
 //return fetch(final);
};




export default getJSON;