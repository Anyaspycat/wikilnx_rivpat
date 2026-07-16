import { useEffect, useMemo, useState } from 'react'

const steps = [
  {
    id: 1,
    title: 'Creación de la máquina virtual',
    summary:
      'Se creó la máquina virtual SRV-WIKI en VirtualBox con Ubuntu Server 24.04 LTS.',
    details:
      'Se asignaron 2048 MB de RAM, 2 procesadores y un disco virtual VDI de 25 GB.',
    commands: [],
    images: [
      {
        src: '/img_rivpat/03_instalacion/03_vm_nombre_iso.png',
        alt: 'Creación de la máquina virtual SRV-WIKI y selección de la ISO',
        title: 'Nombre de la máquina virtual e imagen ISO',
        description:
          'Configuración inicial de SRV-WIKI y selección de Ubuntu Server 24.04 LTS.'
      },
      {
        src: '/img_rivpat/03_instalacion/03_vm_recursos.png',
        alt: 'Configuración de memoria y procesadores de la máquina virtual',
        title: 'Recursos de hardware',
        description:
          'Asignación de 2048 MB de memoria RAM y 2 procesadores virtuales.'
      },
      {
        src: '/img_rivpat/03_instalacion/03_vm_disco.png',
        alt: 'Configuración del disco virtual VDI',
        title: 'Disco virtual',
        description:
          'Creación de un disco virtual VDI con una capacidad de 25 GB.'
      }
    ]
  },
  {
    id: 2,
    title: 'Red NAT y reenvío de puertos',
    summary:
      'El adaptador de red se configuró en modo NAT para permitir acceso a internet y reenvío de puertos.',
    details:
      'Se agregaron las reglas 2222 → 22 para SSH y 8080 → 80 para el sitio web. Durante la instalación, enp0s3 recibió la IP 10.0.2.15/24 por DHCP.',
    commands: [],
    images: [
      {
        src: '/img_rivpat/03_instalacion/03_reenvio_puertos.png',
        alt: 'Reglas de reenvío de puertos en VirtualBox',
        title: 'Reenvío de puertos',
        description:
          'Reglas para conectar localhost:2222 con SSH y localhost:8080 con nginx.'
      },
      {
        src: '/img_rivpat/03_instalacion/03_red_dhcp_instalacion.png',
        alt: 'Configuración de red DHCP durante la instalación de Ubuntu Server',
        title: 'Dirección IP por DHCP',
        description:
          'La interfaz enp0s3 recibió la dirección 10.0.2.15/24 mediante la red NAT.'
      }
    ]
  },
  {
    id: 3,
    title: 'Instalación de Ubuntu Server',
    summary:
      'Durante la instalación se habilitó OpenSSH Server y luego se completó el proceso.',
    details:
      'Después del reinicio, se inició sesión con el usuario inacap para comprobar que el servidor estaba disponible.',
    commands: [],
    images: [
      {
        src: '/img_rivpat/03_instalacion/03_openssh_instalacion.png',
        alt: 'Selección de OpenSSH Server durante la instalación',
        title: 'Instalación de OpenSSH Server',
        description:
          'Activación del servicio OpenSSH para permitir la administración remota.'
      },
      {
        src: '/img_rivpat/03_instalacion/03_instalacion_completa.png',
        alt: 'Pantalla de instalación completa de Ubuntu Server',
        title: 'Instalación completada',
        description:
          'Finalización del proceso de instalación antes de reiniciar la máquina virtual.'
      },
      {
        src: '/img_rivpat/03_instalacion/03_inicio_sesion.png',
        alt: 'Primer inicio de sesión en Ubuntu Server',
        title: 'Primer inicio de sesión',
        description:
          'Ingreso al servidor con el usuario inacap después del reinicio.'
      }
    ]
  },
  {
    id: 4,
    title: 'Conexión SSH',
    summary:
      'Desde Windows se estableció una conexión remota por SSH hacia Ubuntu Server.',
    details:
      'La conexión utilizó el puerto 2222 del computador anfitrión, redirigido al puerto 22 de la máquina virtual.',
    commands: ['ssh -p 2222 inacap@localhost'],
    images: [
      {
        src: '/img_rivpat/03_instalacion/03_conexion_ssh.png',
        alt: 'Conexión SSH desde Windows hacia Ubuntu Server',
        title: 'Acceso remoto mediante SSH',
        description:
          'Conexión exitosa desde Windows utilizando localhost y el puerto 2222.'
      }
    ]
  },
  {
    id: 5,
    title: 'Hostname y dirección IP',
    summary:
      'Se verificaron el nombre del servidor y la dirección IP asignada a la máquina virtual.',
    details:
      'Los comandos hostnamectl e ip a permitieron confirmar el hostname srv-wiki y la IP 10.0.2.15/24.',
    commands: ['hostnamectl', 'ip a'],
    images: [
      {
        src: '/img_rivpat/03_instalacion/03_hostnamectl.png',
        alt: 'Resultado del comando hostnamectl',
        title: 'Verificación del hostname',
        description:
          'El comando hostnamectl confirmó que el nombre del servidor es srv-wiki.'
      },
      {
        src: '/img_rivpat/03_instalacion/03_ip_a.png',
        alt: 'Resultado del comando ip a',
        title: 'Verificación de la dirección IP',
        description:
          'El comando ip a mostró la dirección 10.0.2.15/24 en la interfaz enp0s3.'
      }
    ]
  },
  {
    id: 6,
    title: 'Actualización del sistema',
    summary:
      'Se actualizó la lista de paquetes y se instalaron las actualizaciones disponibles.',
    details:
      'Primero se consultaron los repositorios y luego se actualizaron los paquetes instalados.',
    commands: ['sudo apt update', 'sudo apt upgrade -y'],
    images: [
      {
        src: '/img_rivpat/03_instalacion/03_apt_update.png',
        alt: 'Ejecución del comando sudo apt update',
        title: 'Actualización de repositorios',
        description:
          'Consulta de las versiones disponibles en los repositorios configurados.'
      },
      {
        src: '/img_rivpat/03_instalacion/03_apt_upgrade.png',
        alt: 'Ejecución del comando sudo apt upgrade -y',
        title: 'Actualización de paquetes',
        description:
          'Descarga e instalación de las actualizaciones disponibles para el sistema.'
      }
    ]
  },
  {
    id: 7,
    title: 'Firewall UFW',
    summary:
      'Se activó y configuró el firewall UFW para permitir SSH y tráfico web.',
    details:
      'Se autorizaron OpenSSH y el puerto 80/tcp. Finalmente, se habilitó UFW y se revisó su estado.',
    commands: [
      'sudo ufw allow OpenSSH',
      'sudo ufw allow 80/tcp',
      'sudo ufw enable',
      'sudo ufw status verbose'
    ],
    images: [
      {
        src: '/img_rivpat/03_instalacion/03_ufw_status.png',
        alt: 'Estado y reglas del firewall UFW',
        title: 'Firewall UFW activo',
        description:
          'Validación de las reglas de entrada para OpenSSH y el puerto web 80/tcp.'
      }
    ]
  }
]

function Instalacion() {
  const [openStep, setOpenStep] = useState(1)
  const [visitedSteps, setVisitedSteps] = useState(() => new Set([1]))
  const [selectedImage, setSelectedImage] = useState(null)

  const progress = useMemo(
    () => Math.round((visitedSteps.size / steps.length) * 100),
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

  const selectStep = (stepId) => {
    setOpenStep((currentStep) => (currentStep === stepId ? 0 : stepId))

    setVisitedSteps((currentSteps) => {
      const updatedSteps = new Set(currentSteps)
      updatedSteps.add(stepId)
      return updatedSteps
    })
  }

  const goToAdjacentStep = (direction) => {
    const currentIndex = steps.findIndex((step) => step.id === openStep)
    const nextIndex = currentIndex + direction

    if (nextIndex >= 0 && nextIndex < steps.length) {
      selectStep(steps[nextIndex].id)
    }
  }

  const activeStepIndex = steps.findIndex((step) => step.id === openStep)

  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Instalación y configuración básica</h2>
        <p className="page-subtitle">
          Proceso de creación, configuración y mantenimiento de Ubuntu Server
          dentro de una máquina virtual.
        </p>
      </header>

      <section className="section-card">
        <div className="installation-progress-header">
          <div>
            <h3 className="section-title">Progreso de revisión</h3>
            <p>
              El avance aumenta cuando seleccionas por primera vez cada etapa
              del procedimiento.
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
          aria-label="Progreso de revisión de la instalación"
        >
          <span style={{ width: `${progress}%` }} />
        </div>

        <div className="progress-step-list" aria-label="Etapas revisadas">
          {steps.map((step) => {
            const isVisited = visitedSteps.has(step.id)
            const isActive = openStep === step.id

            return (
              <button
                key={step.id}
                type="button"
                className={`progress-step ${
                  isVisited ? 'visited' : ''
                } ${isActive ? 'active' : ''}`}
                onClick={() => selectStep(step.id)}
                aria-label={`Abrir paso ${step.id}: ${step.title}`}
              >
                <span>{isVisited ? '✓' : step.id}</span>
                <small>{step.title}</small>
              </button>
            )
          })}
        </div>

        <p className="progress-summary">
          {visitedSteps.size} de {steps.length} etapas revisadas.
        </p>
      </section>

      <section className="section-card">
        <h3 className="section-title">Pasos de instalación</h3>

        <div className="installation-step-list">
          {steps.map((step) => {
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
                  onClick={() => selectStep(step.id)}
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

                    {step.commands.length > 0 && (
                      <section className="installation-command-section">
                        <h4>Comandos utilizados</h4>

                        <div className="installation-command-list">
                          {step.commands.map((command) => (
                            <pre className="code-block" key={command}>
                              <code>{command}</code>
                            </pre>
                          ))}
                        </div>
                      </section>
                    )}

                    {step.images.length > 0 && (
                      <section className="installation-evidence-section">
                        <h4>Evidencias del paso</h4>
                        <p className="section-help">
                          Selecciona una captura para verla en pantalla completa.
                        </p>

                        <div className="installation-evidence-stack">
                          {step.images.map((image) => (
                            <figure
                              className="installation-evidence-card"
                              key={image.src}
                            >
                              <button
                                type="button"
                                className="image-preview-button"
                                onClick={() => setSelectedImage(image)}
                                aria-label={`Ampliar captura de ${image.title}`}
                              >
                                <img
                                  className="installation-evidence-image"
                                  src={image.src}
                                  alt={image.alt}
                                />

                                <span
                                  className="image-zoom-hint"
                                  aria-hidden="true"
                                >
                                  Ampliar
                                </span>
                              </button>

                              <figcaption className="installation-evidence-caption">
                                <strong>{image.title}</strong>
                                <span>{image.description}</span>
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      </section>
                    )}

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
                        Paso {activeStepIndex + 1} de {steps.length}
                      </span>

                      <button
                        type="button"
                        className="installation-navigation-button next"
                        onClick={() => goToAdjacentStep(1)}
                        disabled={activeStepIndex === steps.length - 1}
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
        <h3 className="section-title">Resultado final</h3>
        <div className="result-box">
          <ul>
            <li>Ubuntu Server 24.04 LTS instalado en la máquina virtual.</li>
            <li>Hostname srv-wiki configurado.</li>
            <li>Usuario inacap con permisos mediante sudo.</li>
            <li>Red NAT con IP 10.0.2.15/24.</li>
            <li>Acceso remoto por SSH.</li>
            <li>Sistema actualizado y firewall UFW activo.</li>
          </ul>
        </div>
      </section>

      {selectedImage && (
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${selectedImage.title}`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="image-modal-close"
            onClick={() => setSelectedImage(null)}
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

export default Instalacion
