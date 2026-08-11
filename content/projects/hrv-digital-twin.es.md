---
title: "Aplicación Móvil de Salud con Gemelo Digital para Análisis de HRV"
slug: "hrv-digital-twin"
summary: "Framework de salud móvil impulsado por IA para evaluación personalizada de estado de forma usando Variabilidad de la Frecuencia Cardíaca y datos contextuales."
category: "Machine Learning · Tesis de Maestría · 2024"
tags: ["Python", "Machine Learning", "Flutter", "Salud Móvil", "Análisis HRV", "Gemelo Digital", "DTU CARP Framework", "Polar Verity Sense"]
date: "2024-08-01"
featured: true
coverImage: ""
links:
  - label: "Ver en GitHub"
    url: "https://github.com/dmeseguerw/master_thesis_hrv"
---

## Resumen

Esta tesis de maestría explora cómo la IA y los datos contextuales pueden hacer que el monitoreo de la Variabilidad de la Frecuencia Cardíaca (HRV) sea más confiable para aplicaciones de salud en el mundo real. El análisis tradicional de HRV se enfoca únicamente en datos fisiológicos, pero esto omite contexto crítico como la calidad del sueño, los niveles de estrés y el estado de ánimo, que afectan significativamente la interpretación.

> Un sistema de gemelo digital que combina datos de sensores wearables con contexto autoreportado para ofrecer puntuaciones de preparación diaria personalizadas — ayudando a atletas, entusiastas de la salud e investigadores a tomar mejores decisiones sobre entrenamiento y recuperación.

Los participantes usaron un sensor Polar Verity Sense y la aplicación DTU CARP Studies durante un estudio de campo de 14 días, recolectando lecturas de HRV y encuestas contextuales en la mañana, la noche y durante entrenamientos. Se compararon cinco enfoques de machine learning para predecir las puntuaciones de preparación diaria — un Support Vector Regressor obtuvo el mejor desempeño, y las características enriquecidas con contexto (HRV más estado de ánimo, estrés, sueño y fatiga) superaron significativamente a los modelos basados solo en HRV.

## Resultados Clave

**La recolección de datos en el mundo real es viable.** Los participantes completaron las mediciones en entornos naturales usando wearables de consumo sin supervisión de laboratorio, y los datos fueron suficientemente limpios para el entrenamiento de ML.

**Los patrones de HRV coincidieron con la teoría.** Las lecturas matutinas mostraron dominancia parasimpática, los entrenamientos mostraron dominancia simpática, y después del ejercicio hubo un retorno gradual a la línea base.

**El contexto no es opcional — es esencial.** El estado de ánimo, la fatiga y la recuperación percibida agregaron información crítica que el HRV por sí solo no captura.

## Aplicación Móvil de Prueba de Concepto

Una aplicación Flutter demuestra cómo estos hallazgos se traducen en algo que la gente puede usar: una puntuación de preparación comparada contra "zonas de preparación" de patrones de HRV similares, y un simulador de escenarios donde los usuarios pueden ajustar entradas hipotéticas como sueño o estrés y ver el efecto predicho por el modelo en su puntuación de preparación — enfocado en IA explicable en lugar de predicciones de caja negra.

## Desafíos y Aprendizajes

La sincronización de datos entre la aplicación y el sensor fue complicada, la colocación del sensor importó más de lo esperado, la adherencia de los participantes varió durante los 14 días, y el tamaño de muestra pequeño limitó la generalización.

La gran lección: la experiencia de usuario importa tanto como los algoritmos. El ML sofisticado es inútil si la gente no se involucra con el sistema — la calidad de los datos supera a la cantidad, y las aplicaciones de salud requieren pensamiento interdisciplinario, no solo ciencias de la computación.

## Trabajo Futuro

Los próximos pasos incluyen estudios de campo más grandes y prolongados para capturar patrones estacionales; redes LSTM/GRU y estimación de incertidumbre para mejores predicciones; transfer learning para una personalización más rápida; y herramientas de interpretabilidad como SHAP para explicar qué factores impulsan cada puntuación.
