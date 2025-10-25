---
title: "Unified Data Platform for Social Security Institutions"
summary: "Developed a lightweight on-premise data platform connecting Oracle and DB2 sources, empowering social security institutions with automated, governed insights"
date: "Oct 10 2025"
draft: false
tags:
  - Social Security
  - Data Platform
  - Data Integration
  - Data Virtualization
  - Foreign Data Wrapper
  - PostgreSQL
  - DBT
  - Docker
duration: "3 months"
---

## Project Information
> | 🏛️ Sector | Social Security / Public Administration |  
> | 👤 Client | Swiss IT Service Provider |


## Challenge

Cantonal social security institutions relied on several independent applications whose data resided in separate Oracle and DB2 databases. The institutions had no direct access to their own data and had to manually export information from each application whenever they wanted to perform any kind of analysis — a slow, error-prone process that often took several days before meaningful insights could be produced.

Additionally, the source data models were poorly documented, and each application followed a different and inconsistent database structure, making integration and mapping between systems particularly difficult.

Due to the Information Security and Data Protection (ISDS) framework and internal security regulations, there were strict constraints on the services and tools that could be used within the data pipeline.  
The solution therefore had to remain as lightweight and database-close as possible, using only essential components with minimal external dependencies. Cloud-based services were excluded because of data sensitivity and compliance restrictions.


## Our Solution

SP Technologies designed and implemented an on-premise unified data platform built entirely around PostgreSQL to securely replicate data from all backend databases.

Using Foreign Data Wrappers (FDW) for Oracle and DB2 — extended and optimized at the source-code level — the team virtualized and then materialized data from all systems.

All replication, transformation, and semantic modeling steps were implemented in dbt, chosen for its minimal footprint and command-line operation without any UI or cloud dependency.

As a result, SP Technologies established a fully automated end-to-end data pipeline requiring zero manual intervention and delivered a standardized, governance-compliant reporting layer accessible to all participating institutions.


## Result

The project fundamentally transformed how the cantonal social security institutions access and use their data.  
They now receive fully integrated, up-to-date reports within minutes, automatically generated and securely distributed through the unified platform.

Reporting efficiency improved by over 99 %, eliminating all manual exports and spreadsheet-based work.  
Data delivery became consistent, reliable, and governance-compliant, providing a trusted foundation for cross-system analysis and decision-making.

The unified platform also enabled greater transparency and data ownership for the institutions — empowering them to independently analyze their operational data without relying on third-party exports or IT intervention.

This project set a new internal standard for secure and efficient data integration within the Swiss social security sector.
