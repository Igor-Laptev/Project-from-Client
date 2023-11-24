const bookContainer = document.querySelector(".js-book-container");

if (bookContainer) {
  bookContainer.addEventListener("click", async (event) => {
    if (event.target.classList.contains("btn-fav")) {
      const addToFavBtn = event.target;

      const parentContainer = addToFavBtn.closest(".js-card");
      const bookId = parentContainer.dataset.id;

      try {
        const response = await fetch(`/api/favorite/${bookId}`, {
          method: "POST",
        });

        const data = await response.json();

        if (data.success) {
          addToFavBtn.textContent = "Удалить из избранного";
          addToFavBtn.style.backgroundColor = "red";
        } else {
          if (parentContainer.dataset.favorite) {
            parentContainer.remove();
          } else {
            addToFavBtn.textContent = "Добавить в избранное";
            addToFavBtn.style.backgroundColor = "#198754";
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  });
}
