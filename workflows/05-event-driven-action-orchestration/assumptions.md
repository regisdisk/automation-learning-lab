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

The action provider owns state transitions.

n8n owns orchestration and emits provider actions.

---

## Error Handling

Current behavior:

Failure
-> source message remains unprocessed
-> retrigger possible
