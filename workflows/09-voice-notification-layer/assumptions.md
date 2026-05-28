# Assumptions

## Assumption 01

Voice notifications reduce interaction latency.

Status:
Not validated

---

## Assumption 02

Alexa can replace Virtual Button.

Status:
Partially validated

---

## Assumption 03

Notification delivery is observable.

Status:
Unknown

---

## Design Decision

Notification delivery must be channel-independent.

Accepted channels:

- Home Assistant UI
- Voice
- Push
- Messaging

Rejected:

- Channel-coupled orchestration

Reason:

Business events must survive output channel replacement.