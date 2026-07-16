import { useEffect, useMemo, useState } from 'react'

const timelineSteps = [
  {
    id: 1,
    title: 'Instalar nginx',
    summary:
      'Se instaló nginx desde los repositorios de Ubuntu Server mediante apt.',
    details:
      'La instalación incorporó el servidor web y dejó disponible el servicio para su posterior verificación.',
    command: 'sudo apt install -y nginx',
    highlights: ['nginx'],
    evidence: {
      src: '/img_rivpat/06_nginx/06_instalacion_nginx.png',
      alt: 'Instalación de nginx en Ubuntu Server',
      title: 'Instalación de nginx',
      description:
        'Descarga e instalación del servidor web nginx mediante el gestor de paquetes apt.'
    }
  },
  {
    id: 2,
    title: 'Verificar el servicio',
    summary:
      'Se comprobó el estado de nginx y se confirmó que estaba activo.',
    details:
      'El comando systemctl permitió revisar que el servicio se encontraba cargado y en ejecución.',
    command: 'sudo systemctl status nginx',
    highlights: ['Active: active (running)'],
    evidence: {
      src: '/img_rivpat/06_nginx/06_estado_nginx.png',
      alt: 'Estado activo del servicio nginx',
      title: 'Estado del servicio',
      description:
        'Validación de nginx mediante systemctl, confirmando que el servicio estaba activo y funcionando.'
    }
  },
  {
    id: 3,
    title: 'Comprobar la página predeterminada',
    summary:
      'Se abrió localhost:8080 para verificar que nginx respondía desde la máquina virtual.',
    details:
      'La regla de reenvío conectó el puerto 8080 del anfitrión con el puerto 80 de Ubuntu Server.',
    command: 'http://localhost:8080',
    highlights: ['Welcome to nginx!', 'localhost:8080'],
    evidence: {
      src: '/img_rivpat/06_nginx/06_bienvenida_nginx.png',
      alt: 'Página predeterminada Welcome to nginx',
      title: 'Página predeterminada de nginx',
      description:
        'Comprobación inicial del servidor web mediante la página Welcome to nginx en localhost:8080.'
    }
  },
  {
    id: 4,
    title: 'Instalar herramientas',
    summary:
      'Se instalaron Node.js, npm y Git para preparar el entorno del portafolio.',
    details:
      'Estas herramientas permitieron disponer de Git para clonar el proyecto y mantener preparado el servidor para proyectos web.',
    command: 'sudo apt install -y nodejs npm git',
    highlights: ['nodejs', 'npm', 'git'],
    evidence: {
      src: '/img_rivpat/06_nginx/06_instalacion_node_git.png',
      alt: 'Instalación de Node.js, npm y Git',
      title: 'Instalación de herramientas',
      description:
        'Instalación de Node.js, npm y Git desde los repositorios de Ubuntu Server.'
    }
  },
  {
    id: 5,
    title: 'Clonar el portafolio',
    summary:
      'Se clonó el repositorio del portafolio desde GitHub y se verificó su contenido.',
    details:
      'El proyecto contenía un sitio estático con index.html, una carpeta css y recursos gráficos.',
    command:
      'git clone https://github.com/Anyaspycat/eva01_landingpage_veterinaria.git',
    highlights: ['index.html', 'css', 'img'],
    evidence: {
      src: '/img_rivpat/06_nginx/06_clon_portafolio.png',
      alt: 'Clonación del portafolio desde GitHub',
      title: 'Clonación del portafolio',
      description:
        'Descarga del repositorio desde GitHub y revisión de los archivos incluidos en el sitio.'
    }
  },
  {
    id: 6,
    title: 'Copiar archivos y asignar permisos',
    summary:
      'Se creó la carpeta del sitio, se copiaron los archivos y se asignó el propietario www-data.',
    details:
      'Los archivos se dejaron en /var/www/wiki para que nginx pudiera servirlos con el usuario correspondiente.',
    command:
      'sudo mkdir -p /var/www/wiki\nsudo cp -r ./* /var/www/wiki/\nsudo chown -R www-data:www-data /var/www/wiki',
    highlights: ['/var/www/wiki', 'www-data'],
    evidence: {
      src: '/img_rivpat/06_nginx/06_copia_permisos_sitio.png',
      alt: 'Copia del sitio y asignación de permisos',
      title: 'Archivos y permisos del sitio',
      description:
        'Copia del portafolio a /var/www/wiki y asignación del propietario y grupo www-data.'
    }
  },
  {
    id: 7,
    title: 'Configurar nginx',
    summary:
      'Se creó la configuración del sitio, se activó y se recargó nginx.',
    details:
      'Antes de recargar el servicio se comprobó la sintaxis de la configuración mediante nginx -t.',
    command:
      'sudo ln -s /etc/nginx/sites-available/wiki /etc/nginx/sites-enabled/\nsudo rm /etc/nginx/sites-enabled/default\nsudo nginx -t\nsudo systemctl reload nginx',
    highlights: ['syntax is ok', 'test is successful'],
    evidence: {
      src: '/img_rivpat/06_nginx/06_configuracion_nginx_correcta.png',
      alt: 'Validación correcta de la configuración de nginx',
      title: 'Configuración validada',
      description:
        'Comprobación de la sintaxis y activación del sitio antes de recargar nginx.'
    }
  },
  {
    id: 8,
    title: 'Comprobar el sitio publicado',
    summary:
      'Se volvió a abrir localhost:8080 y se verificó que el portafolio reemplazó la página predeterminada.',
    details:
      'La prueba confirmó que nginx estaba sirviendo correctamente los archivos almacenados en /var/www/wiki.',
    command: 'http://localhost:8080',
    highlights: ['localhost:8080', 'Portafolio publicado'],
    evidence: {
      src: '/img_rivpat/06_nginx/06_portafolio_publicado.png',
      alt: 'Portafolio publicado mediante nginx',
      title: 'Portafolio publicado',
      description:
        'Resultado final del despliegue, accesible desde el navegador mediante localhost:8080.'
    }
  }
]

const comparisonImages = [
  {
    src: '/img_rivpat/06_nginx/06_bienvenida_nginx.png',
    alt: 'Página predeterminada de nginx antes del despliegue',
    title: 'Antes: página predeterminada',
    description:
      'Estado inicial del servidor web después de instalar nginx.'
  },
  {
    src: '/img_rivpat/06_nginx/06_portafolio_publicado.png',
    alt: 'Portafolio publicado después de configurar nginx',
    title: 'Después: portafolio publicado',
    description:
      'Resultado obtenido después de copiar el sitio y configurar nginx.'
  }
]

function Nginx() {
  const [openStep, setOpenStep] = useState(1)
  const [visitedSteps, setVisitedSteps] = useState(() => new Set([1]))
  const [selectedImage, setSelectedImage] = useState(null)

  const progress = useMemo(
    () => Math.round((visitedSteps.size / timelineSteps.length) * 100),
    [visitedSteps]
  )

  useEffect(() => {
    if (!selectedImage) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow

    const closeWithEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeWithEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeWithEscape)
    }
  }, [selectedImage])

  const markStepAsVisited = (stepId) => {
    setVisitedSteps((currentSteps) => {
      const updatedSteps = new Set(currentSteps)
      updatedSteps.add(stepId)
      return updatedSteps
    })
  }

  const toggleStep = (stepId) => {
    setOpenStep((currentStep) => (currentStep === stepId ? 0 : stepId))
    markStepAsVisited(stepId)
  }

  const openStepById = (stepId) => {
    setOpenStep(stepId)
    markStepAsVisited(stepId)
  }

  const goToAdjacentStep = (direction) => {
    const currentIndex = timelineSteps.findIndex(
      (step) => step.id === openStep
    )
    const nextIndex = currentIndex + direction

    if (nextIndex >= 0 && nextIndex < timelineSteps.length) {
      openStepById(timelineSteps[nextIndex].id)
    }
  }

  const activeStepIndex = timelineSteps.findIndex(
    (step) => step.id === openStep
  )

  const closeImage = () => {
    setSelectedImage(null)
  }

  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Nginx y despliegue del sitio web</h2>
        <p className="page-subtitle">
          Instalación y configuración de nginx en Ubuntu Server para publicar
          un sitio web desde la máquina virtual.
        </p>
      </header>

      <section className="section-card">
        <div className="installation-progress-header">
          <div>
            <h3 className="section-title">Progreso del despliegue</h3>
            <p>
              El avance aumenta cuando seleccionas por primera vez cada etapa
              de la configuración.
            </p>
          </div>

          <strong className="progress-percentage">{progress}%</strong>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Progreso de revisión del despliegue con nginx"
        >
          <span style={{ width: `${progress}%` }} />
        </div>

        <div
          className="progress-step-list nginx-progress-steps"
          aria-label="Etapas revisadas"
        >
          {timelineSteps.map((step) => {
            const isVisited = visitedSteps.has(step.id)
            const isActive = openStep === step.id

            return (
              <button
                key={step.id}
                type="button"
                className={`progress-step ${
                  isVisited ? 'visited' : ''
                } ${isActive ? 'active' : ''}`}
                onClick={() => openStepById(step.id)}
                aria-label={`Abrir paso ${step.id}: ${step.title}`}
              >
                <span>{isVisited ? '✓' : step.id}</span>
                <small>{step.title}</small>
              </button>
            )
          })}
        </div>

        <p className="progress-summary">
          {visitedSteps.size} de {timelineSteps.length} etapas revisadas.
        </p>
      </section>

      <section className="section-card">
        <h3 className="section-title">Línea de tiempo del despliegue</h3>

        <div className="installation-step-list">
          {timelineSteps.map((step) => {
            const isOpen = openStep === step.id
            const isVisited = visitedSteps.has(step.id)

            return (
              <article
                className={`installation-step-card ${
                  isOpen ? 'open' : ''
                } ${isVisited ? 'visited' : ''}`}
                key={step.id}
              >
                <button
                  type="button"
                  className="installation-step-button"
                  onClick={() => toggleStep(step.id)}
                  aria-expanded={isOpen}
                >
                  <span className="installation-step-number">
                    {isVisited ? '✓' : step.id}
                  </span>

                  <span className="installation-step-heading">
                    <strong>
                      {step.id}. {step.title}
                    </strong>
                    <small>{step.summary}</small>
                  </span>

                  <span
                    className={`installation-step-chevron ${
                      isOpen ? 'open' : ''
                    }`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="installation-step-content">
                    <p className="installation-step-details">
                      {step.details}
                    </p>

                    <section className="installation-command-section">
                      <h4>Comando utilizado</h4>
                      <pre className="code-block nginx-command-block">
                        <code>{step.command}</code>
                      </pre>
                    </section>

                    <section className="nginx-highlight-section">
                      <h4>Elementos destacados</h4>

                      <div className="nginx-highlight-list">
                        {step.highlights.map((item) => (
                          <span className="nginx-highlight-chip" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section className="installation-evidence-section">
                      <h4>Evidencia del paso</h4>
                      <p className="section-help">
                        Selecciona la captura para verla en pantalla completa.
                      </p>

                      <div className="installation-evidence-stack">
                        <figure className="installation-evidence-card">
                          <button
                            type="button"
                            className="image-preview-button"
                            onClick={() => setSelectedImage(step.evidence)}
                            aria-label={`Ampliar captura de ${step.evidence.title}`}
                          >
                            <img
                              className="installation-evidence-image"
                              src={step.evidence.src}
                              alt={step.evidence.alt}
                            />

                            <span
                              className="image-zoom-hint"
                              aria-hidden="true"
                            >
                              Ampliar
                            </span>
                          </button>

                          <figcaption className="installation-evidence-caption">
                            <strong>{step.evidence.title}</strong>
                            <span>{step.evidence.description}</span>
                          </figcaption>
                        </figure>
                      </div>
                    </section>

                    <div className="installation-navigation">
                      <button
                        type="button"
                        className="installation-navigation-button"
                        onClick={() => goToAdjacentStep(-1)}
                        disabled={activeStepIndex === 0}
                      >
                        ← Paso anterior
                      </button>

                      <span>
                        Paso {activeStepIndex + 1} de {timelineSteps.length}
                      </span>

                      <button
                        type="button"
                        className="installation-navigation-button next"
                        onClick={() => goToAdjacentStep(1)}
                        disabled={
                          activeStepIndex === timelineSteps.length - 1
                        }
                      >
                        Paso siguiente →
                      </button>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Antes y después</h3>
        <p className="section-help">
          Selecciona una captura para verla en pantalla completa.
        </p>

        <div className="nginx-before-after-grid">
          {comparisonImages.map((image) => (
            <figure className="nginx-comparison-card" key={image.src}>
              <button
                type="button"
                className="image-preview-button"
                onClick={() => setSelectedImage(image)}
                aria-label={`Ampliar captura de ${image.title}`}
              >
                <img
                  className="nginx-comparison-image"
                  src={image.src}
                  alt={image.alt}
                />

                <span className="image-zoom-hint" aria-hidden="true">
                  Ampliar
                </span>
              </button>

              <figcaption className="nginx-comparison-caption">
                <strong>{image.title}</strong>
                <span>{image.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Resultado final</h3>

        <div className="result-box">
          <ul>
            <li>Se instaló nginx y se verificó el servicio activo.</li>
            <li>Se comprobó el acceso mediante localhost:8080.</li>
            <li>Se clonó un portafolio desde GitHub.</li>
            <li>
              Se copió el sitio a /var/www/wiki y se asignó www-data.
            </li>
            <li>Se configuró y validó nginx correctamente.</li>
          </ul>
        </div>
      </section>

      {selectedImage && (
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${selectedImage.title}`}
          onClick={closeImage}
        >
          <button
            type="button"
            className="image-modal-close"
            onClick={closeImage}
            aria-label="Cerrar imagen ampliada"
          >
            ×
          </button>

          <div
            className="image-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} />

            <div className="image-modal-caption">
              <strong>{selectedImage.title}</strong>
              <span>{selectedImage.description}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Nginx
