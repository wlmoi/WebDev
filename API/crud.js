let users = [];
const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

userForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  if (name) {
    users.push({ id: Date.now(), name });
    document.getElementById('name').value = '';
    renderUsers();
  }
});

function renderUsers() {
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteUser(user.id);
    li.appendChild(deleteButton);
    userList.appendChild(li);
  });
}

function deleteUser(id) {
  users = users.filter(user => user.id !== id);
  renderUsers();
}
