import { useEffect, useState } from 'react'

const permissionTabs = {
  basicos: {
    title: 'Permisos básicos',
    summary:
      'Los permisos se leen en tres grupos: propietario, grupo y otros usuarios.',
    bullets: [
      'El comando ls -l muestra permisos, propietario y grupo.',
      'Los valores r = 4, w = 2 y x = 1 permiten representar permisos de forma numérica.',
      'chmod 600 nota.txt deja lectura y escritura solo para el propietario.',
      'chmod u+x,go-rwx privado otorga ejecución al propietario y elimina permisos del grupo y otros.',
      'chown permite cambiar propietario y grupo.'
    ],
    commands: [
      'ls -l',
      'chmod 600 nota.txt',
      'chmod u+x,go-rwx privado',
      'sudo chown root:root nota.txt'
    ],
    visual: {
      label: '-rw-------',
      owner: 'rw',
      group: '---',
      others: '---'
    }
  },
  especiales: {
    title: 'Permisos especiales',
    summary:
      'Los permisos especiales se reconocen con las letras s y t dentro de la representación simbólica.',
    bullets: [
      'setgid se representa con s y permite que los archivos creados hereden el grupo del directorio.',
      'sticky bit se representa con t y evita que un usuario elimine archivos de otro usuario dentro de un directorio compartido.',
      'ls -ld muestra los permisos del directorio sin listar su contenido.'
    ],
    commands: [
      'sudo mkdir -p /srv/compartido',
      'sudo chmod 2775 /srv/compartido',
      'sudo chmod +t /tmp',
      'ls -ld /srv/compartido /tmp'
    ],
    visual: {
      label: 'drwxrwsr-x',
      owner: 'rwx',
      group: 'rws',
      others: 'r-x'
    }
  }
}

const evidenceImages = [
  {
    src: '/img_rivpat/04_permisos/04_permisos_ls_inicial.png',
    alt: 'Permisos iniciales obtenidos mediante ls -l',
    title: 'Permisos iniciales',
    description:
      'Creación de archivos y directorios, seguida de la revisión de permisos mediante ls -l.'
  },
  {
    src: '/img_rivpat/04_permisos/04_chmod_numerico_simbolico.png',
    alt: 'Modificación de permisos numéricos y simbólicos con chmod',
    title: 'Modificación de permisos con chmod',
    description:
      'Aplicación de chmod 600 y del modo simbólico para ajustar los permisos del propietario, grupo y otros.'
  },
  {
    src: '/img_rivpat/04_permisos/04_chown_propietario_grupo.png',
    alt: 'Cambio de propietario y grupo mediante chown',
    title: 'Cambio de propietario y grupo',
    description:
      'Uso de chown para asignar el archivo al usuario y grupo root, verificando el resultado con ls -l.'
  },
  {
    src: '/img_rivpat/04_permisos/04_permisos_especiales.png',
    alt: 'Aplicación de permisos especiales setgid y sticky bit',
    title: 'Permisos especiales',
    description:
      'Creación de un directorio compartido con setgid y verificación del sticky bit aplicado en /tmp.'
  }
]

function Permisos() {
  const [activeTab, setActiveTab] = useState('basicos')
  const [selectedImage, setSelectedImage] = useState(null)

  const activePermission = permissionTabs[activeTab]

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
        <h2>Gestión de archivos y permisos</h2>
        <p className="page-subtitle">
          Aplicar y verificar permisos básicos y especiales sobre archivos y
          directorios mediante comandos de terminal.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title">Objetivo</h3>
        <p>
          Aplicar y verificar permisos básicos y especiales sobre archivos y
          directorios mediante comandos ejecutados desde la terminal.
        </p>
      </section>

      <section className="section-card">
        <h3 className="section-title permission-section-heading">
          Tipos de permisos
        </h3>

        <div
          className="tab-list permission-tabs"
          role="tablist"
          aria-label="Tipos de permisos"
        >
          {Object.entries(permissionTabs).map(([key, tab]) => (
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

        <article className="permission-panel">
          <header className="permission-panel-header">
            <span className="permission-label">Categoría</span>
            <h4>{activePermission.title}</h4>
          </header>

          <p className="permission-summary">{activePermission.summary}</p>

          <div className="permission-content-grid">
            <section className="permission-detail-block">
              <h5>Características principales</h5>
              <ul className="permission-feature-list">
                {activePermission.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="permission-detail-block">
              <h5>Representación visual</h5>

              <div className="permission-symbolic-value">
                {activePermission.visual.label}
              </div>

              <div className="permission-grid">
                <div className="permission-group permission-owner">
                  <strong>Propietario</strong>
                  <span>{activePermission.visual.owner}</span>
                </div>

                <div className="permission-group permission-group-role">
                  <strong>Grupo</strong>
                  <span>{activePermission.visual.group}</span>
                </div>

                <div className="permission-group permission-others">
                  <strong>Otros</strong>
                  <span>{activePermission.visual.others}</span>
                </div>
              </div>
            </section>
          </div>

          <section className="permission-command-section">
            <h5>Comandos utilizados</h5>

            <div className="permission-command-list">
              {activePermission.commands.map((command) => (
                <pre className="code-block" key={command}>
                  <code>{command}</code>
                </pre>
              ))}
            </div>
          </section>
        </article>
      </section>

      <section className="section-card">
        <h3 className="section-title">Evidencias</h3>
        <p className="section-help">
          Selecciona una captura para verla en pantalla completa.
        </p>

        <div className="permission-evidence-stack">
          {evidenceImages.map((image) => (
            <figure className="permission-evidence-card" key={image.src}>
              <button
                type="button"
                className="image-preview-button"
                onClick={() => setSelectedImage(image)}
                aria-label={`Ampliar captura de ${image.title}`}
              >
                <img
                  className="permission-evidence-image"
                  src={image.src}
                  alt={image.alt}
                />

                <span className="image-zoom-hint" aria-hidden="true">
                  Ampliar
                </span>
              </button>

              <figcaption className="permission-evidence-caption">
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
            <li>Se crearon archivos y directorios desde la terminal.</li>
            <li>Se interpretaron permisos mediante ls -l.</li>
            <li>Se modificaron permisos con chmod.</li>
            <li>Se cambió propietario y grupo mediante chown.</li>
            <li>
              Se aplicaron y verificaron permisos especiales setgid y sticky
              bit.
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

export default Permisos
