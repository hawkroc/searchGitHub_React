
const url="https://api.github.com/search/repositories";
const query="?q=";
const sort="&sort=";
const Fetchjson = (q,s) => {
  let final=url+query+q+sort+s;
  //console.log(final);
 return fetch(final, {
	method: 'get'
}).then((response) => {
	  let json = response.json(); // there's always a body
	// console.log('status: ', response.status);
	// console.log(json);

	return json;
}).catch(function(err) {
	// Error :(
});

 // return promise;
 //return fetch(final);
};




export default Fetchjson;