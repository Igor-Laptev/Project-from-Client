const removeCard = document.querySelector(".js-book-container");
if (removeCard) {
  console.log(removeCard,'0000000')
  removeCard.addEventListener("click", async (e) => {
    if (e.target.classList.contains("js-btn-remove")) {
      const deleteBtn = e.target;
      console.log(deleteBtn);
      const parentContainer = deleteBtn.closest(".js-card");
      const { id } = parentContainer.dataset;

      // 1. отправить запрос на сервер, чтобы удалилось из бд
      try {
        const response = await fetch(`api/books/${id}`, {
          method: "DELETE",
        });
        console.log(response);
        // если успешный статус 200-299
        if (response.ok) {
          // 2. удалить карточку из дом-дерева
          parentContainer.remove();
        } else {
          // если плохой статус, тогда парсим сообщение от сервера
          const data = await response.json();
          // и выводим ошибку
          alert(data.error);
        }
      } catch (error) {}
    }
  });
}
