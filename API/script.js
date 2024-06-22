document.getElementById('getUser').addEventListener('click', fetchUser);

function fetchUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[1];
      document.getElementById('user').innerHTML = `
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <img src="${user.picture.medium}" alt="User Picture">
      `;
    })
    .catch(error => console.error('Error fetching user:', error));
}
