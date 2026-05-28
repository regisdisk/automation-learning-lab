# Workflow 05 - Event-Driven Action Orchestration

## Goal

Build an event-driven orchestration layer that converts normalized operational events into external actions through a provider boundary.

Home Assistant is the current action provider; the workflow identity is orchestration across provider boundaries.

---

## Problem

Traditional notification flows require user interaction.

Example:

Event
-> Notification
-> User reads notification

This workflow removes manual interaction by converting events into automation triggers.

---

## Architecture

Operational Event
-> n8n Webhook
-> Conditional Routing
-> Action Provider API
-> Provider State
-> External Action Execution
-> State Reset

---
## Detailed Architecture

Detailed deployment and infrastructure diagrams are intentionally excluded from the public repository.

Private assets include:

- OCI topology
- Local Docker configuration
- Internal workflow exports
- Runtime notes

The public version focuses on architecture concepts and reproducible workflow behavior.

---

## Technologies

- Google Apps Script
- Gmail as one ingestion channel
- n8n
- Home Assistant as action provider
- HTTP API

---

## Workflow

1. Receive normalized event
2. Validate orchestration conditions
3. Route event to the selected action provider
4. Trigger Home Assistant
5. Execute external action
6. Reset provider state

---

## Event Example

```json
{
  "from": "alerts@state.gov",
  "subject": "Appointment available",
  "threadId": "abc"
}
```

---

## Action Provider State

Entity:

input_boolean.visa_alert

Lifecycle:

OFF
→ ON
→ External Action
→ OFF

---

## Reliability Strategy

Source messages are marked as processed only after:

HTTP 200 returned by n8n

Current meaning of HTTP 200:

Request accepted

Not guaranteed:

- Final execution
- Delivery confirmation
- End-user consumption

---

## Design Decisions

Decision:
Use Home Assistant as the action provider instead of Virtual Button

Benefits:

- No external paid dependency
- Local action execution
- State visibility
- Extensible architecture

---

## Known Limitations

- No retries
- No persistence
- No dead-letter queue
- No delivery acknowledgment

---

## Future Improvements

- Voice notification provider integration
- Event persistence
- Observability dashboard
- Retry strategy
