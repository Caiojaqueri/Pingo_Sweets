// Alternar menu
const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  nav.classList.toggle("active")
})

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    nav.classList.remove("active")
  })
})

// Rolagem suave (smooth scroll)
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

// Efeito no cabeçalho ao rolar a página
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

// Alternar estado do botão de favorito
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

// Animação de adicionando ao carrinho
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

// Efeito tilt nas imagens (efeito 3D ao passar o mouse)
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

// Efeito parallax ao rolar a página
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".hero-images")

  parallaxElements.forEach((element) => {
    const speed = 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Intersection Observer para animações ao entrar na área visível
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

// Observar todos os cards de produto e itens de feature para animá-los
document.querySelectorAll(".product-card, .feature-item, .info-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "all 0.6s ease"
  observer.observe(el)
})

// Envio do formulário
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

// Efeito de carregamento das imagens (lazy load visual)
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.style.animation = "fadeIn 0.5s ease"
  })
})


// Efeito visual ao passar o mouse sobre o card do produto
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  })
})

// Animação de contador para estatísticas (caso queira adicionar depois)
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


console.log("Pingo Swwets - Site carregado com sucesso!")
