//DOM nodes
const form = document.querySelector("form");
const nameInput = document.querySelector("input");
const msgInput = document.querySelector("textarea");
const container = document.getElementById("msgContainer");

//gests messages and inserts on page
const getMessages = async () => {
  const res = await fetch(
    "https://wedding-guestbook-server.onrender.com/message"
  );
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

  const res = await fetch(
    "https://wedding-guestbook-server.onrender.com/message",
    {
      method: "POST",
      body: JSON.stringify(formObj),
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();
  console.log(data);
  nameInput.value = "";
  msgInput.value = "";
  container.innerHTML = "";
  await getMessages();
};

form.addEventListener("submit", handleFormSubmit);
getMessages();
