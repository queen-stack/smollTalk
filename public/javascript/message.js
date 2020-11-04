async function messageButtonHandler(event) {
    event.preventDefault();

    const message_text = document.querySelector('input[name="message-text"]').value;

    const conversation_id = window.location.toString().split('/') [
        window.location.toString().split('/').length - 1
    ];

    if (message_text) {
        const response = await fetch('/api/messages', {
            method: 'post',
            body: JSON.stringify({
                message_text,
                conversation_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#messageBtn').addEventListener('click', messageButtonHandler);