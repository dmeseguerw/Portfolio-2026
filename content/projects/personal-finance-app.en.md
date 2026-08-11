---
title: "Personal Finance App"
slug: "personal-finance-app"
summary: "A single-user personal finance web app for tracking expenses, budgets, and savings goals, with a Claude-powered financial advisor grounded in real spending data."
category: "Full-Stack · Side Project · 2026"
tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Claude API", "Vitest", "Playwright"]
date: "2026-06-29"
featured: false
coverImage: ""
links:
  - label: "View on GitHub"
    url: "https://github.com/dmeseguerw/PersonalFinance"
---

## Overview

A personal finance app built purely for my own use — tracking where my money goes, whether I'm sticking to a budget, and how my savings goals are progressing, from both desktop and phone. Since it's a single-user app with no public sign-up, it skips multi-tenancy entirely and instead optimizes for the workflow of one person: fast expense capture, at-a-glance budget status, and goals that tell you plainly whether you're on track.

The app was planned and built in phases — foundation and auth, core account/category/transaction tracking, monthly budgets, savings goals, and finally a dashboard with an AI financial advisor — with each phase documented as a spec and its key technical decisions recorded as ADRs (architecture decision records) before implementation.

## Key Features

**Quick-add transactions.** A floating action button on every page opens a mobile-optimized bottom sheet — amount auto-focused with a numeric keypad, expense/income toggle, category picker, account, and date — designed so a purchase can be logged in seconds, right when it happens.

**Budgets with live progress.** Monthly budgets per category show spend-vs-limit with a color-coded progress bar (green → amber → red) derived directly from transaction data, no manual reconciliation needed.

**Savings goals with on-track status.** Goals track a target amount and optional deadline, and the app computes the required monthly savings rate and compares it against recent behavior to say plainly whether a goal is on track.

**AI financial advisor.** A "Ask Claude" panel sends the Claude API a compact, structured summary of the month — income, spend by category, budget status, goal progress — and answers questions like "where am I overspending?" grounded in that data. Raw transactions are never sent to the model, only aggregated summaries.

## Technical Notes

Built with Next.js (App Router) and TypeScript, PostgreSQL via Prisma, and NextAuth with a credentials provider for a single pre-seeded account — deliberately simple auth for a deliberately single-user app, including a timing-safe login check to avoid leaking whether an email exists via response latency. All monetary values are stored as integer cents rather than floats, and every model uses soft deletes so financial history is never actually destroyed.

The Claude-powered advisor runs on Claude Sonnet 5, chosen after weighing it against a larger model (unnecessary cost for a task that's really "structured summary in, specific advice out") and a smaller one (risks generic, unhelpful answers on a feature whose entire value is specificity). It's rate-limited per user via Upstash Redis, separately from the login rate limiter, to bound worst-case API spend on a personally-billed key.

Testing spans Vitest for unit and integration tests and Playwright for end-to-end coverage of the core flows.
