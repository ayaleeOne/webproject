const authors = document.querySelector(".authors");

fetch("/authors/get", {
    method: "GET"
})
    .then((response) => response.json())
    .then(data => {
        for (const author of data) {
            const divAuthor = document.createElement("div");
            divAuthor.classList.add("author");

            const name = document.createElement("div");
            name.classList.add("name");
            name.classList.add("author-item");
            name.innerHTML = author.name;

            const btn = document.createElement("div");
            btn.classList.add("add-button");
            btn.classList.add("author-item");
            btn.innerHTML = "Add to favorites";

            btn.onclick = () => {
                fetch("/authors/add", {
                    method: "POST",
                    body: JSON.stringify({ index: author.index }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }).then(response => {
                    if (response.status === 200) alert("Author added");
                    else alert("Already in favorites")
                });
            }

            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("image-wrapper");
            imageWrapper.classList.add("author-item");

            const img = document.createElement("img");
            img.src = `images/${author.image}`;

            imageWrapper.appendChild(img);

            divAuthor.appendChild(name);
            divAuthor.appendChild(btn);
            divAuthor.appendChild(imageWrapper);

            authors.appendChild(divAuthor);
        }
    }
    );

// <div class="author">
// <div class="name author-item">Pushkin</div>
// <div class="add-button author-item">Add to favorites</div>
// <div class="image-wrapper author-item">
//     <img src="./images/pushkin.jpg" alt="pushkin-image" class="image-wrapper__image">
// </div>
// </div>