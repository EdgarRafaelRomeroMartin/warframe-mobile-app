# Instrucciones para Agentes de IA - Warframe Mobile Tracker

## Contexto del Proyecto
Esta es una aplicación móvil desarrollada con **React Native**, **Expo** (Expo Router) y **TypeScript** para la materia de Aplicaciones Móviles. Su objetivo es mostrar en tiempo real las Fisuras del Vacío activas consumiendo la API pública de Warframe (`https://api.warframestat.us/pc/fissures`).

## Reglas de Arquitectura y Código
- **Estructura:** Las pantallas principales residen en `src/app/` y los componentes reutilizables en `src/components/`.
- **Imágenes:** Utilizar siempre `expo-image` para renderizar los íconos locales de facciones almacenados en `assets/factions/` (`grineer.png`, `corpus.png`, `infested.png`, `orokin.png`, `default.png`).
- **Estilos:** Mantener una paleta oscura (`#121212` de fondo, `#1e1e1e` para tarjetas y `#00ffcc` como color de acento).
- **Tipado:** Evitar el uso excesivo de `any` cuando se definan interfaces para las respuestas de la API.