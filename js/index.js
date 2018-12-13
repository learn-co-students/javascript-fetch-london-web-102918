const app = "I don't do much.";

let token = '963151f96710310f17169d7ae7c70284a6652dcf';

fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
