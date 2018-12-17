const app = "I don't do much.";

const token = 'e1d434c4d23bccd81094f8c8094e68c2f13a745d';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
