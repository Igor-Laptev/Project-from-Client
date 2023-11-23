const loginForm = document.querySelector(".js-form-login");

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const { email, password } = event.target;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const body = await response.json();

      if (body.success) {
        window.location.href = "/";
      } else {
        alert(body.error);
      }
    } catch (error) {
      const body = await response.json();

      if (body.success) {
        window.location.href = "/";
      } else {
        alert(body.error);
      }
    }
  });
}
