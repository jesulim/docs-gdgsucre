---
title: Convenciones para nombrar ramas en Git
description: Una guía completa sobre las mejores prácticas para nombrar ramas en Git.
---

Establecer convenciones claras para nombrar las ramas en Git mejora significativamente la colaboración en equipo y hace que el historial del proyecto sea más comprensible. Esta guía presenta las mejores prácticas para estructurar los nombres de tus ramas.

## ¿Por qué son importantes las convenciones de nombres?

- **Organización**: Facilitan la gestión de múltiples ramas
- **Claridad**: Comunican el propósito de cada rama
- **Automatización**: Permiten integraciones con herramientas CI/CD
- **Trazabilidad**: Conectan las ramas con tickets o issues

## Estructura básica

La mayoría de las convenciones siguen este patrón:

```
tipo/descripcion-breve
```

Donde:
- `tipo`: Categoría del cambio
- `descripcion-breve`: Explicación concisa del contenido

### Ramas de características y correcciones

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `feature/` | Nueva funcionalidad | `feature/login-oauth` |
| `fix/` | Corrección de errores | `fix/header-layout` |
| `hotfix/` | Corrección urgente para producción | `hotfix/security-breach` |
| `bugfix/` | Similar a fix, usado en algunos flujos | `bugfix/form-validation` |
| `release/` | Preparación para una versión | `release/v1.2.0` |
| `docs/` | Cambios en documentación | `docs/api-endpoints` |
| `style/` | Cambios de formato, estilos CSS, etc. | `style/button-colors` |
| `refactor/` | Mejora del código sin cambiar funcionalidad | `refactor/auth-module` |
| `test/` | Añadir o modificar pruebas | `test/cart-integration` |
| `chore/` | Tareas de mantenimiento, dependencias | `chore/update-webpack` |

## Mejores prácticas

1. **Usa guiones medios** para separar palabras en la descripción: `feature/user-authentication`
2. **Usa minúsculas** para todo el nombre: `fix/navbar-collapse`
3. **Sé específico pero conciso**: `feature/admin-dashboard` en lugar de solo `feature/dashboard`
4. **Incluye referencias a issues** cuando sea aplicable: `fix/login-redirect-#123`
5. **Evita nombres demasiado largos**: Mantén las descripciones por debajo de 50 caracteres

## Ejemplos prácticos

```
feature/shopping-cart
fix/checkout-error
docs/api-authentication
hotfix/security-patch-2023
release/v2.5.0
refactor/payment-gateway
```

## Recursos adicionales

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Branching Strategies](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)