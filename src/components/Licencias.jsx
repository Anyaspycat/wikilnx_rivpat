import { useEffect, useState } from 'react'

const licenseTabs = {
  copyleft: {
    title: 'Copyleft',
    summary:
      'Las licencias con copyleft, como GPL, permiten usar, estudiar, modificar y distribuir el software, pero exigen que las versiones derivadas mantengan las mismas libertades.',
    features: [
      'Permiten usar, estudiar y modificar el software.',
      'Las versiones modificadas deben conservar las mismas libertades.',
      'Se relacionan directamente con la GPL versión 3 revisada en Ubuntu.'
    ],
    examples: ['GPL', 'GPL-3']
  },
  permisivas: {
    title: 'Permisivas',
    summary:
      'Las licencias permisivas, como MIT, BSD y Apache, permiten reutilizar y modificar el software con menos restricciones, generalmente conservando avisos de autoría y licencia.',
    features: [
      'Permiten reutilizar y modificar el software con menos restricciones.',
      'Generalmente exigen conservar avisos de autoría y licencia.',
      'Se mencionan como parte del conjunto de licencias disponibles en Ubuntu.'
    ],
    examples: ['BSD', 'Apache', 'MIT']
  },
  propietarias: {
    title: 'Propietarias',
    summary:
      'En el software propietario el código fuente no suele estar disponible y su uso, modificación o distribución depende de las condiciones definidas por el propietario.',
    features: [
      'El código fuente no suele estar disponible.',
      'El uso y modificación dependen de condiciones definidas por el propietario.',
      'Se presentan como un tipo distinto al software libre.'
    ],
    examples: ['Software propietario']
  }
}

const evidenceImages = [
  {
    src: '/img_rivpat/02_licencias/02_licencias_disponibles.png',
    alt: 'Listado de licencias disponibles en Ubuntu Server',
    title: 'Licencias disponibles en Ubuntu',
    description:
      'Listado de licencias comunes incluidas en Ubuntu Server, como GPL, LGPL, BSD, Apache y MPL.'
  },
  {
    src: '/img_rivpat/02_licencias/02_licencia_gpl3.png',
    alt: 'Contenido de la licencia GNU GPL versión 3',
    title: 'Licencia GNU GPL versión 3',
    description:
      'Revisión del contenido inicial de la GNU General Public License versión 3.'
  },
  {
    src: '/img_rivpat/02_licencias/02_licencia_bash.png',
    alt: 'Información de licenciamiento del paquete Bash',
    title: 'Licencia de Bash',
    description:
      'Información del paquete Bash, distribuido principalmente bajo GPL-3 o una versión posterior.'
  }
]

const licenseRelations = [
  {
    tool: 'Ubuntu Server',
    license: 'Software libre y paquetes distribuidos bajo distintas licencias.'
  },
  {
    tool: 'Bash',
    license: 'GPL-3 o una versión posterior.'
  },
  {
    tool: 'nginx',
    license: 'Licencia permisiva de tipo BSD.'
  },
  {
    tool: 'VirtualBox',
    license:
      'Combina componentes de software libre con extensiones sujetas a otras condiciones.'
  }
]

function Licencias() {
  const [activeTab, setActiveTab] = useState('copyleft')
  const [selectedImage, setSelectedImage] = useState(null)

  const activeLicense = licenseTabs[activeTab]

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
        <h2>Software libre y licencias</h2>
        <p className="page-subtitle">
          Reconocer distintos tipos de licencias de software y relacionarlos
          con Ubuntu Server y las herramientas utilizadas durante el
          laboratorio.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title">Objetivo</h3>
        <p>
          Identificar licencias presentes en Ubuntu y relacionarlas con las
          herramientas del laboratorio para comprender el alcance del software
          libre y sus condiciones de uso.
        </p>
      </section>

      <section className="section-card">
        <h3 className="section-title license-section-heading">
          Tipos de licenciamiento
        </h3>

        <div
          className="tab-list license-tabs"
          role="tablist"
          aria-label="Tipos de licencias"
        >
          {Object.entries(licenseTabs).map(([key, tab]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={activeTab === key}
              className={`tab-button ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <article className="license-panel">
          <header className="license-panel-header">
            <span className="license-label">Tipo de licencia</span>
            <h4>{activeLicense.title}</h4>
          </header>

          <p className="license-summary">{activeLicense.summary}</p>

          <div className="license-detail-grid">
            <section className="license-detail-block">
              <h5>Características principales</h5>
              <ul className="license-feature-list">
                {activeLicense.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="license-detail-block">
              <h5>Ejemplos</h5>
              <div className="license-example-list">
                {activeLicense.examples.map((item) => (
                  <span className="license-example" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </article>
      </section>

      <section className="section-card">
        <h3 className="section-title">Galería de evidencias</h3>
        <p className="section-help">
          Selecciona una captura para verla en pantalla completa.
        </p>

        <div className="license-evidence-stack">
          {evidenceImages.map((image) => (
            <figure className="license-evidence-card" key={image.src}>
              <button
                type="button"
                className="image-preview-button"
                onClick={() => setSelectedImage(image)}
                aria-label={`Ampliar captura de ${image.title}`}
              >
                <img
                  className="license-evidence-image"
                  src={image.src}
                  alt={image.alt}
                />
                <span className="image-zoom-hint" aria-hidden="true">
                  Ampliar
                </span>
              </button>

              <figcaption className="license-evidence-caption">
                <strong>{image.title}</strong>
                <span>{image.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Relación con las herramientas</h3>

        <div className="table-scroll">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Herramienta</th>
                <th>Tipo de licencia</th>
              </tr>
            </thead>
            <tbody>
              {licenseRelations.map((item) => (
                <tr key={item.tool}>
                  <td>{item.tool}</td>
                  <td>{item.license}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Resultado final</h3>
        <div className="result-box">
          <ul>
            <li>Identificar licencias instaladas en Ubuntu.</li>
            <li>Revisar el contenido de la GPL versión 3.</li>
            <li>Relacionar Bash con su licencia.</li>
            <li>
              Diferenciar copyleft, licencias permisivas y software
              propietario.
            </li>
            <li>
              Relacionar el licenciamiento con las herramientas utilizadas.
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

export default Licencias
