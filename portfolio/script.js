document.addEventListener("DOMContentLoaded", () => {
    feather.replace()
  
    const menuToggle = document.getElementById("menuToggle")
    const mobileMenu = document.getElementById("mobileMenu")
  
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open")
    })
  
    document.addEventListener("click", (event) => {
      if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove("open")
      }
    })
  
    const currentPage = window.location.pathname.split("/").pop() || "index.html"
    const navLinks = document.querySelectorAll(".nav-link")
  
    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href")
      if (linkPage === currentPage) {
        link.classList.add("active")
      } else if (currentPage === "index.html" && linkPage === "/") {
        link.classList.add("active")
      }
    })
  
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })
  })
  
  
