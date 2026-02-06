const buttons = document.querySelectorAll(".dodge");
const card = document.getElementById("card");

buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    const cardRect = card.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width;
    const maxY = cardRect.height - btnRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  });

  btn.addEventListener("click", () => {
    card.innerHTML = `
      <h1>Correct answer 😌</h1>
      <p>I’ll remember this.</p>
    `;
  });
});
