# Wiki Linux Server

Wiki interactiva desarrollada en React para documentar la instalación, configuración y administración básica de un servidor Ubuntu Server dentro de una máquina virtual.

## Publicación

La aplicación fue publicada mediante Vercel.

Cada vez que se actualiza la rama conectada al proyecto, Vercel puede generar automáticamente una nueva versión del sitio.

Publicación actual: **[https://wikilnx-rivpat.vercel.app/](https://wikilnx-rivpat.vercel.app/)**

## Descripción del proyecto

El proyecto presenta de forma ordenada e interactiva las actividades realizadas durante el laboratorio de Linux Server.

La documentación incluye procedimientos, comandos, explicaciones y evidencias obtenidas directamente desde la máquina virtual utilizada durante el desarrollo.

## Contenidos

La wiki se encuentra organizada en las siguientes secciones:

- **Inicio:** presentación, objetivo, herramientas y topología del laboratorio.
- **Licencias:** software libre, copyleft, licencias permisivas y software propietario.
- **Instalación:** creación de la máquina virtual y configuración inicial de Ubuntu Server.
- **Permisos:** propietarios, grupos, permisos básicos y permisos especiales.
- **Paquetes:** búsqueda, revisión, instalación y comprobación de paquetes mediante `apt`.
- **Nginx:** instalación, configuración y publicación del sitio web.
- **Prompts:** bitácora del apoyo utilizado mediante ChatGPT y GitHub Copilot.

## Funcionalidades

- Navegación entre secciones sin recargar la página.
- Diseño responsivo para escritorio y dispositivos móviles.
- Estilo visual pastel y kawaii.
- Visualización ampliada de capturas.
- Pasos interactivos mediante acordeones.
- Indicadores de progreso en los procedimientos.
- Comparaciones de herramientas y resultados.
- Filtros y búsqueda dentro de la bitácora de Inteligencia Artificial.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- Markdown
- Git y GitHub
- Vercel
- VirtualBox
- Ubuntu Server
- SSH
- Nginx

## Estructura general

```text
wikilnx_rivpat/
├── docs_rivpat/
│   ├── 01_inicio_rivpat.md
│   ├── 02_licencias_rivpat.md
│   ├── 03_instalacion_rivpat.md
│   ├── 04_permisos_rivpat.md
│   ├── 05_paquetes_rivpat.md
│   ├── 06_nginx_rivpat.md
│   ├── 07_prompts_rivpat.md
│   └── img_rivpat/
├── public/
│   └── img_rivpat/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Inicio.jsx
│   │   ├── Licencias.jsx
│   │   ├── Instalacion.jsx
│   │   ├── Permisos.jsx
│   │   ├── Paquetes.jsx
│   │   ├── Nginx.jsx
│   │   └── Prompts.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## Requisitos para ejecutar el proyecto

Antes de comenzar, se debe tener instalado:

- Git
- Node.js
- npm

## Tutorial de clonación y ejecución

### 1. Copiar la URL del repositorio

Dentro de GitHub, presiona el botón **Code** y copia la dirección disponible en la pestaña **HTTPS**.

### 2. Clonar el repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/USUARIO/wikilnx_rivpat.git
```

### 3. Ingresar a la carpeta del proyecto

```bash
cd wikilnx_rivpat
```

### 4. Instalar las dependencias

```bash
npm install
```

### 5. Ejecutar el proyecto en modo desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal una dirección local similar a:

```text
http://localhost:5173/
```

Abre esa dirección desde el navegador.

## Generar una versión de producción

Para generar los archivos optimizados:

```bash
npm run build
```

El resultado será almacenado en la carpeta:

```text
dist/
```

Para revisar localmente la compilación:

```bash
npm run preview
```

## Documentación

Además de la aplicación React, el repositorio contiene archivos Markdown con el detalle de cada actividad realizada.

Estos documentos permiten revisar:

- Comandos utilizados.
- Explicaciones de cada procedimiento.
- Resultados obtenidos.
- Evidencias del laboratorio.
- Registro del uso de Inteligencia Artificial.

## Uso de Inteligencia Artificial

ChatGPT y GitHub Copilot fueron utilizados como herramientas de apoyo para organizar contenido, crear estructuras iniciales y corregir aspectos puntuales del proyecto.

Los procedimientos de Linux, comandos y validaciones fueron realizados manualmente, y las sugerencias generadas fueron revisadas antes de su incorporación.

## Autora

**Patricia Riveros Estay**

Proyecto académico de documentación y administración de Linux Server.
