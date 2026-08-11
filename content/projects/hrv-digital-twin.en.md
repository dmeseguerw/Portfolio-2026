---
title: "Digital Twin Mobile Health Application for HRV Analysis"
slug: "hrv-digital-twin"
summary: "AI-powered mobile health framework for personalized readiness assessment using Heart Rate Variability and contextual data."
category: "Machine Learning · Master's Thesis · 2024"
tags: ["Python", "Machine Learning", "Flutter", "Mobile Health", "HRV Analysis", "Digital Twin", "DTU CARP Framework", "Polar Verity Sense"]
date: "2024-08-01"
featured: true
coverImage: ""
links:
  - label: "View on GitHub"
    url: "https://github.com/dmeseguerw/master_thesis_hrv"
---

## Overview

This Master's thesis explores how AI and contextual data can make Heart Rate Variability (HRV) monitoring more reliable for real-world health applications. Traditional HRV analysis looks at physiological data alone, but this misses critical context like sleep quality, stress levels, and mood that significantly affect interpretation.

> A digital twin system that combines wearable sensor data with self-reported context to provide personalized daily readiness scores — helping athletes, health enthusiasts, and researchers make better decisions about training and recovery.

Participants wore a Polar Verity Sense sensor and used the DTU CARP Studies App over a 14-day field study, collecting HRV readings and contextual surveys at morning, evening, and workout timepoints. Five machine learning approaches were compared to predict daily readiness scores — a Support Vector Regressor came out on top, and context-enriched features (HRV plus mood, stress, sleep and fatigue) significantly outperformed HRV-alone models.

## Key Results

**Real-world data collection is viable.** Participants completed measurements in natural environments using consumer wearables without lab supervision, and the data was clean enough for ML training.

**HRV patterns matched theory.** Morning readings showed parasympathetic dominance, workouts showed sympathetic dominance, and post-exercise showed a gradual return to baseline.

**Context isn't optional — it's essential.** Mood, fatigue, and perceived recovery added critical information that HRV alone misses.

## Proof-of-Concept Mobile App

A Flutter application demonstrates how these insights translate into something people can use: a readiness score compared against "readiness zones" of similar HRV patterns, and a what-if simulator where users can adjust hypothetical inputs like sleep or stress and see the model's predicted effect on their readiness score — focused on explainable AI rather than black-box predictions.

## Challenges & Lessons

Data synchronization between the app and sensor was finicky, sensor placement mattered more than expected, participant adherence varied over the 14 days, and the small sample size limited generalization.

The big lesson: user experience matters as much as algorithms. Fancy ML is useless if people won't engage with the system — data quality beats data quantity, and health applications need interdisciplinary thinking, not just computer science.

## Future Work

Next steps include larger, longer field studies to capture seasonal patterns; LSTM/GRU networks and uncertainty estimation for better predictions; transfer learning for faster personalization; and interpretability tools like SHAP to explain which factors drive each score.
