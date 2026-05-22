# Workflow 02 — Webhook Echo

## Goal

Build a simple event-driven workflow capable of receiving HTTP requests, transforming payloads and returning structured responses.

---

## Architecture

Webhook
→ Edit Fields
→ Respond to Webhook

---

## Concepts Practiced

- HTTP endpoints
- Event-driven execution
- Data enrichment
- Request/response lifecycle
- Workflow orchestration

---

## Environment

- Oracle Cloud Infrastructure
- Ubuntu 22.04
- Docker
- Docker Compose
- n8n

---

## Input Example

```json
{
 "name":"Regis"
}
```

---

## Output Example

```json
{
 "message":"Received: Regis",
 "received_at":"<timestamp>"
}
```

---

## Lessons Learned

- Webhooks expose behavior through contracts
- Clients can change without changing workflows
- Integration logic should remain isolated
- Responses should be explicit and predictable

---

## Next Steps

Build a scheduled workflow that performs autonomous execution.