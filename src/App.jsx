import { useState } from 'react'
import './App.css'
import Inicio from './components/Inicio'
import Licencias from './components/Licencias'
import Instalacion from './components/Instalacion'
import Permisos from './components/Permisos'
import Paquetes from './components/Paquetes'
import Nginx from './components/Nginx'
import Prompts from './components/Prompts'

const sections = [
  { id: 'inicio', label: 'Inicio', component: Inicio },
  { id: 'licencias', label: 'Licencias', component: Licencias },
  { id: 'instalacion', label: 'Instalación', component: Instalacion },
  { id: 'permisos', label: 'Permisos', component: Permisos },
  { id: 'paquetes', label: 'Paquetes', component: Paquetes },
  { id: 'nginx', label: 'Nginx', component: Nginx },
  { id: 'prompts', label: 'Prompts', component: Prompts }
]

function App() {
  const [activeSection, setActiveSection] = useState(sections[0])
  const [menuOpen, setMenuOpen] = useState(false)

  const ActiveComponent = activeSection.component

  return (
    <div className="wiki-app">
      <aside className={`wiki-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="wiki-brand">Wiki Linux Server</div>
        <nav className="wiki-nav" aria-label="Navegación principal">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`nav-button ${activeSection.id === section.id ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(section)
                setMenuOpen(false)
              }}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="wiki-main">
        <header className="wiki-topbar">
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir o cerrar menú"
          >
            ☰
          </button>
          <h1>{activeSection.label}</h1>
        </header>

        <main className="wiki-content">
          <ActiveComponent />
        </main>

        <footer className="wiki-footer">
          <span>Wiki Linux Server · Patricia Riveros Estay</span>
          <br/>
          <small>Ubuntu Server 24.04 LTS · VirtualBox · SSH · nginx</small>
        </footer>
      </div>
    </div>
  )
}

export default App
