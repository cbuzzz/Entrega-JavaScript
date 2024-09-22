const API_URL = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();
const xhr_posts = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    console.log(data);
  }
}

function onRequestHandler1() {
  // Improved processing
  const data = JSON.parse(this.response);
  const userIdCombined = data
  .map(post => post.userId * 2) // Multiply userId by 2
  .filter(userId => userId >= 14) // Filter by userId >= 1
  .reduce((total,userId) =>total+userId,0); 

const postsuser = data.filter(function(post) {
  return post.userId === 1;
});

console.log(postsuser); // Posts for user 1
console.log(userIdCombined); // User IDs multiplied by 2, bigger than 14 and added.
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', API_URL + '/users/1');
xhr.send();

xhr_posts.addEventListener('load', onRequestHandler1);
xhr_posts.open('GET', API_URL + '/posts');
xhr_posts.send();











