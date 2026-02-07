fetch("http://localhost:3000/posts/1c0b", {
    method: "PUT",
    body: JSON.stringify({
        id: "1c0b",
        title:"The Great",
        author: "Jeremy",
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
