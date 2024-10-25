async function get(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
get("https://jsonplaceholder.typicode.com/users").then((data) => {
  console.log(data);
});
let user = [];
let index = 0;
function updateUserName() {
  const firstName = user[index].name;
  document.getElementById("user").textContent = firstName;
}

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => {
    if (!response.ok) {
      console.error("Error:", error);
    }
    return response.json();
  })
  .then((data) => {
    user = data;
    updateUserName();
    let next = document.getElementById("btn-2");
    next.addEventListener("click", () => {
      index++;
      updateUserName();
      console.log(next);
    });
    // console.log(firstName);
  });

// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((response) => {
//     if (!response.ok) {
//       console.error("Error:", error);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const email = data[0].email;
//     console.log(email);
//   });
