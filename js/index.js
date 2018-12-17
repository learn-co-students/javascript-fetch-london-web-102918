const app = "I don't do much.";
const token = "96270e419ed0f4cba599b457505653757a56fad8";
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
})
    .then(res => res.json())
    .then(json => console.log(json));
