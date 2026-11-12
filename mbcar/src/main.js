import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <a href="#inicio" class="logo">
      <img src="/logo-mb.png" alt="MB Estética Automotiva">
    </a>

    <nav class="nav">
      <a href="#inicio">INÍCIO</a>
      <a href="#servicos">SERVIÇOS</a>
      <a href="#antes-depois">RESULTADOS</a>
      <a href="#sobre">CONTATO</a>
    </nav>

    <a href="#contato" class="header-button">AGENDAR <span></span></a>
  </header>

  <main>
    <section class="hero" id="inicio">
      <video class="hero-video" autoplay muted loop playsinline preload="metadata">
        <source src="/carro.mp4" type="video/mp4">
      </video>

      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1>
          A PERFEIÇÃO<br>
          ESTÁ NOS <span>DETALHES.</span>
        </h1>

        <a href="#servicos" class="hero-services-button">
          VER NOSSOS SERVIÇOS
        </a>
      </div>
    </section>

    <section class="services-section" id="servicos">
      <div class="services-heading">
        <h2>NOSSOS <span>SERVIÇOS.</span></h2>
      </div>

      <div class="carousel-container">
        <div class="carousel-stage">

          <button class="service-card is-prev" data-index="4">
            <div class="service-card-visual">
              <img src="/servicos/servicos-05.jpeg" alt="Limpeza de chassi">
            </div>
            <div class="service-card-info">
              <span class="service-label">MB ESTÉTICA AUTOMOTIVA</span>
              <h3>LIMPEZA DE CHASSI</h3>
            </div>
          </button>

          <button class="service-card is-hidden" data-index="3">
            <div class="service-card-visual">
              <img src="/servicos/servicos-04.jpeg" alt="Limpeza de chassi">
            </div>
            <div class="service-card-info">
              <span class="service-label">MB ESTÉTICA AUTOMOTIVA</span>
              <h3>LIMPEZA DE CHASSI</h3>
            </div>
          </button>

          <button class="service-card is-active" data-index="0">
            <div class="service-card-visual">
              <img src="/servicos/servicos-01.jpeg" alt="Limpeza de chassi">
            </div>
            <div class="service-card-info">
              <span class="service-label">MB ESTÉTICA AUTOMOTIVA</span>
              <h3>LIMPEZA DE CHASSI</h3>
            </div>
          </button>

          <button class="service-card is-next" data-index="1">
            <div class="service-card-visual">
              <img src="/servicos/servicos-02.jpeg" alt="Limpeza de chassi">
            </div>
            <div class="service-card-info">
              <span class="service-label">MB ESTÉTICA AUTOMOTIVA</span>
              <h3>LIMPEZA DE CHASSI</h3>
            </div>
          </button>

          <button class="service-card is-hidden" data-index="2">
            <div class="service-card-visual">
              <img src="/servicos/servicos-03.jpeg" alt="Limpeza de chassi">
            </div>
            <div class="service-card-info">
              <span class="service-label">MB ESTÉTICA AUTOMOTIVA</span>
              <h3>LIMPEZA DE CHASSI</h3>
            </div>
          </button>

        </div>
      </div>
    </section>

    <section class="before-after-section" id="antes-depois">
      <div class="before-after-heading">
        <span class="eyebrow"><i></i> RESULTADOS REAIS</span>
        <h2>ANTES E <span>DEPOIS.</span></h2>
        <p>Veja a diferença em cada detalhe.</p>
      </div>

      <div class="before-after-item">
        <div class="before-after-image">
          <img src="/antes-depois.jpeg" alt="Antes e depois da limpeza de chassi">
        </div>
        <div class="before-after-caption">
          <span>ANTES</span>
          <span>DEPOIS</span>
        </div>
      </div>

      <div class="before-after-item">
        <div class="before-after-image">
          <img src="/antes-depois-2.jpeg" alt="Antes e depois da limpeza do veículo">
        </div>
        <div class="before-after-caption">
          <span>ANTES</span>
          <span>DEPOIS</span>
        </div>
      </div>
    </section>

    <section class="budget-section" id="contato">
      <div class="budget-heading">
        <span class="eyebrow"><i></i> ATENDIMENTO EXCLUSIVO MB</span>
        <h2>AGENDE SEU<br><span>ATENDIMENTO.</span></h2>
        <p>Escolha os serviços desejados e solicite seu atendimento.</p>
      </div>

      <form class="budget-form" id="budget-form">

        <div class="form-topline">
          <span>01 / SEUS DADOS</span>
          <span>MB ESTÉTICA AUTOMOTIVA</span>
        </div>

        <div class="form-group">
          <label for="customer-name">SEU NOME</label>
          <input
            type="text"
            id="customer-name"
            placeholder="Como podemos chamar você?"
            required
          >
        </div>

        <div class="form-group">
          <label for="vehicle">MODELO DO VEÍCULO</label>
          <input
            type="text"
            id="vehicle"
            placeholder="Ex.: Honda Civic 2022"
            required
          >
        </div>

        <div class="form-group">
          <label>02 / SERVIÇOS DESEJADOS</label>

          <div class="service-options">
            <label class="service-option">
              <input type="checkbox" name="services" value="Limpeza de chassi">
              <span>Limpeza de chassi</span>
            </label>

            <label class="service-option">
              <input type="checkbox" name="services" value="Lavagem detalhada">
              <span>Lavagem detalhada</span>
            </label>

            <label class="service-option">
              <input type="checkbox" name="services" value="Higienização interna">
              <span>Higienização interna</span>
            </label>

            <label class="service-option">
              <input type="checkbox" name="services" value="Polimento automotivo">
              <span>Polimento automotivo</span>
            </label>

            <label class="service-option">
              <input type="checkbox" name="services" value="Revitalização de pintura">
              <span>Revitalização de pintura</span>
            </label>
          </div>
        </div>

        <button type="submit" class="budget-submit">
          SOLICITAR ATENDIMENTO <span></span>
        </button>

        <p class="form-note">
          Ao continuar, você será direcionado ao WhatsApp da MB.
        </p>
      </form>
    </section>

    <section class="contact-section" id="sobre">
      <div class="contact-content">
        <span class="eyebrow"><i></i> MB ESTÉTICA AUTOMOTIVA</span>
        <h2>VAMOS CUIDAR<br>DO SEU <span>CARRO?</span></h2>
        <p>Entre em contato e acompanhe nosso trabalho.</p>

        <div class="contact-links">
          <a
            href="https://wa.me/5512981408825"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            <span class="contact-link-label">FALE CONOSCO</span>
            <strong>WHATSAPP</strong>
            <span class="contact-arrow">↗</span>
          </a>

          <a
            href="https://www.instagram.com/mbestetica.auto/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            <span class="contact-link-label">ACOMPANHE NOSSO TRABALHO</span>
            <strong>INSTAGRAM</strong>
            <span class="contact-arrow">↗</span>
          </a>
        </div>

        <span class="instagram-handle">@mbestetica.auto</span>
      </div>

      <div class="contact-footer">
        <span>MB ESTÉTICA AUTOMOTIVA</span>
        <span>QUALIDADE EM CADA DETALHE.</span>
      </div>
    </section>
  </main>
`

// CARROSSEL 3D

const cards = [...document.querySelectorAll('.service-card')]
const stage = document.querySelector('.carousel-stage')

let activeIndex = 0
let pointerStartX = 0
let pointerStartY = 0
let pointerCurrentX = 0
let isDragging = false
let hasMoved = false
let suppressClick = false

function updateCarousel() {
  const total = cards.length

  cards.forEach((card) => {
    const index = Number(card.dataset.index)
    const difference = (index - activeIndex + total) % total

    card.classList.remove(
      'is-active',
      'is-prev',
      'is-next',
      'is-hidden'
    )

    if (difference === 0) {
      card.classList.add('is-active')
    } else if (difference === 1) {
      card.classList.add('is-next')
    } else if (difference === total - 1) {
      card.classList.add('is-prev')
    } else {
      card.classList.add('is-hidden')
    }
  })
}

function nextService() {
  activeIndex = (activeIndex + 1) % cards.length
  updateCarousel()
}

function previousService() {
  activeIndex = (activeIndex - 1 + cards.length) % cards.length
  updateCarousel()
}

stage.addEventListener('pointerdown', (event) => {
  if (event.button !== 0) return

  pointerStartX = event.clientX
  pointerStartY = event.clientY
  pointerCurrentX = event.clientX

  isDragging = true
  hasMoved = false

  stage.classList.add('is-dragging')
  stage.setPointerCapture(event.pointerId)
})

stage.addEventListener('pointermove', (event) => {
  if (!isDragging) return

  pointerCurrentX = event.clientX

  const distanceX = Math.abs(pointerCurrentX - pointerStartX)
  const distanceY = Math.abs(event.clientY - pointerStartY)

  if (distanceX > 8 && distanceX > distanceY) {
    hasMoved = true
  }
})

function finishDragging() {
  if (!isDragging) return

  const distance = pointerCurrentX - pointerStartX

  isDragging = false
  stage.classList.remove('is-dragging')

  if (hasMoved) {
    suppressClick = true

    if (distance < -45) {
      nextService()
    } else if (distance > 45) {
      previousService()
    }

    setTimeout(() => {
      suppressClick = false
    }, 300)
  }
}

stage.addEventListener('pointerup', finishDragging)
stage.addEventListener('pointercancel', finishDragging)

stage.addEventListener('click', (event) => {
  if (suppressClick) {
    event.preventDefault()
    event.stopPropagation()
    suppressClick = false
  }
}, true)

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (hasMoved || suppressClick) return

    activeIndex = Number(card.dataset.index)
    updateCarousel()
  })
})

updateCarousel()

// ENVIO DO ORÇAMENTO PELO WHATSAPP

const budgetForm = document.querySelector('#budget-form')

budgetForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const customerName = document.querySelector('#customer-name').value.trim()
  const vehicle = document.querySelector('#vehicle').value.trim()

  const selectedServices = [
    ...document.querySelectorAll('input[name="services"]:checked')
  ].map((input) => input.value)

  if (selectedServices.length === 0) {
    alert('Selecione pelo menos um serviço.')
    return
  }

  const message = `
Olá! Gostaria de solicitar um atendimento na MB Estética Automotiva.

Nome: ${customerName}
Veículo: ${vehicle}

Serviços desejados:
${selectedServices.map((service) => `- ${service}`).join('\n')}

Aguardo o retorno. Obrigado!
  `.trim()

  const whatsappNumber = '5512981408825'
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  window.open(whatsappURL, '_blank', 'noopener,noreferrer')
})