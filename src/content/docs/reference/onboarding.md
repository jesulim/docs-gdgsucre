---
title: 🚀 Bienvenido a GDG Sucre Landing Page
description: Guía para nuevos contribuidores al proyecto GDG Sucre Landing Page.
---

Este documento te guiará en el proceso de configuración, estructura del proyecto y mejores prácticas para contribuir a este repositorio. 

---

## 📌 Tecnologías Utilizadas

El proyecto está construido con las siguientes tecnologías:

- **[AstroJS](https://astro.build/)** - Framework ligero para sitios estáticos y optimizados.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario.
- **[Vercel](https://vercel.com/)** - Plataforma de despliegue y hosting.
- **[PNPM](https://pnpm.io/)** - Gestor de paquetes rápido y eficiente.
- **[Storybook](https://storybook.js.org/)** - Herramienta para documentar y probar componentes de UI.

---

## 📁 Estructura del Proyecto

El repositorio sigue una estructura organizada en un **monorepo** con la siguiente distribución:

```
gdgsucre-landing/
│── apps/                     # Aplicaciones individuales
│   ├── general-landing/      # Landing principal de la comunidad
│   ├── iwd-2025/             # Landing del evento IWD 2025
│   ├── io-extended-2025/     # Landing del evento I/O Extended 2025
│   ├── devfest-2025/         # Landing del evento DevFest 2025
│── packages/                 # Módulos compartidos
│   ├── ui/                   # Componentes reutilizables (Botones, Navbar, etc.)
│   ├── registration/         # Formulario de registro reutilizable
│   ├── attendance/           # Módulo de control de asistencia
│── configs/                  # Configuraciones compartidas (ESLint, Tailwind, etc.)
│── .github/                  # CI/CD Config (Despliegue en Vercel)
│── package.json              # Configuración del monorepo con workspaces
│── turbo.json                # Configuración de Turborepo
│── README.md                 # Documentación general del proyecto
```

---

## 🛠️ Configuración Inicial

Para empezar a trabajar en el proyecto, sigue estos pasos:

### 1️⃣ Clona el Repositorio
```sh
git clone https://github.com/gdgsucre/gdgsucre-landing.git
cd gdgsucre-landing
```

### 2️⃣ Instala las Dependencias
Usamos **PNPM** para manejar las dependencias:
```sh
pnpm install
```

### 3️⃣ Ejecuta el Proyecto en Local
Para correr la versión en desarrollo:
```sh
pnpm dev
```
El sitio estará disponible en `http://localhost:3000`

### 4️⃣ Ejecuta Storybook (Opcional)
Si quieres visualizar los componentes de UI:
```sh
pnpm storybook
```

---

## 📢 Cómo Contribuir

Si deseas contribuir al proyecto:

1. **Crea un issue** en GitHub si encuentras un problema o tienes una sugerencia.
2. **Crea una rama nueva** siguiendo la convención mencionada.
3. **Haz tus cambios y sube un PR (Pull Request)**.
4. **Espera revisión y aprobación** antes de hacer merge.

---

## 🚀 Despliegue

Cada rama principal (`main`) se despliega automáticamente en **Vercel**. También puedes probar localmente los builds de producción con:
```sh
pnpm build
```
Esto generará los archivos en `dist/` listos para producción.

---

## ❓ Preguntas Frecuentes

**📌 No sé mucho sobre AstroJS, ¿puedo contribuir?**
Sí, el proyecto está diseñado para que cualquier persona pueda aprender y aportar. Puedes empezar con documentación, corrección de errores o mejorar estilos en Tailwind CSS.

**📌 ¿Cómo puedo sugerir una nueva funcionalidad?**
Crea un **issue** en GitHub explicando tu idea y discútela con el equipo.

**📌 ¿Qué hago si mi código rompe algo?**
Usa `git checkout` para volver a una versión estable y solicita ayuda en Discord o GitHub Discussions.

---

🎉 ¡Gracias por tu interés en contribuir a GDG Sucre Landing Page! Si tienes dudas, pregunta en nuestro canal de comunicación. 🚀