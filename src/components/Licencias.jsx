import { useState } from 'react'

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
      'El uso y modificación dependen de condiciones del propietario.',
      'Se presentan como un tipo distinto al software libre.'
    ],
    examples: ['Software propietario']
  }
}

const licenseRelations = [
  { tool: 'Ubuntu Server', license: 'Software libre y paquetes con distintas licencias.' },
  { tool: 'Bash', license: 'GPL-3 o posterior.' },
  { tool: 'nginx', license: 'Licencia permisiva de tipo BSD.' },
  { tool: 'VirtualBox', license: 'Combina componentes de software libre con extensiones sujetas a otras condiciones de licencia.' }
]

function Licencias() {
  const [activeTab, setActiveTab] = useState('copyleft')
  const activeLicense = licenseTabs[activeTab]

  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Software libre y licencias</h2>
        <p className="page-subtitle">
          Reconocer distintos tipos de licencias de software y relacionarlos con Ubuntu Server y algunas herramientas utilizadas durante el laboratorio.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title">Objetivo</h3>
        <p>
          Identificar licencias presentes en Ubuntu y relacionarlas con las herramientas del laboratorio para comprender el alcance del software libre y sus condiciones de uso.
        </p>
      </section>

      <section className="section-card">
        <h3 className="section-title">Tipos de licenciamiento</h3>
        <div className="tab-list" role="tablist" aria-label="Tipos de licencias">
          {Object.entries(licenseTabs).map(([key, tab]) => (
            <button
              key={key}
              type="button"
              className={`tab-button ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="section-card" style={{ marginTop: '0.8rem', padding: '0.95rem' }}>
          <h4>{activeLicense.title}</h4>
          <p>{activeLicense.summary}</p>
          <h5>Características principales</h5>
          <ul>
            {activeLicense.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h5>Ejemplos</h5>
          <ul>
            {activeLicense.examples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Galería de evidencias</h3>
        <div className="image-grid">
          <figure>
            <img
              className="evidence-image"
              src="/img_rivpat/02_licencias/02_licencias_disponibles.png"
              alt="Licencias disponibles en Ubuntu"
            />
            <figcaption>Licencias disponibles en Ubuntu</figcaption>
          </figure>
          <figure>
            <img
              className="evidence-image"
              src="/img_rivpat/02_licencias/02_licencia_gpl3.png"
              alt="Licencia GPL versión 3"
            />
            <figcaption>Licencia GPL versión 3</figcaption>
          </figure>
          <figure>
            <img
              className="evidence-image"
              src="/img_rivpat/02_licencias/02_licencia_bash.png"
              alt="Licencia de Bash"
            />
            <figcaption>Licencia de Bash</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Relación con las herramientas</h3>
        <div style={{ overflowX: 'auto' }}>
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
            <li>Diferenciar copyleft, licencias permisivas y software propietario.</li>
            <li>Relacionar el licenciamiento con las herramientas utilizadas.</li>
          </ul>
        </div>
      </section>
    </section>
  )
}

export default Licencias
