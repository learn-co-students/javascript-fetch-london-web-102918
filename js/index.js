const app = "I don't do much.";
const token = '72effdefff25a18fe31829c27559a8ab8315df70'

fetch('https://api.github.com/user/repos',{
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
