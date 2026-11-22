# Especificación Técnica - Warframe Mobile Tracker (Fase 1)

## 1. Objetivo del Proyecto
Desarrollar una aplicación móvil multiplataforma en React Native y Expo que permita a los jugadores de Warframe monitorear en tiempo real las misiones de **Fisuras del Vacío** activas, identificando el nivel de reliquia, tipo de misión, nodo planetario, tiempo restante y la facción enemiga correspondiente.

## 2. Arquitectura y Stack Tecnológico
- **Framework:** React Native con Expo SDK y Expo Router (`src/app/index.tsx`).
- **Lenguaje:** TypeScript (`.tsx`).
- **Manejo de Estado y Ciclo de Vida:** Hooks nativos (`useState` y `useEffect`) con control de limpieza (`cancelled`) para evitar fugas de memoria en peticiones asíncronas.
- **Renderizado de Recursos:** `expo-image` para la carga optimizada de sprites locales organizados en `assets/factions/`.

## 3. Consumo de API Externa
- **Endpoint principal:** `https://api.warframestat.us/pc/fissures`
- **Método:** `GET` mediante la API nativa `fetch`.
- **Datos extraídos:** `id`, `tier` (Lith, Meso, Neo, Axi, Requiem), `missionType`, `node`, `enemy` y `eta`.

## 4. Desarrollo Asistido por IA
Se configuró el entorno de Visual Studio Code mediante el archivo `AGENTS.md` para guiar al asistente integrado en el editor durante la estructuración de componentes, manejo de tipado en TypeScript y depuración de rutas de activos locales.