const d = document;

export default function darkTheme(btn, classDark, classGray) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"),
    $stageDarkMode = d.querySelector(".stage");

  console.log($selectors);

  let moon = "🌙",
    sun = "☀️";

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        $selectors.forEach((el) => el.classList.add(classDark));
        $stageDarkMode.classList.add(classGray);
        $themeBtn.textContent = sun;
      } else {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $stageDarkMode.classList.remove(classGray);
        $themeBtn.textContent = moon;
      }
    }
  });
}
