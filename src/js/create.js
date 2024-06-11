const form = document.querySelector(".form");
let loader = document.querySelector(".loader");
const button = document.querySelector("button");
let name = document.querySelector(".name");
let title = document.querySelector(".title");
let url = document.querySelector(".image");
let status = document.querySelector(".status");

button.addEventListener("click", function (e) {
  e.preventDefault();
  // const formData = new FormData(event.target);
  const data = {
    name: name.value,
    title: title.value,
    url: url.value,
    status: status.value,
  };
  // formData.forEach((value, key) => (data[key] = value));
  loader.classList.add("show");
  form.classList.add("hide");
  fetch("http://localhost:8000/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Successfully posted!");
      console.log("Success:", data);
      loader.classList.remove("show");
      form.classList.remove("hide");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
