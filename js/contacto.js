document.getElementById("copyEmail").addEventListener("click", function () {
  const email = document.getElementById("emailText").innerText;

  navigator.clipboard.writeText(email).then(() => {
    const originalText = this.querySelector("span").innerText;
    this.querySelector("span").innerText = "¡Copiado!";
    this.style.backgroundColor = "#28a745";

    setTimeout(() => {
      this.querySelector("span").innerText = originalText;
      this.style.backgroundColor = "#8b1fff";
    }, 2000);
  });
});
