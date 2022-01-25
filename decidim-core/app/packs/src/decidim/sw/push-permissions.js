window.addEventListener("DOMContentLoaded", async () => {
  if ("serviceWorker" in navigator) {
    const toggle = document.getElementById("user_allow_push_notifications")

    if (toggle) {
      const reminder = document.querySelector(".push-notifications__reminder")
      const hideClass = "hide"

      toggle.addEventListener("change", async ({ target }) => {
        if (target.checked) {
          const permission = await window.Notification.requestPermission();

          if (permission === "granted") {
            reminder.classList.add(hideClass)
          } else {
            throw new Error("Permission not granted for Notification");
          }
        }
      })

      if (toggle.checked) {
        if (window.Notification.permission === "granted") {
          reminder.classList.add(hideClass)
        } else {
          toggle.checked = false
        }
      }
    }
  }
});
