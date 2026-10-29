document.getElementById("copyEmail").addEventListener("click", function () {
  const email = document.getElementById("emailText").innerText;

  navigator.clipboard.writeText(email).then(() => {
    const originalText = this.querySelector("span").innerText;
    this.querySelector("span").innerText = "¡Copiado!";
    this.style.backgroundColor = "#15803d";

    setTimeout(() => {
      this.querySelector("span").innerText = originalText;
      this.style.backgroundColor = "";
    }, 2000);
  });
});