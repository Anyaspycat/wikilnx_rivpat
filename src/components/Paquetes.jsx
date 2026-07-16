import { useEffect, useState } from 'react'

const aptFlow = [
  {
    step: 'search',
    number: 1,
    title: 'Buscar',
    command: 'apt search htop',
    explanation:
      'Permite localizar paquetes relacionados con htop disponibles en los repositorios.',
    image: {
      src: '/img_rivpat/05_paquetes/05_apt_search_htop.png',
      alt: 'Resultado de la búsqueda de htop mediante apt search',
      title: 'Búsqueda del paquete',
      description:
        'Consulta de paquetes relacionados con htop disponibles en los repositorios de Ubuntu.'
    }
  },
  {
    step: 'show',
    number: 2,
    title: 'Revisar',
    command: 'apt show htop',
    explanation:
      'Muestra información como versión, tamaño, dependencias y descripción del paquete.',
    image: {
      src: '/img_rivpat/05_paquetes/05_apt_show_htop.png',
      alt: 'Información del paquete htop mediante apt show',
      title: 'Información del paquete',
      description:
        'Revisión de la versión, tamaño, dependencias y descripción de htop antes de instalarlo.'
    }
  },
  {
    step: 'install',
    number: 3,
    title: 'Instalar',
    command: 'sudo apt install -y htop tree',
    explanation:
      'Instala htop y tree, aceptando automáticamente la confirmación mediante la opción -y.',
    image: {
      src: '/img_rivpat/05_paquetes/05_apt_install_htop_tree.png',
      alt: 'Instalación de htop y tree mediante apt install',
      title: 'Instalación de los paquetes',
      description:
        'Instalación de htop y tree desde los repositorios configurados en Ubuntu Server.'
    }
  },
  {
    step: 'comprobar',
    number: 4,
    title: 'Comprobar',
    command: 'htop',
    explanation:
      'Permite verificar el funcionamiento del monitor y revisar CPU, memoria y procesos.',
    image: {
      src: '/img_rivpat/05_paquetes/05_htop_funcionando.png',
      alt: 'Herramienta htop funcionando en Ubuntu Server',
      title: 'Comprobación de htop',
      description:
        'Ejecución de htop para comprobar su funcionamiento y visualizar los procesos del servidor.'
    }
  }
]

const toolOptions = [
  {
    id: 'htop',
    name: 'htop',
    summary:
      'Alternativa seleccionada por ser simple, liviana y suficiente para supervisar los recursos principales del servidor.',
    advantages: [
      'Simple, liviana y fácil de utilizar.',
      'Permite revisar CPU, memoria y procesos.',
      'Es suficiente para las necesidades del laboratorio.'
    ],
    considerations: ['Presenta menos funciones avanzadas que otras alternativas.'],
    evidence: {
      src: '/img_rivpat/05_paquetes/05_htop_funcionando.png',
      alt: 'Monitor de procesos htop funcionando',
      title: 'htop en funcionamiento',
      description:
        'Herramienta seleccionada para supervisar CPU, memoria y procesos desde la terminal.'
    },
    selected: true
  },
  {
    id: 'btop',
    name: 'btop',
    summary:
      'Alternativa con una interfaz más visual y con información detallada sobre distintos recursos del sistema.',
    advantages: [
      'Interfaz más visual y detallada.',
      'Muestra información de CPU, memoria, discos, red y procesos.'
    ],
    considerations: ['Puede consumir más recursos que htop.'],
    evidence: {
      src: '/img_rivpat/05_paquetes/05_alternativa_btop.png',
      alt: 'Información del paquete btop',
      title: 'Alternativa btop',
      description:
        'Revisión de btop como alternativa visual para el monitoreo de recursos.'
    },
    selected: false
  },
  {
    id: 'glances',
    name: 'glances',
    summary:
      'Alternativa orientada a un monitoreo más amplio del sistema y sus diferentes recursos.',
    advantages: ['Entrega un monitoreo más amplio del sistema.'],
    considerations: ['Requiere más dependencias para su instalación.'],
    evidence: {
      src: '/img_rivpat/05_paquetes/05_alternativa_glances.png',
      alt: 'Información del paquete glances',
      title: 'Alternativa glances',
      description:
        'Revisión de glances como herramienta de monitoreo general del sistema.'
    },
    selected: false
  }
]

function Paquetes() {
  const [selectedTool, setSelectedTool] = useState('htop')
  const [selectedImage, setSelectedImage] = useState(null)

  const activeTool = toolOptions.find((tool) => tool.id === selectedTool)

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

  const closeImage = () => {
    setSelectedImage(null)
  }

  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Gestores de paquetes en Ubuntu Server</h2>
        <p className="page-subtitle">
          Utilizar apt para buscar, revisar e instalar herramientas y comparar
          alternativas según su utilidad y dependencias.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title package-section-heading">
          Flujo de trabajo con apt
        </h3>
        <p className="package-flow-introduction">
          El proceso se realizó siguiendo cuatro etapas: buscar, revisar,
          instalar y comprobar el paquete.
        </p>

        <div className="apt-flow">
          {aptFlow.map((stage, index) => (
            <article className="apt-flow-stage" key={stage.step}>
              <header className="apt-flow-header">
                <span className="apt-flow-number">{stage.number}</span>

                <div>
                  <span className="apt-flow-label">Etapa {stage.number}</span>
                  <h4>{stage.title}</h4>
                </div>
              </header>

              <p className="apt-flow-explanation">{stage.explanation}</p>

              <pre className="code-block apt-flow-command">
                <code>{stage.command}</code>
              </pre>

              <figure className="package-evidence-card apt-flow-evidence">
                <button
                  type="button"
                  className="image-preview-button"
                  onClick={() => setSelectedImage(stage.image)}
                  aria-label={`Ampliar captura de ${stage.image.title}`}
                >
                  <img
                    className="package-evidence-image"
                    src={stage.image.src}
                    alt={stage.image.alt}
                  />

                  <span className="image-zoom-hint" aria-hidden="true">
                    Ampliar
                  </span>
                </button>

                <figcaption className="package-evidence-caption">
                  <strong>{stage.image.title}</strong>
                  <span>{stage.image.description}</span>
                </figcaption>
              </figure>

              {index < aptFlow.length - 1 && (
                <div className="apt-flow-connector" aria-hidden="true">
                  <span>↓</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title package-section-heading">
          Comparación de herramientas
        </h3>

        <div
          className="tab-list package-tool-tabs"
          role="tablist"
          aria-label="Herramientas de monitoreo"
        >
          {toolOptions.map((tool) => (
            <button
              key={tool.id}
              type="button"
              role="tab"
              aria-selected={selectedTool === tool.id}
              className={`tab-button ${
                selectedTool === tool.id ? 'active' : ''
              }`}
              onClick={() => setSelectedTool(tool.id)}
            >
              {tool.name}
            </button>
          ))}
        </div>

        <article className="package-tool-panel">
          <header className="package-tool-header">
            <div>
              <span className="package-tool-label">
                Herramienta analizada
              </span>
              <h4>{activeTool.name}</h4>
            </div>

            {activeTool.selected && (
              <span className="package-selected-badge">Seleccionada</span>
            )}
          </header>

          <p className="package-tool-summary">{activeTool.summary}</p>

          <div className="package-tool-details">
            <section className="package-detail-block">
              <h5>Ventajas</h5>
              <ul className="package-detail-list advantages">
                {activeTool.advantages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="package-detail-block">
              <h5>Consideraciones</h5>
              <ul className="package-detail-list considerations">
                {activeTool.considerations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <figure className="package-evidence-card package-tool-evidence">
            <button
              type="button"
              className="image-preview-button"
              onClick={() => setSelectedImage(activeTool.evidence)}
              aria-label={`Ampliar captura de ${activeTool.evidence.title}`}
            >
              <img
                className="package-evidence-image"
                src={activeTool.evidence.src}
                alt={activeTool.evidence.alt}
              />

              <span className="image-zoom-hint" aria-hidden="true">
                Ampliar
              </span>
            </button>

            <figcaption className="package-evidence-caption">
              <strong>{activeTool.evidence.title}</strong>
              <span>{activeTool.evidence.description}</span>
            </figcaption>
          </figure>
        </article>
      </section>

      <section className="section-card">
        <h3 className="section-title">Tabla comparativa</h3>

        <div className="package-table-scroll">
          <table className="comparison-table package-comparison-table">
            <thead>
              <tr>
                <th>Herramienta</th>
                <th>Ventajas</th>
                <th>Consideraciones</th>
                <th>Decisión</th>
              </tr>
            </thead>

            <tbody>
              {toolOptions.map((tool) => (
                <tr
                  key={tool.id}
                  className={tool.selected ? 'recommended-row' : ''}
                >
                  <td>
                    <strong className="package-table-tool">{tool.name}</strong>
                  </td>

                  <td>
                    <ul className="package-table-list">
                      {tool.advantages.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>

                  <td>
                    <ul className="package-table-list">
                      {tool.considerations.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>

                  <td>
                    {tool.selected ? (
                      <span className="package-table-selection">
                        Seleccionada
                      </span>
                    ) : (
                      <span className="package-table-alternative">
                        Alternativa
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="package-decision-box">
          <strong>Decisión:</strong>
          <p>
            Se seleccionó htop porque es una alternativa simple, liviana y
            suficiente para supervisar los recursos principales del servidor.
          </p>
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Resultado final</h3>

        <div className="result-box">
          <ul>
            <li>Se buscaron paquetes con apt search.</li>
            <li>Se revisó información con apt show.</li>
            <li>Se instalaron paquetes con apt install.</li>
            <li>Se comprobó el funcionamiento de htop.</li>
            <li>
              Se compararon alternativas antes de seleccionar una solución.
            </li>
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

export default Paquetes
