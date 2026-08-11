---
title: "Mundial AI — A World Cup Analyst Powered by Claude"
slug: "world-cup-ai"
summary: "A Streamlit dashboard and RAG-powered chat analyst for the 2026 FIFA World Cup, combining live tournament data with Claude and a vector database of World Cup history back to 1930."
category: "Machine Learning · Side Project · 2026"
tags: ["Python", "Streamlit", "Claude API", "RAG", "ChromaDB", "Sentence Transformers", "football-data.org"]
date: "2026-06-03"
featured: false
coverImage: ""
links:
  - label: "View on GitHub"
    url: "https://github.com/dmeseguerw/WorldCupAI"
---

## Overview

Mundial AI is a Streamlit dashboard built around the 2026 FIFA World Cup (USA, Mexico, Canada) that pairs a live tournament tracker with a chat-based analyst. The dashboard surfaces live standings, today's matches, and top scorers pulled from the football-data.org API, while a "Ask the Analyst" chat panel lets you ask natural-language questions — both about the current tournament and about any World Cup back to 1930.

The interesting part isn't the dashboard itself, it's how the chat answers questions grounded in two very different kinds of data at once: fresh live data fetched on demand, and decades of historical World Cup results retrieved from a vector database.

## How It Works

**Live data.** A thin client wraps the football-data.org API to fetch standings, matches, and scorers for the current tournament, with short-lived caching so the dashboard stays responsive without hammering the API.

**Historical RAG pipeline.** Historical match, tournament, and player-event data (sourced from a Kaggle FIFA World Cup dataset covering 1930–2014) is turned into natural-language text chunks — one per match, one per tournament summary, one per notable player event (goals, cards, substitutions) — and embedded with a `sentence-transformers` model into a ChromaDB collection. A query-time router detects whether a question mentions a specific year and, if so, filters retrieval to that year's match and tournament chunks before falling back to unrestricted semantic search — so a question about "the 1998 final" pulls markedly different context than "who has won the most titles."

**The analyst.** Both the live context and the retrieved historical chunks are assembled into a single prompt sent to Claude, with a system prompt that constrains the model to answer only from the supplied context rather than inventing scores or statistics. The result is a chat interface that can answer both "what are today's matches?" and "how has the host nation performed historically?" in the same conversation.

## Tech Stack

Python, Streamlit for the UI, the Claude API (`anthropic` SDK) for the analyst, ChromaDB with `sentence-transformers` (`all-MiniLM-L6-v2`) for retrieval, pandas for data wrangling, and `kagglehub` to pull the historical dataset. The project has a pytest suite covering the football API client, response formatters, and the retrieval pipeline.

## Why Build This

It was a chance to build a small but complete RAG system end to end — chunking strategy, metadata filtering, and grounding a language model in retrieved context — around a dataset (World Cup history) that's genuinely fun to query, timed to ship alongside the real 2026 tournament.
