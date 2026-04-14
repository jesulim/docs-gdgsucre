---
title: 🔀 Convenciones para nombrar ramas Git
description: Guía para nombrar ramas Git.
---

Las convenciones para nombrar ramas en Git mejoran la colaboración y hacen el historial más comprensible.

## Estructura básica

```
tipo/descripcion-breve
```

## Tipos de ramas comunes

| Tipo        | Uso                                         |
| ----------- | ------------------------------------------- |
| `feature/`  | Nueva funcionalidad                         |
| `fix/`      | Corrección de errores                       |
| `docs/`     | Cambios en documentación                    |
| `refactor/` | Mejora del código sin cambiar funcionalidad |
| `test/`     | Añadir o modificar pruebas                  |

### Ejemplos

```
feature/shopping-cart
fix/checkout-error
docs/api-docs
```

## Buenas prácticas

1. Usa guiones medios entre palabras: `feature/user-authentication`
2. Usa minúsculas: `fix/navbar-collapse`
3. Sé específico pero breve: `feature/admin-dashboard`
4. Manten tus cambios enfocados, no incluyas varias funcionalidades en una misma rama.

## Pull Requests (PR)

Todas las Pull Requests deben ir dirigidas a la rama main.
