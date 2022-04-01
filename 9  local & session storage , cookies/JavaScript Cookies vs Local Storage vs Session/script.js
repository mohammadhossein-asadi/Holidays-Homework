// # Local Storage
localStorage.setItem("name", "Mohammad");

// console.log(localStorage.getItem("name"));

localStorage.removeItem("name");

// # Session Storage

sessionStorage.setItem("name", "John");
// * update value  // Before John => After Bob
sessionStorage.setItem("name", "Bob");

console.log(sessionStorage.getItem("name"));
// sessionStorage.removeItem("name");

// # Cookie
// * Set expire time => expires
document.cookie = "name=Kyle; expires=";
+new Date(2020, 0, 1).toUTCString();

