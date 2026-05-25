# Assumptions

## Delivery

HTTP 200 means:

Request accepted.

HTTP 200 does not mean:

- Automation executed
- Action completed
- Notification delivered

---

## State

Home Assistant owns state transitions.

n8n only emits events.

---

## Error Handling

Current behavior:

Failure
→ email remains unread
→ retrigger possible