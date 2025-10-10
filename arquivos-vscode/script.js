// Menu Toggle
const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  nav.classList.toggle("active")
})

// Close menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    nav.classList.remove("active")
  })
})

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header Scroll Effect
const header = document.querySelector(".header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Favorite Button Toggle
document.querySelectorAll(".favorite-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation()
    this.classList.toggle("active")

    // Animation effect
    this.style.transform = "scale(1.3)"
    setTimeout(() => {
      this.style.transform = ""
    }, 200)
  })
})

// Add to Cart Animation
document.querySelectorAll(".btn-add").forEach((btn) => {
  btn.addEventListener("click", function () {
    const originalText = this.textContent
    this.textContent = "✓ Adicionado!"
    this.style.background = "#00b894"

    setTimeout(() => {
      this.textContent = originalText
      this.style.background = ""
    }, 2000)
  })
})

// Image Tilt Effect (3D hover effect)
document.querySelectorAll("[data-tilt]").forEach((element) => {
  element.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
  })

  element.addEventListener("mouseleave", function () {
    this.style.transform = ""
  })
})

// Parallax Effect on Scroll
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".hero-images")

  parallaxElements.forEach((element) => {
    const speed = 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all product cards and feature items
document.querySelectorAll(".product-card, .feature-item, .info-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "all 0.6s ease"
  observer.observe(el)
})

// Form Submission
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  const submitBtn = this.querySelector(".btn-submit")
  const originalText = submitBtn.textContent

  // Simulate form submission
  submitBtn.textContent = "Enviando..."
  submitBtn.disabled = true

  setTimeout(() => {
    submitBtn.textContent = "✓ Mensagem Enviada!"
    submitBtn.style.background = "#00b894"

    // Reset form
    contactForm.reset()

    setTimeout(() => {
      submitBtn.textContent = originalText
      submitBtn.style.background = ""
      submitBtn.disabled = false
    }, 3000)
  }, 1500)
})

// Image Lazy Loading Effect
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.style.animation = "fadeIn 0.5s ease"
  })
})

// Cursor Trail Effect (optional - decorative)
let mouseX = 0
let mouseY = 0
const cursorCircles = []

// Create cursor circles
for (let i = 0; i < 3; i++) {
  const circle = document.createElement("div")
  circle.style.cssText = `
        position: fixed;
        width: ${20 - i * 5}px;
        height: ${20 - i * 5}px;
        border-radius: 50%;
        background: var(--primary);
        opacity: ${0.3 - i * 0.1};
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `
  document.body.appendChild(circle)
  cursorCircles.push(circle)
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

function animateCursor() {
  cursorCircles.forEach((circle, index) => {
    setTimeout(() => {
      circle.style.left = mouseX + "px"
      circle.style.top = mouseY + "px"
      circle.style.transform = "translate(-50%, -50%)"
    }, index * 50)
  })
  requestAnimationFrame(animateCursor)
}

// Start cursor animation on desktop only
if (window.innerWidth > 768) {
  cursorCircles.forEach((circle) => (circle.style.display = "block"))
  animateCursor()
}

// Product Card Hover Sound Effect (visual feedback)
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  })
})

// Counter Animation for Stats (if you want to add stats later)
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start)
    }
  }, 16)
}

// Add floating animation to hero images
const heroImages = document.querySelectorAll(".hero-images .image-card")
heroImages.forEach((img, index) => {
  img.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`
})

// Add CSS for float animation dynamically
const style = document.createElement("style")
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
`
document.head.appendChild(style)

console.log("🍬 Doce Encanto - Site carregado com sucesso!")
