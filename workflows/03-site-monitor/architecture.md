# Architecture

## Overview

This workflow performs scheduled health checks against HTTP endpoints and generates structured outputs depending on availability.

---

## Workflow Diagram

Schedule Trigger
↓
HTTP Request
↓
IF (statusCode == 200)
├── Healthy
└── Unhealthy

---

## Components

### Schedule Trigger

Starts execution automatically.

Responsibilities:
- Control cadence
- Trigger workflow

---

### HTTP Request

Collects external endpoint status.

Responsibilities:
- Execute GET request
- Return metadata
- Continue on failure

---

### IF

Evaluates availability condition.

Responsibilities:
- Interpret statusCode
- Route execution

---

### Edit Fields

Produces normalized outputs.

Responsibilities:
- Build operational messages
- Standardize structure

---

## Failure Handling

Default behavior:
HTTP failures interrupt execution.

Configured behavior:
HTTP failures become processable outputs.

---

## Design Notes

Current implementation is stateless.

Future improvements:
- Alerting
- Persistence
- State transitions
- Deduplication