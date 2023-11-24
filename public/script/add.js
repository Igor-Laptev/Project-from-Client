const addBook = document.querySelector(".add-book");

if (addBook) {
  addBook.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, author, description, img } = e.target;


    const picturesData = [...img.files];

    const dataFile = new FormData();
    picturesData.forEach((img) => {
      dataFile.append("homesImg", img);
    });

    dataFile.append("name", name.value);
    dataFile.append("author", author.value);
    dataFile.append("description", description.value);
    try {
      const response = await fetch("/api/books/add", {
        method: "POST",
        body: dataFile,
      });
      const data = await response.json();

      if (data.success) {
        const container = document.querySelector(".add-container");
        container.insertAdjacentHTML("afterbegin", data.html);
      }
    } catch (error) {
      console.log(error.message);
    }
  });
}
