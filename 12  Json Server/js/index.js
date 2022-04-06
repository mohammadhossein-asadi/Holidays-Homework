// javascript for index.html
const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");

const renderPosts = async () => {
  const url = "http://localhost:3000/posts?_sort=likes&_order=desc";
  const res = await fetch(url);
  const posts = await res.json();
  console.log(posts);

  let template = "";
  posts.forEach((post) => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}...</p>
        <a href="./details.html?id=${post.id}">Read more</a>
      </div>
    `;
  });

  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
