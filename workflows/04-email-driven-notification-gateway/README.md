# Workflow 04 — Email Driven Notification Gateway

## Goal

Create an event-driven integration that reacts to incoming Gmail messages and triggers downstream notifications through n8n.

---

## Architecture

Google Apps Script
→ HTTP POST
→ n8n Webhook
→ IF
→ HTTP Request
→ NotifyMe

---

## Concepts Practiced

- Event-driven automation
- Webhooks
- Conditional routing
- HTTP integrations
- Delivery acknowledgment
- Event processing

---

## Components

### Google Apps Script

Responsibilities:

- Search unread emails
- Filter senders
- Send structured payload
- Mark emails as processed

---

### Webhook

Responsibilities:

- Receive event
- Normalize input

---

### IF

Responsibilities:

- Route by sender

---

### HTTP Request

Responsibilities:

- Trigger downstream notification

---

## Payload Example

```json
{
 "from":"alerts@state.gov",
 "subject":"Appointment available",
 "threadId":"abc"
}
```

---

## Reliability Rules

Email is marked as read only when:

HTTP Response == 200

---

## Assumptions

HTTP 200 means:

Request accepted.

HTTP 200 does NOT guarantee:

- Notification delivered
- Notification consumed
- Final action completed

---

## Known Limitations

- No retry
- No persistence
- No dead-letter queue
- No delivery confirmation

---

## Future Improvements

- Correlation ID
- Retry strategy
- Delivery confirmation
- Observability dashboard