# Architecture

## Sequence Diagram

Operational Event
↓
n8n Webhook
↓
Decision Logic
↓
HTTP Request
↓
Action Provider
↓
input_boolean.visa_alert = ON
↓
External Action
↓
Delay
↓
input_boolean.visa_alert = OFF

---

## Components

Producer:
Event ingestion gateway

Router:
n8n

Consumer:
Home Assistant as action provider

Executor:
External action automation

---

## State Model

OFF
↓
ON
↓
ACTION
↓
OFF

---

## Ownership

Event ingestion gateway:
Event collection and normalization

n8n:
Orchestration and routing

Home Assistant:
Provider state lifecycle and action execution
