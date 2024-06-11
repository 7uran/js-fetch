



fetch('http://localhost:3000/cards')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector(".main-div");
        data.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');

            cardDiv.innerHTML = `
            <div class="card">
            <div class="card-top">
                <img src="${card.image}">
            </div>
            <div class="card-bottom">
                <h1>${card.name}</h1>
                <h3>${card.title}</h3>
                <h4>${card.status}</h4>
                <button><i class="fa-solid fa-trash"></i></button>
            </div>
            </div>
                    `;
            container.appendChild(cardDiv);
        });
    })




