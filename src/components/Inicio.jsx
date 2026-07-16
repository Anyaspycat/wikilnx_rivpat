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

function Inicio() {
  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Wiki de Linux Server</h2>
        <p className="page-subtitle">
          Patricia Riveros Estay · Proyecto de documentación y administración de un servidor Ubuntu Server.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title">Objetivo</h3>
        <p>
          Documentar la instalación, configuración y administración de un servidor Ubuntu Server mediante línea de comandos.
        </p>
        <p>
          Durante el laboratorio se trabajó con una máquina virtual creada en VirtualBox, configurada con red NAT, acceso remoto mediante SSH y publicación de un sitio web utilizando nginx.
        </p>
        <p>
          La documentación se organizó en archivos Markdown y se complementó con capturas de cada procedimiento realizado.
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
        <div className="image-grid">
          <figure>
            <img
              className="evidence-image"
              src="/img_rivpat/01_inicio/VirtualBox_Download.png"
              alt="Descarga de VirtualBox"
            />
            <figcaption>VirtualBox</figcaption>
          </figure>
          <figure>
            <img
              className="evidence-image"
              src="/img_rivpat/01_inicio/Ubuntu_24-04_Download.png"
              alt="Descarga de Ubuntu Server"
            />
            <figcaption>Ubuntu Server 24.04 LTS</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Topología del laboratorio</h3>
        <div className="code-block">
          {`Computador anfitrión
    |
    |-- SSH: localhost:2222
    |          ↓
    |       puerto 22
    |
    |-- Web: localhost:8080
               ↓
            puerto 80

Máquina virtual Ubuntu Server
Red NAT`}
        </div>
        <p>
          La red NAT permite que Ubuntu Server utilice la conexión a internet del computador anfitrión.
        </p>
        <p>
          El reenvío de puertos permite administrar el servidor mediante SSH usando el puerto 2222 y acceder al sitio publicado con nginx usando el puerto 8080.
        </p>
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
    </section>
  )
}

export default Inicio
