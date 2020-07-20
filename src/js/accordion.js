const items = document.querySelectorAll(".accordion__item");

items.forEach(item => {
    const title = item.querySelector(".accordion__title");
    title.addEventListener("click", () => {
      const content = item.querySelector(".accordion__content");
      content.classList.toggle("hidden");
    });
});
  

