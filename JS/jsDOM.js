import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./relojYAlarma.js";
import { scrollTop } from "./scroll_top_btn.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-bttn", ".panel", ".menu a");
    digitalClock("#reloj", "#empezar-reloj", "#detener-reloj");
    alarm("Assets/rengoku_hono_no_kokyu.mp3", "#empezar-alarma", "#detener-alarma")
    countdown("countdown", "Feb 27, 2024 05:00:00", "Feliz Cumpleañoooooos!!");
    scrollTop(".scroll-top-btn")
    darkTheme(".dark-theme-btn", "dark-mode", "stage-gray")
})

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})