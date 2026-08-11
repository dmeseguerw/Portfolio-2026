---
title: "Mundial AI — Un Analista del Mundial Impulsado por Claude"
slug: "world-cup-ai"
summary: "Un dashboard en Streamlit y un analista de chat con RAG para el Mundial de la FIFA 2026, combinando datos en vivo del torneo con Claude y una base de datos vectorial de la historia del Mundial desde 1930."
category: "Machine Learning · Proyecto Personal · 2026"
tags: ["Python", "Streamlit", "Claude API", "RAG", "ChromaDB", "Sentence Transformers", "football-data.org"]
date: "2026-06-03"
featured: false
coverImage: ""
links:
  - label: "Ver en GitHub"
    url: "https://github.com/dmeseguerw/WorldCupAI"
---

## Resumen

Mundial AI es un dashboard en Streamlit construido alrededor del Mundial de la FIFA 2026 (Estados Unidos, México y Canadá) que combina un seguimiento en vivo del torneo con un analista conversacional. El dashboard muestra las tablas de posiciones en vivo, los partidos del día y los máximos goleadores obtenidos de la API de football-data.org, mientras que un panel de chat "Ask the Analyst" permite hacer preguntas en lenguaje natural — tanto sobre el torneo actual como sobre cualquier Mundial desde 1930.

Lo interesante no es el dashboard en sí, sino cómo el chat responde preguntas apoyándose en dos tipos de datos muy distintos a la vez: datos en vivo obtenidos al momento, y décadas de resultados históricos del Mundial recuperados desde una base de datos vectorial.

## Cómo Funciona

**Datos en vivo.** Un cliente ligero envuelve la API de football-data.org para obtener tablas de posiciones, partidos y goleadores del torneo actual, con caché de corta duración para que el dashboard se mantenga ágil sin saturar la API.

**Pipeline de RAG histórico.** Los datos históricos de partidos, torneos y eventos de jugadores (provenientes de un dataset de Kaggle sobre el Mundial de la FIFA que cubre 1930–2014) se convierten en fragmentos de texto en lenguaje natural — uno por partido, uno por resumen de torneo, uno por evento destacado de jugador (goles, tarjetas, sustituciones) — y se vectorizan con un modelo de `sentence-transformers` dentro de una colección de ChromaDB. Un enrutador en tiempo de consulta detecta si una pregunta menciona un año específico y, de ser así, filtra la recuperación a los fragmentos de partidos y torneo de ese año antes de recurrir a una búsqueda semántica sin restricciones — de modo que una pregunta sobre "la final de 1998" recupera un contexto muy distinto al de "¿quién ha ganado más títulos?".

**El analista.** Tanto el contexto en vivo como los fragmentos históricos recuperados se ensamblan en un único prompt enviado a Claude, con instrucciones de sistema que limitan al modelo a responder únicamente con base en el contexto proporcionado, en lugar de inventar resultados o estadísticas. El resultado es una interfaz de chat capaz de responder tanto "¿qué partidos hay hoy?" como "¿cómo le ha ido históricamente al país anfitrión?" dentro de la misma conversación.

## Stack Tecnológico

Python, Streamlit para la interfaz, la API de Claude (SDK `anthropic`) para el analista, ChromaDB con `sentence-transformers` (`all-MiniLM-L6-v2`) para la recuperación, pandas para el procesamiento de datos, y `kagglehub` para descargar el dataset histórico. El proyecto cuenta con un conjunto de pruebas en pytest que cubre el cliente de la API de fútbol, los formateadores de respuesta y el pipeline de recuperación.

## Por Qué Construir Esto

Fue una oportunidad para construir un sistema de RAG pequeño pero completo de principio a fin — estrategia de fragmentación, filtrado por metadatos, y anclar un modelo de lenguaje en contexto recuperado — alrededor de un dataset (la historia del Mundial) genuinamente divertido de consultar, y sincronizado para lanzarse junto con el torneo real de 2026.
