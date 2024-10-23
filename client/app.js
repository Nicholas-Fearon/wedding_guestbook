const form = document.querySelector("form");
const container = document.getElementById("msgContainer");

const getMessages = async () => {
  const res = await fetch("http://localhost:8080/message");
  const messages = await res.json();

  messages.forEach((msg) => {
    console.log(messages);
    const guest = msg.guest;
    const message = msg.message;

    const p = document.createElement("p");

    p.textContent = `${guest} wrote you a message. ${message}`;

    container.appendChild(p);
  });
};

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  const res = await fetch("http://localhost:8080/message", {
    method: "POST",
    body: JSON.stringify(formObj),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  console.log(data);
  

  container.innerHTML = "";
  await getMessages();
};

form.addEventListener("submit", handleFormSubmit);
getMessages();
