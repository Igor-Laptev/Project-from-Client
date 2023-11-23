const regaForm = document.querySelector(".js-form-rega");

if (regaForm) {
  regaForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const { name, email, phone, password } = event.target;
    console.log(name.value, email.value, phone.value, password.value);
    try {
      const response = await fetch("/api/auth/registration", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone: +phone.value,
          password: password.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const body = await response.json();
      if (body.success) {
         window.location.href = "/auth/login";
      } else {
        alert(body.error);
      }
    } catch (error) {
      console.error(error.message);
    }
  });
}
