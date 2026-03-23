# DIRECTIVA: OPTIMIZACION_MOVIL_COMPRESION

> **ID:** 2026-03-23-OPT-MOB
> **Última Actualización:** 2026-03-23
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance
*Optimizar la visualización de la web en dispositivos móviles eliminando el exceso de espacio y el escalado desproporcionado.*
- **Objetivo Principal:** Ajustar tipografía, márgenes y comportamientos de scroll para que las "escenas" (secciones) se vean compactas y fluidas en móviles.
- **Criterio de Éxito:** Las secciones no presentan scrolls horizontales inesperados (fuera del track de Features), los textos son legibles sin ocupar toda la pantalla vertical, y el espaciado es balanceado.

## 2. Especificaciones de Entrada/Salida (I/O)
### Entradas (Inputs)
- **Archivos Fuente:**
  - `src/index.css`: Estilos globales y tokens.
  - `src/components/HeroSection.jsx`: Sección inicial.
  - `src/components/FeaturesSection.jsx`: Sección de desplazamiento horizontal.
  - `src/components/ServicesSection.jsx`: Sección de cuadrícula de servicios.

### Salidas (Outputs)
- **Artefactos Generados:** Código refactorizado con lógica condicional de ancho de pantalla (`window.innerWidth`) y CSS dinámico (`clamp`).

## 3. Flujo Lógico (Algoritmo)

1. **Escalado de Tipografía:** Usar `clamp()` con valores mínimos más reducidos para móviles en clases como `.text-huge` y `.text-large`.
2. **Ajuste de Hero:** Reducir el gap entre líneas de texto y el margen inferior del botón de llamada a la acción.
3. **Compresión de Features:**
   *   Detectar si el ancho es menor a 768px.
   *   Cambiar `flex-direction` a `column` dentro de las slides.
   *   Reducir la altura de las imágenes (`35vh` en lugar de `60vh`).
4. **Optimización de Services:**
   *   Ajustar padding de las tarjetas y tamaño de iconos de Lucide.
   *   Reducir el padding vertical de la sección completa.

## 4. Herramientas y Librerías
- **React / Vite**
- **Framer Motion**: Para animaciones y seguimiento de scroll.
- **Lucide React**: Iconografía.

## 5. Restricciones y Casos Borde (Edge Cases)
- **Scroll Snap:** El scroll snap mandatory puede ser frustrante si una sección es más alta que el viewport. Se recomienda usar `min-height: auto` en móviles si el contenido es denso.
- **Detección de Ancho:** `window.innerWidth` puede no actualizarse si el usuario rota el dispositivo sin refrescar.

## 6. Checklist de Pre-Ejecución (Resumen de cambios realizados)
- [x] Identificar secciones con `min-height: 100vh`.
- [x] Revisar valores de `clamp` en `index.css`.
- [x] Verificar el comportamiento de `Framer Motion` en móviles.

## 7. Checklist Post-Ejecución
- [x] Títulos de la Hero Section no se cortan.
- [x] Imágenes de Features son visibles junto al texto.
- [x] Las tarjetas de servicios tienen padding reducido.
- [x] No hay desbordamiento horizontal global.
