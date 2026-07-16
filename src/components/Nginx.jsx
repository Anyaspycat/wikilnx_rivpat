import { useState } from 'react'

const timelineSteps = [
  {
    id: 1,
    title: 'Instalar nginx',
    summary: 'Se instaló nginx con sudo apt install -y nginx.',
    command: 'sudo apt install -y nginx',
    evidence: '/img_rivpat/06_nginx/06_instalacion_nginx.png',
    highlights: ['nginx']
  },
  {
    id: 2,
    title: 'Verificar el servicio',
    summary: 'Se comprobó el estado de nginx y se confirmó que estaba activo.',
    command: 'sudo systemctl status nginx',
    evidence: '/img_rivpat/06_nginx/06_estado_nginx.png',
    highlights: ['Active: active (running)']
  },
  {
    id: 3,
    title: 'Comprobar la página predeterminada',
    summary: 'Se abrió http://localhost:8080 para verificar que nginx respondía por el puerto 80.',
    command: 'http://localhost:8080',
    evidence: '/img_rivpat/06_nginx/06_bienvenida_nginx.png',
    highlights: ['Welcome to nginx!', 'localhost:8080']
  },
  {
    id: 4,
    title: 'Instalar herramientas',
    summary: 'Se instalaron Node.js, npm y Git para preparar el entorno del portafolio.',
    command: 'sudo apt install -y nodejs npm git',
    evidence: '/img_rivpat/06_nginx/06_instalacion_node_git.png',
    highlights: ['nodejs', 'npm', 'git']
  },
  {
    id: 5,
    title: 'Clonar el portafolio',
    summary: 'Se clonó el repositorio del portafolio desde GitHub y se verificó su contenido.',
    command: 'git clone https://github.com/Anyaspycat/eva01_landingpage_veterinaria.git',
    evidence: '/img_rivpat/06_nginx/06_clon_portafolio.png',
    highlights: ['index.html', 'css', 'img']
  },
  {
    id: 6,
    title: 'Copiar archivos y asignar permisos',
    summary: 'Se creó la carpeta del sitio, se copiaron los archivos y se asignó el propietario www-data.',
    command: 'sudo mkdir -p /var/www/wiki\nsudo cp -r ./* /var/www/wiki/\nsudo chown -R www-data:www-data /var/www/wiki',
    evidence: '/img_rivpat/06_nginx/06_copia_permisos_sitio.png',
    highlights: ['/var/www/wiki', 'www-data']
  },
  {
    id: 7,
    title: 'Configurar nginx',
    summary: 'Se creó la configuración del sitio y se activó en nginx.',
    command: 'sudo ln -s /etc/nginx/sites-available/wiki /etc/nginx/sites-enabled/\nsudo rm /etc/nginx/sites-enabled/default\nsudo nginx -t\nsudo systemctl reload nginx',
    evidence: '/img_rivpat/06_nginx/06_configuracion_nginx_correcta.png',
    highlights: ['syntax is ok', 'test is successful']
  },
  {
    id: 8,
    title: 'Comprobar el sitio publicado',
    summary: 'Se volvió a abrir http://localhost:8080 para verificar que el portafolio reemplazó la página predeterminada.',
    command: 'http://localhost:8080',
    evidence: '/img_rivpat/06_nginx/06_portafolio_publicado.png',
    highlights: ['localhost:8080']
  }
]

function Nginx() {
  const [openStep, setOpenStep] = useState(1)

  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Nginx y despliegue del sitio web</h2>
        <p className="page-subtitle">
          Instalar y configurar nginx en Ubuntu Server para publicar un sitio web desde la máquina virtual.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title">Línea de tiempo del despliegue</h3>
        <div className="step-list">
          {timelineSteps.map((step) => {
            const isOpen = openStep === step.id

            return (
              <article className="step-card" key={step.id}>
                <button
                  type="button"
                  className="step-button"
                  onClick={() => setOpenStep(isOpen ? 0 : step.id)}
                >
                  {step.id}. {step.title}
                </button>

                {isOpen && (
                  <div className="step-content">
                    <p>{step.summary}</p>
                    <pre className="code-block">{step.command}</pre>
                    <p><strong>Elementos destacados:</strong></p>
                    <ul>
                      {step.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <img className="evidence-image" src={step.evidence} alt={step.title} />
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Antes y después</h3>
        <div className="before-after-grid">
          <figure>
            <img className="evidence-image" src="/img_rivpat/06_nginx/06_bienvenida_nginx.png" alt="Página Welcome to nginx" />
            <figcaption>Página Welcome to nginx</figcaption>
          </figure>
          <figure>
            <img className="evidence-image" src="/img_rivpat/06_nginx/06_portafolio_publicado.png" alt="Portafolio publicado" />
            <figcaption>Portafolio publicado</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Resultado final</h3>
        <div className="result-box">
          <ul>
            <li>Se instaló nginx y se verificó el servicio activo.</li>
            <li>Se comprobó el acceso mediante localhost:8080.</li>
            <li>Se clonó un portafolio desde GitHub.</li>
            <li>Se copió el sitio a /var/www/wiki y se asignó www-data.</li>
            <li>Se configuró y validó nginx correctamente.</li>
          </ul>
        </div>
      </section>
    </section>
  )
}

export default Nginx
