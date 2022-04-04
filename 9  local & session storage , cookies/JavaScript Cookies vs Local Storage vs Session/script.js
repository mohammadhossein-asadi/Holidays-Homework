// # Local Storage
localStorage.setItem("name", "Mohammad");

// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");

// # Session Storage

sessionStorage.setItem("name", "John");
// * update value  // Before John => After Bob
sessionStorage.setItem("name", "Bob");

// console.log(sessionStorage.getItem("name"));
// sessionStorage.removeItem("name");

// # Cookie
// * Set expire time => expires

document.cookie = "name=Sam; expires=" + new Date(9999, 0, 1).toUTCString();

document.cookie =
  "lastName=Smith; expires=" + new Date(9999, 0, 1).toUTCString();

console.log(document.cookie);

