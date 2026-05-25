# Workflow 05 — Email Driven Home Automation

## Goal

Build an event-driven workflow that converts email events into Home Assistant state changes and automated actions.

---

## Problem

Traditional notification flows require user interaction.

Example:

Email
→ Notification
→ User reads notification

This workflow removes manual interaction by converting events into automation triggers.

---

## Architecture

Google Apps Script
→ HTTP POST
→ n8n Webhook
→ Conditional Routing
→ Home Assistant API
→ Helper State
→ Automation

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
- Gmail
- n8n
- Home Assistant
- HTTP API

---

## Workflow

1. Search unread emails
2. Filter allowed senders
3. Send event to n8n
4. Validate conditions
5. Trigger Home Assistant
6. Execute automation
7. Reset helper state

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

## Home Assistant State

Entity:

input_boolean.visa_alert

Lifecycle:

OFF
→ ON
→ Automation
→ OFF

---

## Reliability Strategy

Emails are marked as read only after:

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
Use Home Assistant instead of Virtual Button

Benefits:

- No external paid dependency
- Local automation
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

- Alexa integration
- Event persistence
- Observability dashboard
- Retry strategy