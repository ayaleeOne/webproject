const authors = document.querySelector(".authors");

function createAuthor(author) {
    const divAuthor = document.createElement("div");
    divAuthor.classList.add("author");

    const name = document.createElement("div");
    name.classList.add("name");
    name.classList.add("author-item");
    name.innerHTML = author.name;

    const btn = document.createElement("div");
    btn.classList.add("add-button");
    btn.classList.add("author-item");
    btn.innerHTML = "Delete";

    btn.onclick = () => {
        if (confirm("Delete?")) {
            fetch("authors/favorites/delete", {
                method: "DELETE",
                body: JSON.stringify({ index: author.index }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(() => document.location.reload());
        }
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


fetch("authors/favorites").then(response => response.json())
    .then(data => {
        for (const index of data)
            fetch(`/authors/get/${index}`).then(res => res.json())
                .then(author => createAuthor(author));
    });
