function UserTable({ form, content, userInfo, addButton }) {
  this.init = function () {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.addUser(
        form.elements["name"].value,
        form.elements["phone"].value,
        form.elements["age"].value
      );
    });

    addButton.addEventListener("click", function () {
      form.reset();
      form.classList.add("open");
    });

    content.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn-delete")) {
        const row = event.target.closest("tr");
        const userId = row.getAttribute("data-user-id");
        this.deleteUser(userId);
        row.remove();
      } else if (
        event.target.classList.contains("btn") &&
        event.target.classList.contains("btn-edit")
      ) {
        const row = event.target.closest("tr");
        const userId = row.getAttribute("data-user-id");
        this.editUser(userId);
      }
    });

    this.loadUsers();
  };

  this.addUser = function (name, phone, age) {
    const user = {
      id: Math.floor(Math.random() * 100),
      name,
      phone,
      age,
    };
    this.userTemplate(user);
    form.reset();
    form.classList.remove("open");
    const currentUsers = JSON.parse(localStorage.getItem("users")) || [];
    currentUsers.push(user);
    localStorage.setItem("users", JSON.stringify(currentUsers));
  };

  this.loadUsers = function () {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      users.forEach((user) => this.userTemplate(user));
    }
  };
  this.deleteUser = function (userId) {
    let currentUsers = JSON.parse(localStorage.getItem("users")) || [];
    currentUsers = currentUsers.filter((user) => user.id !== parseInt(userId));
    localStorage.setItem("users", JSON.stringify(currentUsers));
    content.innerHTML = "";
    currentUsers.forEach((user) => this.userTemplate(user));
  };

  this.editUser = function (userId) {
    let currentUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = currentUsers.findIndex(
      (user) => user.id === parseInt(userId)
    );
    if (userIndex !== -1) {
      const user = currentUsers[userIndex];
      form.elements["name"].value = user.name;
      form.elements["phone"].value = user.phone;
      form.elements["age"].value = user.age;
      form.classList.add("open");
      user.id = userId;
      this.deleteUser(userId);
      this.userTemplate(user);
    }
  };
  this.editUser = function (userId) {
    let currentUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = currentUsers.findIndex(
      (user) => user.id === parseInt(userId)
    );
    if (userIndex !== -1) {
      const user = currentUsers[userIndex];
      form.elements["name"].value = user.name;
      form.elements["phone"].value = user.phone;
      form.elements["age"].value = user.age;
      form.classList.add("open");
      user.id = userId;
      this.deleteUser(userId);
      this.userTemplate(user);
    }
  };

  this.userTemplate = function (user) {
    content.insertAdjacentHTML(
      "beforeend",
      `<tr data-user-id="${user.id}">` +
        `<td>${user.id}</td>` +
        `<td>${user.name}</td>` +
        `<td>${user.phone}</td>` +
        `<td>${user.age}</td>` +
        `<td><button class="btn btn-view">View</button><button class="btn btn-edit">Edit</button><button class="btn btn-delete">Delete</button></td>` +
        `</tr>`
    );
  };
}

new UserTable({
  form: document.querySelector(".js--form"),
  userInfo: document.querySelector(".js--user"),
  addButton: document.querySelector(".js--add"),
  content: document.querySelector(".js--content"),
}).init();
