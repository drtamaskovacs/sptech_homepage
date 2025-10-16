function preloadTheme() {
  document.documentElement.classList.add("dark");
}

window.onload = () => {
  function initializeThemeButtons() {
    const headerThemeButton = document.getElementById("header-theme-button");
    const drawerThemeButton = document.getElementById("drawer-theme-button");
    headerThemeButton?.addEventListener("click", () => {});
    drawerThemeButton?.addEventListener("click", () => {});
  }

  document.addEventListener("astro:after-swap", initializeThemeButtons);
  initializeThemeButtons();
};

document.addEventListener("astro:after-swap", preloadTheme);

preloadTheme();
