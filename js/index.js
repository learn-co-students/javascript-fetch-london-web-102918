const app = "I don't do much.";

const token = '30ddf70dd0a84f936330b1a5d14aeec180e010e0';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
