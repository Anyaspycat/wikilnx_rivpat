import { useState } from 'react'

const permissionTabs = {
  basicos: {
    title: 'Permisos básicos',
    summary: 'Los permisos se leen en tres grupos: propietario, grupo y otros usuarios.',
    bullets: [
      'El comando ls -l muestra permisos, propietario y grupo.',
      'Los valores r = 4, w = 2 y x = 1 permiten representar permisos de forma numérica.',
      'chmod 600 nota.txt deja lectura y escritura solo para el propietario.',
      'chmod u+x,go-rwx privado otorga ejecución al propietario y elimina permisos del grupo y otros.',
      'chown permite cambiar propietario y grupo.'
    ],
    commands: ['ls -l', 'chmod 600 nota.txt', 'chmod u+x,go-rwx privado', 'sudo chown root:root nota.txt'],
    visual: {
      label: 'rw-------',
      owner: 'rw',
      group: '---',
      others: '---'
    }
  },
  especiales: {
    title: 'Permisos especiales',
    summary: 'Los permisos especiales se reconocen con las letras s y t.',
    bullets: [
      'setgid se representa con s y permite que los archivos creados hereden el grupo del directorio.',
      'sticky bit se representa con t y evita que un usuario elimine archivos de otro usuario dentro de un directorio compartido.',
      'ls -ld muestra los permisos del directorio sin listar su contenido.'
    ],
    commands: ['sudo mkdir -p /srv/compartido', 'sudo chmod 2775 /srv/compartido', 'sudo chmod +t /tmp', 'ls -ld /srv/compartido /tmp'],
    visual: {
      label: 'drwxrwsr-x',
      owner: 'rwx',
      group: 'rws',
      others: 'r-x'
    }
  }
}

function Permisos() {
  const [activeTab, setActiveTab] = useState('basicos')
  const activePermission = permissionTabs[activeTab]

  return (
    <section className="wiki-page">
      <header className="page-header">
        <h2>Gestión de archivos y permisos</h2>
        <p className="page-subtitle">
          Aplicar y verificar permisos básicos y especiales sobre archivos y directorios mediante comandos de terminal.
        </p>
      </header>

      <section className="section-card">
        <h3 className="section-title">Objetivo</h3>
        <p>
          Aplicar y verificar permisos básicos y especiales sobre archivos y directorios mediante comandos ejecutados desde la terminal.
        </p>
      </section>

      <section className="section-card">
        <h3 className="section-title">Tipos de permisos</h3>
        <div className="tab-list" role="tablist" aria-label="Tipos de permisos">
          {Object.entries(permissionTabs).map(([key, tab]) => (
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
          <h4>{activePermission.title}</h4>
          <p>{activePermission.summary}</p>
          <ul>
            {activePermission.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="permission-grid">
            <div className="permission-group">
              <strong>Propietario</strong>
              <span>{activePermission.visual.owner}</span>
            </div>
            <div className="permission-group">
              <strong>Grupo</strong>
              <span>{activePermission.visual.group}</span>
            </div>
            <div className="permission-group">
              <strong>Otros</strong>
              <span>{activePermission.visual.others}</span>
            </div>
          </div>

          <p style={{ marginTop: '0.8rem', fontWeight: 600 }}>{activePermission.visual.label}</p>

          <h5>Comandos</h5>
          {activePermission.commands.map((command) => (
            <pre className="code-block" key={command}>{command}</pre>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3 className="section-title">Evidencias</h3>
        <div className="image-grid">
          <figure>
            <img
              className="evidence-image"
              src="/img_rivpat/04_permisos/04_permisos_ls_inicial.png"
              alt="Permisos iniciales"
            />
            <figcaption>Permisos iniciales con ls -l</figcaption>
          </figure>
          <figure>
            <img
              className="evidence-image"
              src="/img_rivpat/04_permisos/04_chmod_numerico_simbolico.png"
              alt="Modificación de permisos"
            />
            <figcaption>Modificación de permisos con chmod</figcaption>
          </figure>
          <figure>
            <img
              className="evidence-image"
              src="/img_rivpat/04_permisos/04_chown_propietario_grupo.png"
              alt="Cambio de propietario y grupo"
            />
            <figcaption>Cambio de propietario y grupo con chown</figcaption>
          </figure>
          <figure>
            <img
              className="evidence-image"
              src="/img_rivpat/04_permisos/04_permisos_especiales.png"
              alt="Permisos especiales"
            />
            <figcaption>Permisos especiales setgid y sticky bit</figcaption>
          </figure>
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
            <li>Se aplicaron y verificaron permisos especiales setgid y sticky bit.</li>
          </ul>
        </div>
      </section>
    </section>
  )
}

export default Permisos
