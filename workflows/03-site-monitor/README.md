# Workflow 03 — Site Monitor

## Goal

Build a scheduled workflow capable of monitoring endpoint availability and generating structured outputs based on health conditions.

---

## Architecture

Schedule Trigger
→ HTTP Request
→ IF
→ Edit Fields (Healthy)
→ Edit Fields (Unhealthy)

---

## Concepts Practiced

- Scheduled execution
- HTTP monitoring
- Conditional routing
- Failure handling
- Stateless workflows

---

## Environment

- Oracle Cloud Infrastructure (OCI)
- Ubuntu 22.04
- Docker
- Docker Compose
- n8n

---

## Input

Scheduled execution.

Example monitored endpoint:

https://httpbin.org/status/200

---

## Output Example (Healthy)

```json
{
 "status":"healthy",
 "message":"Site available"
}
```

---

## Output Example (Unhealthy)

```json
{
 "status":"unhealthy",
 "message":"Site unavailable"
}
```

---

## Lessons Learned

- Monitoring should continue even during failures
- HTTP errors may interrupt execution by default
- "Never Error" enables controlled failure handling
- Detection alone is not observability

---

## Design Decisions

- Schedule frequency: every minute (lab only)
- Stateless monitoring approach
- Explicit success and failure paths

---

## Limitations

- No persistence
- No alert deduplication
- No notification channel
- Generates repeated alerts during extended outages

---

## Next Steps

Add alerting and reduce alert noise.