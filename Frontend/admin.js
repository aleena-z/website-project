let currentPage = 1;
let usersPerPage = 5;
let allUsers = [];

async function loadUsers() {

  const res = await fetch(
    "http://localhost:5000/api/admin/users"
  );

  allUsers = await res.json();

  displayUsers();
}


function displayUsers() {

  const table =
    document.getElementById("userTable");

  table.innerHTML = "";

  const start =
    (currentPage - 1) * usersPerPage;

  const end =
    start + usersPerPage;

  const users =
    allUsers.slice(start, end);

  users.forEach(user => {

    table.innerHTML += `

<tr>

<td>${user.username}</td>

<td>${user.email}</td>

<td>

<button onclick="deleteUser('${user._id}')">
Delete
</button>

<button onclick="updateUser('${user._id}')">
Update
</button>

</td>

</tr>

`;

  });

}


async function deleteUser(id) {

  await fetch(
    `http://localhost:5000/api/admin/users/${id}`,
    {
      method: "DELETE"
    }
  );

  loadUsers();
}


async function updateUser(id) {

  const username =
    prompt("Enter new username");

  if (!username) return;

  await fetch(
    `http://localhost:5000/api/admin/users/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        username
      })

    }
  );

  loadUsers();
}


async function searchUser() {

  const keyword =
    document.getElementById("search").value;

  const res = await fetch(
    `http://localhost:5000/api/admin/search?keyword=${keyword}`
  );

  allUsers = await res.json();

  currentPage = 1;

  displayUsers();

}


function nextPage() {

  if (
    currentPage * usersPerPage <
    allUsers.length
  ) {

    currentPage++;

    displayUsers();

  }

}


function previousPage() {

  if (currentPage > 1) {

    currentPage--;

    displayUsers();

  }

}

loadUsers();