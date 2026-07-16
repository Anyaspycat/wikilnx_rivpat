import { useState } from 'react'

const aptFlow = [
  {
    step: 'search',
    title: 'Buscar',
    command: 'apt search htop',
    explanation: 'Permite localizar paquetes relacionados con htop disponibles en los repositorios.',
    image: '/img_rivpat/05_paquetes/05_apt_search_htop.png'
  },
  {
    step: 'show',
    title: 'Revisar',
    command: 'apt show htop',
    explanation: 'Muestra información como versión, tamaño, dependencias y descripción del paquete.',
    image: '/img_rivpat/05_paquetes/05_apt_show_htop.png'
  },
  {
    step: 'install',
    title: 'Instalar',
    command: 'sudo apt install -y htop tree',
    explanation: 'Instala htop y tree, aceptando automáticamente la confirmación con -y.',
    image: '/img_rivpat/05_paquetes/05_apt_install_htop_tree.png'
  },
  {
    step: 'comprobar',
    title: 'Comprobar',
    command: 'htop',
    explanation: 'Permite comprobar el funcionamiento del monitor de procesos y supervisar CPU, memoria y procesos.',
    image: '/img_rivpat/05_paquetes/05_htop_funcionando.png'
  }
]

const toolOptions = [
  {
    id: 'htop',
    name: 'htop',
    advantages: ['Simple, liviana y fácil de usar.', 'Suficiente para supervisar recursos principales del servidor.'],
    considerations: ['Menos funciones avanzadas.'],
    evidence: '/img_rivpat/05_paquetes/05_htop_funcionando.png'
  },
  {
    id: 'btop',
    name: 'btop',
    advantages: ['Interfaz más visual y detallada.', 'Muestra información de CPU, memoria, discos, red y procesos.'],
    considerations: ['Puede consumir más recursos.'],
    evidence: '/img_rivpat/05_paquetes/05_alternativa_btop.png'
  },
  {
    id: 'glances',
    name: 'glances',
    advantages: ['Entrega un monitoreo más amplio del sistema.'],
    considerations: ['Requiere más dependencias.'],
    evidence: '/img_rivpat/05_paquetes/05_alternativa_glances.png'
  }
]

function Paquetes() {
  const [selectedTool, setSelectedTool] = useState('htop')
  const activeTool = toolOptions.find((tool) => tool.id === selectedTool)

  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Gestores de paquetes en Ubuntu Server</h2>
        <p className="page-subtitle">
          Utilizar apt para buscar, revisar e instalar herramientas y comparar alternativas según su utilidad y dependencias.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title">Flujo de apt</h3>
        <div className="info-grid">
          {aptFlow.map((stage) => (
            <article className="info-card" key={stage.step}>
              <h4>{stage.title}</h4>
              <pre className="code-block">{stage.command}</pre>
              <p>{stage.explanation}</p>
              <img className="evidence-image" src={stage.image} alt={stage.title} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Comparación de herramientas</h3>
        <div className="tool-selector" role="tablist" aria-label="Herramientas de monitoreo">
          {toolOptions.map((tool) => (
            <button
              key={tool.id}
              type="button"
              className={`tool-button ${selectedTool === tool.id ? 'active' : ''}`}
              onClick={() => setSelectedTool(tool.id)}
            >
              {tool.name}
            </button>
          ))}
        </div>

        <div className="info-grid" style={{ marginTop: '0.8rem' }}>
          <article className="info-card">
            <h4>Ventajas</h4>
            <ul>
              {activeTool.advantages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <h4>Consideraciones</h4>
            <ul>
              {activeTool.considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="image-grid" style={{ marginTop: '0.8rem' }}>
          <img className="evidence-image" src={activeTool.evidence} alt={activeTool.name} />
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Tabla comparativa</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Herramienta</th>
                <th>Ventajas</th>
                <th>Consideración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>htop</td>
                <td>Simple, liviana y fácil de usar.</td>
                <td>Menos funciones avanzadas.</td>
              </tr>
              <tr>
                <td>btop</td>
                <td>Interfaz más visual y detallada.</td>
                <td>Puede consumir más recursos.</td>
              </tr>
              <tr>
                <td>glances</td>
                <td>Monitoreo amplio del sistema.</td>
                <td>Requiere más dependencias.</td>
              </tr>
            </tbody>
          </table>
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
            <li>Se compararon alternativas antes de seleccionar una solución.</li>
          </ul>
        </div>
      </section>
    </section>
  )
}

export default Paquetes
