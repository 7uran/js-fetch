document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun varsayılan gönderme işlemini engeller

    // Form verilerini toplayın
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    // POST isteği gönderin
    fetch('https://your-api-endpoint.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})