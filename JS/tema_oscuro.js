const d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark, classGray) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"),
    $stageDarkMode = d.querySelector(".stage");

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    $stageDarkMode.classList.remove(classGray);
    ls.setItem("theme", "light");
  };

  const darkMOde = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    $stageDarkMode.classList.add(classGray);
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMOde();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");

    if (ls.getItem("theme") === "light") lightMode();

    if (ls.getItem("theme") === "dark") darkMOde();
  });
}
