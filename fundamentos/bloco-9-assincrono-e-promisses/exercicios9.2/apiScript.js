// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

function appendJoke(obj) {
    const jokeContainer = document.getElementById('jokeContainer');
    const p = document.createElement('p');
    p.innerText = obj.joke;
    jokeContainer.appendChild(p);
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendJoke(data))
    .catch(error => console.error('API não encontrada!'))
};

window.onload = () => {
   fetchJoke();
};
