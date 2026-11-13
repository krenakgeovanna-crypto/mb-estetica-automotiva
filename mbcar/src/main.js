import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <a href="#inicio" class="logo">
      <img src="/logo-mb.png" alt="MB Estética Automotiva">
    </a>

    <nav class="nav">
      <a href="#inicio">INÍCIO</a>
      <a href="#sobre">SOBRE</a>
      <a href="#trabalhos">TRABALHOS</a>
      <a href="#contato">CONTATO</a>
    </nav>

    <a href="#orcamento" class="header-button">SOLICITAR ORÇAMENTO</a>
  </header>

  <main>
    <section class="hero" id="inicio">
      <video class="hero-video" autoplay muted loop playsinline preload="metadata">
        <source src="/carro.mp4" type="video/mp4">
      </video>

      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1>
          CUIDADO QUE<br>
          SE VÊ NOS <span>DETALHES.</span>
        </h1>

        <p>
          Estética automotiva com atenção em cada detalhe.
          Seu veículo merece esse cuidado.
        </p>

        <a href="#trabalhos" class="hero-button">
          CONHEÇA NOSSO TRABALHO
        </a>
      </div>

      <div class="hero-bottom">
        <span>QUALIDADE EM CADA DETALHE</span>
      </div>
    </section>

    <section class="about-section" id="sobre">
      <div class="about-title">
        <span class="eyebrow"><i></i> NOSSA ESSÊNCIA</span>
        <h2>CUIDADO EM<br>CADA <span>DETALHE.</span></h2>
      </div>

      <div class="about-text">
        <p class="about-lead">
          Mais do que cuidar de veículos, valorizamos cada detalhe
          para entregar um resultado que faz a diferença.
        </p>

        <p>
          Na MB Estética Automotiva, cada trabalho recebe atenção
          e dedicação. Nosso objetivo é oferecer um serviço cuidadoso,
          respeitando as características de cada veículo.
        </p>

        <a href="#contato" class="text-link">
          ENTRE EM CONTATO
        </a>
      </div>
    </section>

    <section class="works-section" id="trabalhos">
      <div class="section-heading">
        <div>
          <span class="eyebrow"><i></i> NOSSO PORTFÓLIO</span>
          <h2>TRABALHOS <span>REALIZADOS.</span></h2>
        </div>

        <p>
          Cada imagem mostra um pouco do cuidado e da dedicação
          presentes em nossos serviços.
        </p>
      </div>

      <div class="works-grid">
        <article class="work-card">
          <div class="work-image">
            <img src="/servicos/servicos-01.jpeg" alt="Trabalho realizado pela MB Estética Automotiva">
          </div>
          <div class="work-info">
            <span>MB ESTÉTICA AUTOMOTIVA</span>
            <h3>LIMPEZA DE CHASSI</h3>
          </div>
        </article>

        <article class="work-card">
          <div class="work-image">
            <img src="/servicos/servicos-02.jpeg" alt="Serviço automotivo realizado pela MB">
          </div>
          <div class="work-info">
            <span>MB ESTÉTICA AUTOMOTIVA</span>
            <h3>CUIDADO AUTOMOTIVO</h3>
          </div>
        </article>

        <article class="work-card">
          <div class="work-image">
            <img src="/servicos/servicos-03.jpeg" alt="Resultado de serviço automotivo da MB">
          </div>
          <div class="work-info">
            <span>MB ESTÉTICA AUTOMOTIVA</span>
            <h3>DETALHAMENTO</h3>
          </div>
        </article>

        <article class="work-card">
          <div class="work-image">
            <img src="/servicos/servicos-04.jpeg" alt="Trabalho de estética automotiva">
          </div>
          <div class="work-info">
            <span>MB ESTÉTICA AUTOMOTIVA</span>
            <h3>LIMPEZA DETALHADA</h3>
          </div>
        </article>

        <article class="work-card">
          <div class="work-image">
            <img src="/servicos/servicos-05.jpeg" alt="Serviço realizado pela MB Estética Automotiva">
          </div>
          <div class="work-info">
            <span>MB ESTÉTICA AUTOMOTIVA</span>
            <h3>RESULTADO FINAL</h3>
          </div>
        </article>

        <a href="#orcamento" class="work-cta">
          <span class="cta-small">SEU VEÍCULO MERECE</span>
          <h3>VAMOS CUIDAR<br>DO SEU CARRO?</h3>
          <span class="cta-link">SOLICITE UM ORÇAMENTO</span>
        </a>
      </div>
    </section>

    <section class="difference-section">
      <div class="difference-intro">
        <span class="eyebrow"><i></i> O PADRÃO MB</span>
        <h2>ATENÇÃO AOS<br>DETALHES. <span>SEMPRE.</span></h2>
        <p>
          Um bom resultado começa no cuidado com cada etapa do serviço.
          É assim que trabalhamos.
        </p>
      </div>

      <div class="difference-grid">
        <article class="difference-card">
          <span>01 / CUIDADO</span>
          <h3>ATENÇÃO EM CADA DETALHE</h3>
          <p>Tratamos cada veículo com dedicação e atenção ao serviço realizado.</p>
        </article>

        <article class="difference-card">
          <span>02 / QUALIDADE</span>
          <h3>COMPROMISSO COM O RESULTADO</h3>
          <p>Buscamos entregar um trabalho bem executado em cada atendimento.</p>
        </article>

        <article class="difference-card">
          <span>03 / DEDICAÇÃO</span>
          <h3>TRABALHO FEITO COM ZELO</h3>
          <p>Cada etapa é realizada com cuidado e responsabilidade.</p>
        </article>

        <article class="difference-card">
          <span>04 / CONFIANÇA</span>
          <h3>ATENDIMENTO PRÓXIMO</h3>
          <p>Um atendimento atencioso para entender o que seu veículo precisa.</p>
        </article>
      </div>
    </section>

    <section class="budget-section" id="orcamento">
      <div class="budget-heading">
        <span class="eyebrow"><i></i> FALE COM A MB</span>
        <h2>PEÇA SEU <span>ORÇAMENTO.</span></h2>
        <p>Preencha os dados e conte o que seu veículo precisa.</p>
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
          ENVIAR SOLICITAÇÃO
        </button>

        <p class="form-note">
          Você será direcionado ao WhatsApp da MB para continuar o atendimento.
        </p>
      </form>
    </section>
  </main>

  <footer class="footer" id="contato">
    <div class="footer-main">
      <a href="#inicio" class="footer-logo">
        <img src="/logo-mb.png" alt="MB Estética Automotiva">
      </a>

      <div class="footer-message">
        <span>MB ESTÉTICA AUTOMOTIVA</span>
        <p>QUALIDADE EM CADA DETALHE.</p>
      </div>

      <div class="footer-links">
        <a href="https://wa.me/5512981408825" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
        <a href="https://www.instagram.com/mbestetica.auto/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© MB ESTÉTICA AUTOMOTIVA</span>
      <a href="#inicio">VOLTAR AO TOPO</a>
    </div>
  </footer>
`

// FORMULÁRIO DE ORÇAMENTO

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
Olá! Gostaria de solicitar um orçamento na MB Estética Automotiva.

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