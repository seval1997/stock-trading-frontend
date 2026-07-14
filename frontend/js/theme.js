function toggleTheme() {
    const link = document.getElementById("theme-link");
    const currentTheme = link.getAttribute("href");

    if (currentTheme.includes("theme-light.css")) {
        link.setAttribute("href", "../css/theme-dark.css");
    } else {
        link.setAttribute("href", "../css/theme-light.css");
    }
}