const addBook = document.querySelector('.add-book');

if (addBook) {
  addBook.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, author, description, img } = e.target;

    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          author: author.value,
          description: description.value,
          img: img.value,
        }),
      });
      const data = await response.json();

      if (data.success) {
      }
    } catch (error) {
      console.log(error.message);
    }
  });
}
