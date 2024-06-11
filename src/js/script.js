
fetch('http://localhost:8000/cards')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector(".main-div");
        data.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');

            cardDiv.innerHTML = `
            <div class="card">
            <div class="card-top">
                <img src="${card.url}">
            </div>
            <div class="card-bottom">
                <h1>${card.name}</h1>
                <h3>${card.title}</h3>
                <h4>${card.status}</h4>
                <div class="actions">
                <button><i class="fa-solid fa-trash"></i></button>
                <button><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
            </div>
                    `;
            container.appendChild(cardDiv);
            // console.log(cardDiv.childNodes[1].lastElementChild.lastElementChild)
            let deleteButton = cardDiv.childNodes[1].lastElementChild.lastElementChild.firstElementChild;
            deleteButton.addEventListener("click",()=>{
                // console.log(deleteButton)
                deleteData(card.id)
            })

        });

    })