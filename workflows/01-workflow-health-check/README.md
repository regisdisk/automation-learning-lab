# Workflow 01 — Health Check

## Goal

Build a simple workflow to validate endpoint availability and transform raw responses into structured outputs.

---

## Architecture

Manual Trigger
→ HTTP Request
→ Edit Fields
→ IF
→ Output

---

## Concepts Practiced

- Workflow execution
- HTTP integration
- Data transformation
- Conditional routing
- Self-hosted automation

---

## Environment

- Oracle Cloud Infrastructure
- Ubuntu 22.04
- Docker
- Docker Compose
- n8n

---

## Input

Manual execution.

---

## Output Example

```json
{
  "status": "healthy",
  "server_ip": "<redacted>",
  "target": "https://httpbin.org/get"
}
```

---

## Lessons Learned

- Containers are ephemeral
- Volumes preserve state
- Compose describes environments
- Cloud networking impacts accessibility

---

## Next Steps

Create an event-driven workflow using Webhooks.