import { useState } from 'react'

const steps = [
  {
    id: 1,
    title: 'Creación de la máquina virtual',
    summary: 'Se creó la máquina virtual SRV-WIKI en VirtualBox con Ubuntu Server 24.04 LTS.',
    details: 'Se asignaron 2048 MB de RAM y 2 procesadores, además de un disco virtual VDI de 25 GB.',
    commands: null,
    images: [
      '/img_rivpat/03_instalacion/03_vm_nombre_iso.png',
      '/img_rivpat/03_instalacion/03_vm_recursos.png',
      '/img_rivpat/03_instalacion/03_vm_disco.png'
    ]
  },
  {
    id: 2,
    title: 'Red NAT y reenvío de puertos',
    summary: 'El adaptador de red se configuró en modo NAT para permitir acceso a internet y reenvío de puertos.',
    details: 'Se agregaron las reglas 2222 → 22 para SSH y 8080 → 80 para el sitio web. Durante la instalación, enp0s3 recibió la IP 10.0.2.15/24 por DHCP.',
    commands: null,
    images: [
      '/img_rivpat/03_instalacion/03_reenvio_puertos.png',
      '/img_rivpat/03_instalacion/03_red_dhcp_instalacion.png'
    ]
  },
  {
    id: 3,
    title: 'Instalación de Ubuntu Server',
    summary: 'Durante la instalación se habilitó OpenSSH Server y luego se completó la instalación.',
    details: 'Después del reinicio, se inició sesión con el usuario inacap.',
    commands: null,
    images: [
      '/img_rivpat/03_instalacion/03_openssh_instalacion.png',
      '/img_rivpat/03_instalacion/03_instalacion_completa.png',
      '/img_rivpat/03_instalacion/03_inicio_sesion.png'
    ]
  },
  {
    id: 4,
    title: 'Conexión SSH',
    summary: 'Desde Windows se estableció una conexión remota por SSH.',
    details: 'Se ejecutó el comando ssh -p 2222 inacap@localhost.',
    commands: ['ssh -p 2222 inacap@localhost'],
    images: ['/img_rivpat/03_instalacion/03_conexion_ssh.png']
  },
  {
    id: 5,
    title: 'Hostname y dirección IP',
    summary: 'Se verificaron el hostname y la dirección IP de la máquina virtual.',
    details: 'Se ejecutaron hostnamectl e ip a para confirmar el nombre del host y la IP asignada por DHCP.',
    commands: ['hostnamectl', 'ip a'],
    images: [
      '/img_rivpat/03_instalacion/03_hostnamectl.png',
      '/img_rivpat/03_instalacion/03_ip_a.png'
    ]
  },
  {
    id: 6,
    title: 'Actualización del sistema',
    summary: 'Se actualizó la lista de paquetes y luego las actualizaciones disponibles.',
    details: 'Se ejecutaron sudo apt update y sudo apt upgrade -y.',
    commands: ['sudo apt update', 'sudo apt upgrade -y'],
    images: [
      '/img_rivpat/03_instalacion/03_apt_update.png',
      '/img_rivpat/03_instalacion/03_apt_upgrade.png'
    ]
  },
  {
    id: 7,
    title: 'Firewall UFW',
    summary: 'Se activó y configuró el firewall UFW para permitir SSH y tráfico web.',
    details: 'Se autorizaron OpenSSH y el puerto 80/tcp, luego se habilitó el firewall y se revisó su estado.',
    commands: ['sudo ufw allow OpenSSH', 'sudo ufw allow 80/tcp', 'sudo ufw enable', 'sudo ufw status verbose'],
    images: ['/img_rivpat/03_instalacion/03_ufw_status.png']
  }
]

function Instalacion() {
  const [openStep, setOpenStep] = useState(1)
  const progress = Math.round((openStep / steps.length) * 100)

  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Instalación y configuración básica</h2>
        <p className="page-subtitle">
          Proceso de creación, configuración y mantenimiento de Ubuntu Server en una máquina virtual.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title">Progreso de la instalación</h3>
        <div className="step-list" style={{ gap: '0.6rem' }}>
          <div className="step-card" style={{ background: 'linear-gradient(90deg, #dff7eb 0%, #fdf8ef 100%)' }}>
            <strong>{progress}% completado</strong>
            <p style={{ margin: '0.3rem 0 0' }}>Se muestra el paso actualmente abierto para revisar la instalación paso a paso.</p>
          </div>
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Pasos de instalación</h3>
        <div className="step-list">
          {steps.map((step) => {
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
                    <p>{step.details}</p>

                    {step.commands && (
                      <div>
                        <h4>Comandos</h4>
                        {step.commands.map((command) => (
                          <pre className="code-block" key={command}>{command}</pre>
                        ))}
                      </div>
                    )}

                    {step.images && step.images.length > 0 && (
                      <div className="image-grid">
                        {step.images.map((image) => (
                          <img key={image} className="evidence-image" src={image} alt={step.title} />
                        ))}
                      </div>
                    )}
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
    </section>
  )
}

export default Instalacion
