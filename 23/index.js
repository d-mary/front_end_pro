document.addEventListener("DOMContentLoaded", function () {
  const _searchBtn = document.querySelector(".js--search-btn");
  _searchBtn.addEventListener("click", searchPost);
});

function validateId(id) {
  return id >= 1 && id <= 100;
}

function getPostById(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      alert("Error");
    }
    return response.json();
  });
}

function getCommentsById(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      alert("Error");
    }
    return response.json();
  });
}

function showPost(post) {
  const _postContainer = document.querySelector(".js--post-container");
  _postContainer.innerHTML = `
    <div class="post">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button class="commentsBtn">Отримати коментарі</button>
    </div>
  `;

  const _commentsBtn = document.querySelector(".commentsBtn");
  _commentsBtn.addEventListener("click", function (event) {
    event.preventDefault();
    getCommentsById(post.id)
      .then((comments) => showComments(comments))
      .catch((error) => alert("Помилка отримання коментарів:", error));
  });
}

function showComments(comments) {
  const _commentsContainer = document.querySelector(".js--comments-container");
  _commentsContainer.innerHTML = "";
  comments.forEach((comment) => {
    const _commentElem = document.createElement("div");
    _commentElem.classList.add("comment");
    _commentElem.innerHTML = `
      <h3>${comment.name}</h3>
      <p>${comment.body}</p>
    `;
    _commentsContainer.appendChild(_commentElem);
  });
}

function searchPost(event) {
  event.preventDefault();
  const _idInput = document.querySelector(".js--id-input");
  const postId = +_idInput.value;

  if (!validateId(postId)) {
    alert("Введіть ід від 1 до 100");
    return;
  }

  getPostById(postId)
    .then((post) => showPost(post))
    .catch((error) => alert("Помилка отримання коментарів:", error));
}
