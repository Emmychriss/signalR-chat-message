// create a connection for signal r

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

connection.on("ReceiveMessage", (user, message) => {

    const markup = `<p id="show-message"><b>${user}</b>: ${message}</p>`;
    const showMessage = document.getElementById('show-message');
    showMessage.insertAdjacentHTML('beforeend', markup);

    // const rec_msg = user + ": " + message;
    // const p = document.createElement("p");
    // p.textContent = rec_msg;
    // document.getElementById("show-message").appendChild(p);

});

connection.start().catch(err => console.error(err.toString()));

document.getElementById("sendMesage").addEventListener("click", event => {

    const user = document.getElementById("fname").value;
    const message = document.getElementById("message").value;

    connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
    event.preventDefault();

});