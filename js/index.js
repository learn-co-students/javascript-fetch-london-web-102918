const app = "I don't do much.";


fetch('https://api.github.com/user/repos')
  .then(res => res.json())
  .then(json => console.log(json));

  const token = 'bb4b4e8864c832dc6a095b6ff16bde3b7ab5eace';
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));  