import { useMemo, useState } from 'react'

const projectData = {
  project: 'wikilnx_rivpat',
  file: '07_prompts_rivpat.md',
  tools: ['ChatGPT', 'GitHub Copilot'],
  objective: 'Apoyo en estructura, redacción, generación inicial y corrección de la documentación y la wiki.'
}

const promptRecords = [
  {
    id: 1,
    tool: 'ChatGPT',
    section: '01_inicio_rivpat.md',
    prompt: 'Necesito un Markdown base para la introducción del trabajo, considerando la instalación de Ubuntu Server en VirtualBox y la topología indicada en la guía.',
    result:
      'Se generó una estructura inicial para documentar el objetivo, las herramientas utilizadas y la topología del laboratorio, la cual fue complementada con capturas y ajustes manuales.'
  },
  {
    id: 2,
    tool: 'ChatGPT',
    section: '02_licencias_rivpat.md',
    prompt:
      'Necesito un Markdown base para el apartado de licencias, utilizando como referencia las capturas de las licencias disponibles en Ubuntu, GPL-3 y Bash.',
    result:
      'Se generó una estructura inicial para explicar software libre, copyleft, licencias permisivas y software propietario, complementada con las evidencias obtenidas desde la máquina virtual.'
  },
  {
    id: 3,
    tool: 'ChatGPT',
    section: '03_instalacion_rivpat.md',
    prompt:
      'Necesito un Markdown para el apartado de instalación y configuración básica de Ubuntu Server, usando como referencia las capturas realizadas durante el laboratorio.',
    result:
      'Se generó una estructura inicial para documentar la máquina virtual, red NAT, SSH, hostname, dirección IP, actualizaciones y firewall, la cual fue resumida y ajustada manualmente.'
  },
  {
    id: 4,
    tool: 'ChatGPT',
    section: '04_permisos_rivpat.md',
    prompt:
      'Necesito un Markdown para el apartado de permisos en Linux, considerando los comandos ls -l, chmod, chown, setgid y sticky bit.',
    result:
      'Se generó una estructura inicial para explicar la lectura y modificación de permisos, propietarios y permisos especiales, complementada con las capturas obtenidas en Ubuntu Server.'
  },
  {
    id: 5,
    tool: 'ChatGPT',
    section: '05_paquetes_rivpat.md',
    prompt:
      'Necesito un Markdown para el apartado de gestores de paquetes, considerando apt search, apt show, apt install y la comparación entre htop, btop y glances.',
    result:
      'Se generó una estructura inicial para documentar el uso de apt y justificar la elección de htop, revisada de acuerdo con los resultados observados en la terminal.'
  },
  {
    id: 6,
    tool: 'ChatGPT',
    section: '06_nginx_rivpat.md',
    prompt:
      'Necesito un Markdown para el apartado de nginx, utilizando las capturas de instalación, estado del servicio, configuración, permisos y publicación del sitio.',
    result:
      'Se generó una estructura inicial para documentar la instalación de nginx, /var/www/wiki, los permisos de www-data y la publicación del portafolio en localhost:8080.'
  },
  {
    id: 7,
    tool: 'GitHub Copilot',
    section: 'App.jsx',
    prompt:
      'Reemplaza el contenido de App.jsx por una wiki básica en React. Importa Inicio, Licencias, Instalacion, Permisos, Paquetes, Nginx y Prompts. Usa useState para controlar la sección activa, una barra lateral, menú móvil y contenido dinámico, sin React Router.',
    result:
      'Se generó la estructura principal de la wiki y la navegación entre las secciones. El código fue revisado y ajustado antes de incorporarlo.'
  },
  {
    id: 8,
    tool: 'GitHub Copilot',
    section: 'App.css',
    prompt:
      'Crea estilos para una wiki académica interactiva y responsiva, utilizando colores pastel, barra lateral, tarjetas, pestañas, tablas, bloques de código, imágenes y menú móvil. No uses estilos en línea.',
    result:
      'Se generó una base visual pastel para la aplicación, la cual fue ajustada posteriormente para mejorar contraste, distribución y comportamiento responsivo.'
  },
  {
    id: 9,
    tool: 'GitHub Copilot',
    section: 'Inicio.jsx',
    prompt:
      'Crea Inicio.jsx usando como base 01_inicio_rivpat.md. Muestra portada, objetivo, resumen, herramientas, topología, áreas de la wiki y resultado esperado. Usa rutas de imágenes desde public/img_rivpat/01_inicio.',
    result:
      'Se generó el componente inicial con la portada y la información general del proyecto. Después se ajustaron el tamaño de las imágenes, la topología y la visualización ampliada.'
  },
  {
    id: 10,
    tool: 'GitHub Copilot',
    section: 'Licencias.jsx',
    prompt:
      'Crea Licencias.jsx usando como base 02_licencias_rivpat.md. Agrega pestañas para copyleft, permisivas y propietarias, una galería de evidencias, relación con las herramientas y resultado final.',
    result:
      'Se generó el componente de licencias. Las pestañas, textos e imágenes fueron reorganizados para mejorar la lectura y la interacción.'
  },
  {
    id: 11,
    tool: 'GitHub Copilot',
    section: 'Instalacion.jsx',
    prompt:
      'Crea Instalacion.jsx usando como base 03_instalacion_rivpat.md. Presenta los pasos mediante un acordeón con comandos, evidencias e indicador de progreso. Usa las imágenes desde public/img_rivpat/03_instalacion.',
    result:
      'Se generó el componente de instalación. Se corrigió el cierre de los pasos y se agregó un progreso basado en las etapas realmente revisadas.'
  },
  {
    id: 12,
    tool: 'GitHub Copilot',
    section: 'Permisos.jsx',
    prompt:
      'Crea Permisos.jsx usando como base 04_permisos_rivpat.md. Separa permisos básicos y especiales mediante pestañas, muestra comandos, representación visual y evidencias.',
    result:
      'Se generó el componente de permisos. Luego se ajustaron las pestañas, la representación de propietario, grupo y otros, y la visualización de las capturas.'
  },
  {
    id: 13,
    tool: 'GitHub Copilot',
    section: 'Paquetes.jsx',
    prompt:
      'Crea Paquetes.jsx usando como base 05_paquetes_rivpat.md. Presenta el flujo search → show → install → comprobar y una comparación interactiva entre htop, btop y glances.',
    result:
      'Se generó el componente de paquetes. El flujo de apt, los botones de herramientas, las imágenes y la tabla comparativa fueron ordenados y mejorados.'
  },
  {
    id: 14,
    tool: 'GitHub Copilot',
    section: 'Nginx.jsx',
    prompt:
      'Crea Nginx.jsx usando como base 06_nginx_rivpat.md. Presenta el despliegue como una línea de tiempo interactiva con pasos, comandos, evidencias y comparación antes/después.',
    result:
      'Se generó el componente de nginx. Después se incorporó progreso acumulado, navegación entre pasos, imágenes ampliables y una comparación visual del resultado.'
  },
  {
    id: 15,
    tool: 'ChatGPT',
    section: '07_prompts_rivpat.md',
    prompt:
      'Necesito ajustar la redacción de lo incluido en 07_prompts_rivpat.md para mostrar la bitácora de IA con los prompts utilizados.',
    result: 'Se ajustó la estructura para representar la bitácora dentro de la wiki'
  },
  {
    id: 16,
    tool: 'GitHub Copilot',
    section: 'Prompts.jsx',
    prompt:
      'Crea el componente React Prompts.jsx usando como base el archivo docs_rivpat/07_prompts_rivpat.md. Convierte el contenido de la bitácora en estructuras de datos JavaScript internas, mostrando los datos generales, un resumen por herramienta, filtros para ChatGPT y GitHub Copilot, un campo de búsqueda, una tabla de registros y la reflexión final. En pantallas pequeñas, muestra los prompts como tarjetas.',
    result:
      'Se generó el componente de bitácora de Inteligencia Artificial, incorporando los datos generales, el conteo de registros, filtros por herramienta, búsqueda de contenido, tabla para escritorio, tarjetas responsivas para dispositivos móviles y la reflexión final.'
  },
  {
    id: 17,
    tool: 'ChatGPT',
    section: 'Revisión visual de componentes',
    prompt:
      'Se solicita corregir problemas puntuales de visualización sin cambiar el contenido: imágenes pequeñas, textos desordenados, pestañas descentradas, pasos que no cierran y tablas poco legibles.',
    result:
      'Se propusieron correcciones específicas sobre los componentes y estilos existentes. Los cambios fueron probados y aplicados de forma progresiva.'
  }
]

const reflection =
  'La inteligencia artificial se utilizó como apoyo para organizar el trabajo, crear estructuras iniciales, resolver dudas puntuales y mejorar la presentación de la documentación. Los comandos del laboratorio fueron ejecutados manualmente en Ubuntu Server y las capturas corresponden a los resultados obtenidos durante el proceso.\n\nLas sugerencias entregadas por ChatGPT y GitHub Copilot no se incorporaron de forma automática. Fue necesario revisar el contenido, corregir rutas, ajustar la extensión de los textos, modificar la navegación y mejorar la visualización de imágenes, pestañas, tablas y pasos interactivos. Esto permitió utilizar ambas herramientas como apoyo, manteniendo la revisión y las decisiones finales dentro del desarrollo del proyecto.'

function Prompts() {
  const [selectedTool, setSelectedTool] = useState('Todas')
  const [searchText, setSearchText] = useState('')

  const filteredRecords = useMemo(() => {
    const query = searchText.trim().toLowerCase()

    return promptRecords.filter((record) => {
      const toolMatch = selectedTool === 'Todas' || record.tool === selectedTool
      const queryMatch =
        !query ||
        [record.section, record.tool, record.prompt, record.result]
          .join(' ')
          .toLowerCase()
          .includes(query)

      return toolMatch && queryMatch
    })
  }, [searchText, selectedTool])

  const totalPrompts = promptRecords.length
  const chatgptCount = promptRecords.filter((record) => record.tool === 'ChatGPT').length
  const copilotCount = promptRecords.filter((record) => record.tool === 'GitHub Copilot').length

  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Bitácora de uso de Inteligencia Artificial</h2>
        <p className="page-subtitle">
          Registro de prompts utilizados para apoyar la documentación y la construcción de la wiki.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title">Datos generales del proyecto</h3>
        <div className="prompt-project-grid">
          <article className="prompt-project-card">
            <h4>Proyecto</h4>
            <p>{projectData.project}</p>
          </article>
          <article className="prompt-project-card">
            <h4>Archivo</h4>
            <p>{projectData.file}</p>
          </article>
          <article className="prompt-project-card">
            <h4>Herramientas utilizadas</h4>
            <p>{projectData.tools.join(' / ')}</p>
          </article>
          <article className="prompt-project-card">
            <h4>Objetivo</h4>
            <p>{projectData.objective}</p>
          </article>
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Resumen</h3>
        <div className="prompt-summary-grid">
          <article className="prompt-summary-card">
            <h4>Total de prompts</h4>
            <p className="prompt-result-count">{totalPrompts}</p>
          </article>
          <article className="prompt-summary-card">
            <h4>ChatGPT</h4>
            <p className="prompt-result-count">{chatgptCount}</p>
          </article>
          <article className="prompt-summary-card">
            <h4>GitHub Copilot</h4>
            <p className="prompt-result-count">{copilotCount}</p>
          </article>
        </div>
      </section>

      <section className="section-card">
        <div className="prompt-filter-bar">
          <div className="prompt-list-heading">
            <h3 className="section-title">Registros</h3>
          </div>
          <div className="prompt-tool-tabs">
            {['Todas', 'ChatGPT', 'GitHub Copilot'].map((tool) => (
              <button
                key={tool}
                type="button"
                className={`filter-button ${selectedTool === tool ? 'active' : ''}`}
                onClick={() => setSelectedTool(tool)}
              >
                {tool}
              </button>
            ))}
          </div>
          <input
            className="prompt-search"
            type="search"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Buscar por sección, herramienta, prompt o resultado"
          />
        </div>

        {filteredRecords.length > 0 ? (
          <>
            <div className="prompts-table-wrapper">
              <table className="prompts-table">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Herramienta</th>
                    <th>Sección</th>
                    <th>Prompt textual utilizado</th>
                    <th>Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((record) => (
                    <tr key={record.id}>
                      <td>
                        <span className="prompt-number">{record.id}</span>
                      </td>
                      <td>
                        <span className="prompt-tool-badge">{record.tool}</span>
                      </td>
                      <td>
                        <code className="prompt-section-code">{record.section}</code>
                      </td>
                      <td>{record.prompt}</td>
                      <td>{record.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="prompts-mobile-list">
              {filteredRecords.map((record) => (
                <article className="prompt-mobile-card" key={record.id}>
                  <div className="prompt-mobile-meta">
                    <span className="prompt-number">{record.id}</span>
                    <span className="prompt-tool-badge">{record.tool}</span>
                  </div>
                  <p>
                    <strong>Sección:</strong> <code className="prompt-section-code">{record.section}</code>
                  </p>
                  <p>
                    <strong>Prompt:</strong> {record.prompt}
                  </p>
                  <p>
                    <strong>Resultado:</strong> {record.result}
                  </p>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="prompt-empty-state">
            <p>No se encontraron registros que coincidan con la búsqueda.</p>
          </div>
        )}
      </section>

      <section className="section-card">
        <h3 className="section-title">Reflexión final</h3>
        <div className="prompt-reflection">
          <p>{reflection}</p>
        </div>
      </section>
    </section>
  )
}

export default Prompts
