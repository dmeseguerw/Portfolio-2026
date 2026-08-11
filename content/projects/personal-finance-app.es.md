---
title: "Aplicación de Finanzas Personales"
slug: "personal-finance-app"
summary: "Una aplicación web de finanzas personales para un solo usuario, para llevar control de gastos, presupuestos y metas de ahorro, con un asesor financiero impulsado por Claude basado en datos reales de gasto."
category: "Full-Stack · Proyecto Personal · 2026"
tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Claude API", "Vitest", "Playwright"]
date: "2026-06-29"
featured: false
coverImage: ""
links:
  - label: "Ver en GitHub"
    url: "https://github.com/dmeseguerw/PersonalFinance"
---

## Resumen

Una aplicación de finanzas personales construida exclusivamente para mi propio uso — para llevar control de en qué se va mi dinero, si estoy cumpliendo un presupuesto, y cómo avanzan mis metas de ahorro, tanto desde escritorio como desde el teléfono. Al ser una aplicación de un solo usuario sin registro público, evita por completo la complejidad de multi-tenencia y en su lugar se optimiza para el flujo de trabajo de una sola persona: captura rápida de gastos, estado del presupuesto de un vistazo, y metas que indican con claridad si vas por buen camino.

La aplicación se planificó y construyó por fases — fundación y autenticación, seguimiento central de cuentas/categorías/transacciones, presupuestos mensuales, metas de ahorro y, finalmente, un dashboard con un asesor financiero de IA — documentando cada fase como una especificación y registrando sus decisiones técnicas clave como ADRs (registros de decisiones de arquitectura) antes de implementarlas.

## Funcionalidades Clave

**Agregar transacciones rápidamente.** Un botón de acción flotante presente en todas las páginas abre una hoja inferior optimizada para móvil — con el monto enfocado automáticamente y teclado numérico, un interruptor de gasto/ingreso, selector de categoría, cuenta y fecha — diseñado para registrar una compra en segundos, justo en el momento en que ocurre.

**Presupuestos con progreso en vivo.** Los presupuestos mensuales por categoría muestran gasto contra límite con una barra de progreso codificada por color (verde → ámbar → rojo) derivada directamente de los datos de transacciones, sin necesidad de conciliación manual.

**Metas de ahorro con estado de "en camino".** Las metas registran un monto objetivo y una fecha límite opcional, y la aplicación calcula la tasa de ahorro mensual requerida y la compara contra el comportamiento reciente para indicar con claridad si una meta va por buen camino.

**Asesor financiero de IA.** Un panel "Ask Claude" envía a la API de Claude un resumen compacto y estructurado del mes — ingresos, gasto por categoría, estado del presupuesto, progreso de metas — y responde preguntas como "¿en qué estoy gastando de más?" con base en esos datos. Las transacciones en bruto nunca se envían al modelo, solo resúmenes agregados.

## Notas Técnicas

Construida con Next.js (App Router) y TypeScript, PostgreSQL a través de Prisma, y NextAuth con un proveedor de credenciales para una única cuenta pre-sembrada — una autenticación deliberadamente simple para una aplicación deliberadamente de un solo usuario, incluyendo una verificación de inicio de sesión resistente a ataques de tiempo para evitar filtrar si un correo existe a través de la latencia de respuesta. Todos los valores monetarios se almacenan como centavos enteros en lugar de números de punto flotante, y todos los modelos usan borrado suave para que el historial financiero nunca se destruya realmente.

El asesor impulsado por Claude corre sobre Claude Sonnet 5, elegido tras evaluarlo frente a un modelo más grande (costo innecesario para una tarea que en esencia es "resumen estructurado entra, consejo específico sale") y uno más pequeño (con riesgo de respuestas genéricas y poco útiles en una función cuyo valor completo radica en la especificidad). Tiene límite de tasa por usuario mediante Upstash Redis, de forma independiente al limitador de inicio de sesión, para acotar el gasto máximo posible en una API facturada personalmente.

Las pruebas abarcan Vitest para pruebas unitarias y de integración, y Playwright para cobertura end-to-end de los flujos principales.
