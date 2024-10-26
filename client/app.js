//DOM nodes
const form = document.querySelector("form");
const nameInput = document.querySelector("input");
const msgInput = document.querySelector("textarea");
const container = document.getElementById("msgContainer");
const formValid = document.getElementById("formValid");

//gests messages and inserts on page
const getMessages = async () => {
  const res = await fetch(
    "https://wedding-guestbook-server.onrender.com/message"
  );
  const messages = await res.json();
  console.log(messages);
  messages.forEach((msg) => {
    console.log(messages);
    const guest = msg.guest;
    const message = msg.message;
    const messageId = message.id;
    //create p element
    const p = document.createElement("p");
    p.textContent = `${guest} wrote you a message. ${message}`;

    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = async () => {
      // Send DELETE request to server with messageId
      const deleteRes = await fetch(
        `https://wedding-guestbook-server.onrender.com/message/${messageId}`,
        { method: "DELETE" }
      );

      if (deleteRes.ok) {
        // Remove the p element if deletion is successful
        p.remove();
      } else {
        console.error("Failed to delete message");
        alert("Could not delete the message. Please try again.");
      }
    };

    container.appendChild(p);
    container.appendChild(deleteBtn);
  });
};

const handleFormSubmit = async (e) => {
  e.preventDefault();

  //form validation
  if (!nameInput.value || !msgInput.value) {
    formValid.textContent = "Not Valid!";
  } else {
    try {
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

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      // Clear form inputs
      nameInput.value = "";
      msgInput.value = "";
      formValid.textContent = "";
      // Clear and reload messages
      container.innerHTML = "";
      await getMessages();
    } catch (error) {
      console.error("Error submitting form:", error);
      msgInput.textContent = "Something went wrong. Please refresh page.";
    }
  }
};

form.addEventListener("submit", handleFormSubmit);
getMessages();
