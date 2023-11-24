const updateForm = document.querySelector(".js-update-form");

if (updateForm) {
  updateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const { name, author, description, img } = event.target;

    const { id } = updateForm.dataset;
    console.log(id);
    const response = await fetch(`/api/books/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        img: img.value,
        author: author.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.assign("/");
    } else {
      const data = await response.json();
      alert(data.error);
    }
  });
}
