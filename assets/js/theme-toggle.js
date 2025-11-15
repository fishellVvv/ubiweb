document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const apply = (isDark) => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  };

  // estado inicial (desde localStorage o preferencia del SO)
  const stored = localStorage.getItem("theme");
  const initialDark = stored
    ? stored === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(initialDark);

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme !== "dark";
    apply(isDark);
  });

  // el otro
  console.log("%cÜbicuom", "color:#57a857; font-size:1rem;");
});
