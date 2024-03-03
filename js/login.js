//Login
const loginForm1 = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginForm2 = document.querySelector("#login-form2");
const loginGreet = document.querySelector("#login-form2 h1");
const todo = document.querySelector("#todo-form");
const todoL = document.querySelector("#todo-list");
const todoB = document.querySelector("#list-back");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm1.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
function paintGreetings(username) {
  loginGreet.innerText = `${username}의 Todo list`;
  loginForm2.classList.remove(HIDDEN_CLASSNAME);
  
  todo.classList.remove(HIDDEN_CLASSNAME);
  todoL.classList.remove(HIDDEN_CLASSNAME);
  todoB.classList.remove(HIDDEN_CLASSNAME);

}

if (savedUsername === null) {
  loginForm1.classList.remove(HIDDEN_CLASSNAME);
  loginForm1.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
