import { useEffect, useState } from 'react'

const tools = [
  {
    name: 'Ubuntu Server',
    description: 'Sistema operativo del servidor instalado en la máquina virtual.'
  },
  {
    name: 'VirtualBox',
    description: 'Entorno donde se creó y ejecutó la máquina virtual.'
  },
  {
    name: 'SSH',
    description: 'Acceso remoto al servidor desde el computador anfitrión.'
  },
  {
    name: 'nginx',
    description: 'Servidor web utilizado para publicar el sitio.'
  }
]

const wikiAreas = [
  { title: 'Licencias', description: 'Software libre y licencias.' },
  { title: 'Instalación', description: 'Instalación y configuración básica.' },
  { title: 'Permisos', description: 'Gestión de archivos y permisos.' },
  { title: 'Paquetes', description: 'Gestores de paquetes.' },
  { title: 'nginx', description: 'Nginx y despliegue web.' },
  { title: 'Uso de IA', description: 'Bitácora de uso de Inteligencia Artificial.' }
]

const expectedResult = [
  'Ubuntu Server instalado en VirtualBox.',
  'Acceso remoto mediante SSH.',
  'Sistema actualizado y protegido con UFW.',
  'Gestión de archivos, propietarios y permisos.',
  'Uso del gestor de paquetes apt.',
  'Servidor nginx activo.',
  'Sitio web publicado desde la máquina virtual.',
  'Wiki React publicada en GitHub y Vercel.'
]

const toolImages = [
  {
    src: '/img_rivpat/01_inicio/VirtualBox_Download.png',
    alt: 'Página oficial de descarga de VirtualBox',
    title: 'VirtualBox',
    description:
      'Herramienta utilizada para crear y ejecutar la máquina virtual donde se instaló Ubuntu Server.'
  },
  {
    src: '/img_rivpat/01_inicio/Ubuntu_24-04_Download.png',
    alt: 'Página oficial de descarga de Ubuntu Server 24.04 LTS',
    title: 'Ubuntu Server 24.04 LTS',
    description:
      'Sistema operativo utilizado para implementar y administrar el servidor Linux.'
  }
]

function Inicio() {
  const [selectedImage, setSelectedImage] = useState(null)

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

  const openImage = (image) => {
    setSelectedImage(image)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Wiki de Linux Server</h2>
        <p className="page-subtitle">
          Patricia Riveros Estay
          <br/>
          Proyecto de documentación y administración de un servidor Ubuntu Server.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title">Objetivo</h3>
        <p>
          Documentar la instalación, configuración y administración de un
          servidor Ubuntu Server mediante línea de comandos.
        </p>
        <p>
          Durante el laboratorio se trabajó con una máquina virtual creada en
          VirtualBox, configurada con red NAT, acceso remoto mediante SSH y
          publicación de un sitio web utilizando nginx.
        </p>
        <p>
          La documentación se organizó en archivos Markdown y se complementó
          con capturas de cada procedimiento realizado.
        </p>
      </section>

      <section className="section-card">
        <h3 className="section-title">Resumen del proyecto</h3>
        <div className="info-grid">
          {tools.map((tool) => (
            <article className="info-card" key={tool.name}>
              <h4>{tool.name}</h4>
              <p>{tool.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Herramientas utilizadas</h3>
        <p className="section-help">
          Selecciona una captura para verla en pantalla completa.
        </p>

        <div className="tools-stack">
          {toolImages.map((image) => (
            <figure className="tool-evidence-card" key={image.src}>
              <button
                type="button"
                className="image-preview-button"
                onClick={() => openImage(image)}
                aria-label={`Ampliar captura de ${image.title}`}
              >
                <img
                  className="tool-evidence-image"
                  src={image.src}
                  alt={image.alt}
                />
                <span className="image-zoom-hint" aria-hidden="true">
                  Ampliar
                </span>
              </button>

              <figcaption>
                <strong>{image.title}</strong>
                <span>{image.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Topología del laboratorio</h3>

        <div className="topology-diagram">
          <div className="topology-node topology-host">
            <span className="topology-node-label">ANFITRIÓN</span>
            <div className="topology-node-content">
              <span className="topology-symbol" aria-hidden="true">
                PC
              </span>
              <div>
                <strong>Computador con Windows</strong>
                <span>VirtualBox y acceso a navegador/terminal</span>
              </div>
            </div>
          </div>

          <div className="topology-flow" aria-hidden="true">
            <span />
            <strong>Reenvío de puertos</strong>
            <span />
          </div>

          <div className="topology-connections">
            <article className="topology-connection ssh-connection">
              <div className="connection-heading">
                <span className="connection-badge">SSH</span>
                <strong>Administración remota</strong>
              </div>

              <div className="connection-route">
                <code>localhost:2222</code>
                <span className="connection-arrow" aria-hidden="true">
                  ↓
                </span>
                <code>puerto 22</code>
              </div>
            </article>

            <article className="topology-connection web-connection">
              <div className="connection-heading">
                <span className="connection-badge">WEB</span>
                <strong>Sitio publicado</strong>
              </div>

              <div className="connection-route">
                <code>localhost:8080</code>
                <span className="connection-arrow" aria-hidden="true">
                  ↓
                </span>
                <code>puerto 80</code>
              </div>
            </article>
          </div>

          <div className="topology-flow topology-flow-bottom" aria-hidden="true">
            <span />
            <strong>Conexión hacia la VM</strong>
            <span />
          </div>

          <div className="topology-node topology-server">
            <span className="topology-node-label">SERVIDOR</span>
            <div className="topology-node-content">
              <span className="topology-symbol" aria-hidden="true">
                VM
              </span>
              <div>
                <strong>Ubuntu Server · srv-wiki</strong>
                <span>Red NAT · OpenSSH · nginx</span>
              </div>
            </div>
          </div>

          <div className="nat-note">
            <span className="nat-badge">NAT</span>
            <p>
              La máquina virtual utiliza la conexión a internet del computador
              anfitrión para descargar paquetes y actualizaciones.
            </p>
          </div>
        </div>

        <div className="topology-description">
          <p>
            El puerto <strong>2222</strong> del anfitrión se redirige al puerto
            <strong> 22</strong> de Ubuntu para permitir conexiones SSH.
          </p>
          <p>
            El puerto <strong>8080</strong> del anfitrión se redirige al puerto
            <strong> 80</strong> para acceder al sitio publicado con nginx.
          </p>
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Áreas de la wiki</h3>
        <div className="info-grid">
          {wikiAreas.map((area) => (
            <article className="info-card" key={area.title}>
              <h4>{area.title}</h4>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Resultado esperado</h3>
        <div className="result-box">
          <ul>
            {expectedResult.map((item) => (
              <li key={item}>{item}</li>
            ))}
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

export default Inicio
