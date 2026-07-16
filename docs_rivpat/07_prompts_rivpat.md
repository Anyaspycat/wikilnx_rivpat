# Bitácora de uso de Inteligencia Artificial

## Datos generales

| Elemento | Información |
| --- | --- |
| Proyecto | `wikilnx_rivpat` |
| Archivo | `07_prompts_rivpat.md` |
| Herramientas utilizadas | ChatGPT / GitHub Copilot |
| Objetivo | Apoyo en estructura, redacción, generación inicial y corrección de la documentación y la wiki |

---

## Registro de prompts

| N° | Herramienta | Sección | Prompt textual utilizado | Resultado |
| --- | --- | --- | --- | --- |
| 1 | ChatGPT | `01_inicio_rivpat.md` | Necesito un Markdown base para la introducción del trabajo, considerando la instalación de Ubuntu Server en VirtualBox y la topología indicada en la guía. | Se generó una estructura inicial para documentar el objetivo, las herramientas utilizadas y la topología del laboratorio, la cual fue complementada con capturas y ajustes manuales. |
| 2 | ChatGPT | `02_licencias_rivpat.md` | Necesito un Markdown base para el apartado de licencias, utilizando como referencia las capturas de las licencias disponibles en Ubuntu, GPL-3 y Bash. | Se generó una estructura inicial para explicar software libre, copyleft, licencias permisivas y software propietario, complementada con las evidencias obtenidas desde la máquina virtual. |
| 3 | ChatGPT | `03_instalacion_rivpat.md` | Necesito un Markdown para el apartado de instalación y configuración básica de Ubuntu Server, usando como referencia las capturas realizadas durante el laboratorio. | Se generó una estructura inicial para documentar la máquina virtual, red NAT, SSH, hostname, dirección IP, actualizaciones y firewall, la cual fue resumida y ajustada manualmente. |
| 4 | ChatGPT | `04_permisos_rivpat.md` | Necesito un Markdown para el apartado de permisos en Linux, considerando los comandos `ls -l`, `chmod`, `chown`, setgid y sticky bit. | Se generó una estructura inicial para explicar la lectura y modificación de permisos, propietarios y permisos especiales, complementada con las capturas obtenidas en Ubuntu Server. |
| 5 | ChatGPT | `05_paquetes_rivpat.md` | Necesito un Markdown para el apartado de gestores de paquetes, considerando `apt search`, `apt show`, `apt install` y la comparación entre `htop`, `btop` y `glances`. | Se generó una estructura inicial para documentar el uso de `apt` y justificar la elección de `htop`, revisada de acuerdo con los resultados observados en la terminal. |
| 6 | ChatGPT | `06_nginx_rivpat.md` | Necesito un Markdown para el apartado de nginx, utilizando las capturas de instalación, estado del servicio, configuración, permisos y publicación del sitio. | Se generó una estructura inicial para documentar la instalación de nginx, `/var/www/wiki`, los permisos de `www-data` y la publicación del portafolio en `localhost:8080`. |
| 7 | GitHub Copilot | `App.jsx` | Reemplaza el contenido de `App.jsx` por una wiki básica en React. Importa `Inicio`, `Licencias`, `Instalacion`, `Permisos`, `Paquetes`, `Nginx` y `Prompts`. Usa `useState` para controlar la sección activa, una barra lateral, menú móvil y contenido dinámico, sin React Router. | Se generó la estructura principal de la wiki y la navegación entre las secciones. El código fue revisado y ajustado antes de incorporarlo. |
| 8 | GitHub Copilot | `App.css` | Crea estilos para una wiki académica interactiva y responsiva, utilizando colores pastel, barra lateral, tarjetas, pestañas, tablas, bloques de código, imágenes y menú móvil. No uses estilos en línea. | Se generó una base visual pastel para la aplicación, la cual fue ajustada posteriormente para mejorar contraste, distribución y comportamiento responsivo. |
| 9 | GitHub Copilot | `Inicio.jsx` | Crea `Inicio.jsx` usando como base `01_inicio_rivpat.md`. Muestra portada, objetivo, resumen, herramientas, topología, áreas de la wiki y resultado esperado. Usa rutas de imágenes desde `public/img_rivpat/01_inicio`. | Se generó el componente inicial con la portada y la información general del proyecto. Después se ajustaron el tamaño de las imágenes, la topología y la visualización ampliada. |
| 10 | GitHub Copilot | `Licencias.jsx` | Crea `Licencias.jsx` usando como base `02_licencias_rivpat.md`. Agrega pestañas para copyleft, permisivas y propietarias, una galería de evidencias, relación con las herramientas y resultado final. | Se generó el componente de licencias. Las pestañas, textos e imágenes fueron reorganizados para mejorar la lectura y la interacción. |
| 11 | GitHub Copilot | `Instalacion.jsx` | Crea `Instalacion.jsx` usando como base `03_instalacion_rivpat.md`. Presenta los pasos mediante un acordeón con comandos, evidencias e indicador de progreso. Usa las imágenes desde `public/img_rivpat/03_instalacion`. | Se generó el componente de instalación. Se corrigió el cierre de los pasos y se agregó un progreso basado en las etapas realmente revisadas. |
| 12 | GitHub Copilot | `Permisos.jsx` | Crea `Permisos.jsx` usando como base `04_permisos_rivpat.md`. Separa permisos básicos y especiales mediante pestañas, muestra comandos, representación visual y evidencias. | Se generó el componente de permisos. Luego se ajustaron las pestañas, la representación de propietario, grupo y otros, y la visualización de las capturas. |
| 13 | GitHub Copilot | `Paquetes.jsx` | Crea `Paquetes.jsx` usando como base `05_paquetes_rivpat.md`. Presenta el flujo `search → show → install → comprobar` y una comparación interactiva entre `htop`, `btop` y `glances`. | Se generó el componente de paquetes. El flujo de `apt`, los botones de herramientas, las imágenes y la tabla comparativa fueron ordenados y mejorados. |
| 14 | GitHub Copilot | `Nginx.jsx` | Crea `Nginx.jsx` usando como base `06_nginx_rivpat.md`. Presenta el despliegue como una línea de tiempo interactiva con pasos, comandos, evidencias y comparación antes/después. | Se generó el componente de nginx. Después se incorporó progreso acumulado, navegación entre pasos, imágenes ampliables y una comparación visual del resultado. |
| 15 | ChatGPT | `07_prompts_rivpat.md` | Necesito ajustar la redacción de lo incluido en `07_prompts_rivpat.md` para mostrar la bitácora de IA con los prompts utilizados. | Se ajustó la estructura para representar la bitácora dentro de la wiki |
| 16 | GitHub Copilot | `Prompts.jsx` | Crea el componente React `Prompts.jsx` usando como base el archivo `docs_rivpat/07_prompts_rivpat.md`. Convierte el contenido de la bitácora en estructuras de datos JavaScript internas, mostrando los datos generales, un resumen por herramienta, filtros para ChatGPT y GitHub Copilot, un campo de búsqueda, una tabla de registros y la reflexión final. En pantallas pequeñas, muestra los prompts como tarjetas. | Se generó el componente de bitácora de Inteligencia Artificial, incorporando los datos generales, el conteo de registros, filtros por herramienta, búsqueda de contenido, tabla para escritorio, tarjetas responsivas para dispositivos móviles y la reflexión final. |
| 17 | ChatGPT | Revisión visual de componentes | Se solicita corregir problemas puntuales de visualización sin cambiar el contenido: imágenes pequeñas, textos desordenados, pestañas descentradas, pasos que no cierran y tablas poco legibles. | Se propusieron correcciones específicas sobre los componentes y estilos existentes. Los cambios fueron probados y aplicados de forma progresiva. |

---

## Reflexión final

La inteligencia artificial se utilizó como apoyo para organizar el trabajo, crear estructuras iniciales, resolver dudas puntuales y mejorar la presentación de la documentación. Los comandos del laboratorio fueron ejecutados manualmente en Ubuntu Server y las capturas corresponden a los resultados obtenidos durante el proceso.

Las sugerencias entregadas por ChatGPT y GitHub Copilot no se incorporaron de forma automática. Fue necesario revisar el contenido, corregir rutas, ajustar la extensión de los textos, modificar la navegación y mejorar la visualización de imágenes, pestañas, tablas y pasos interactivos. Esto permitió utilizar ambas herramientas como apoyo, manteniendo la revisión y las decisiones finales dentro del desarrollo del proyecto.
