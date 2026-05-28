# Integration Test - Webhook to Action Provider

## Objective

Validate the complete event processing pipeline using a simulated external client.

The goal is to confirm that incoming events trigger the expected Home Assistant action provider behavior.

---

## Test Environment

Source:

PowerShell

Target:

n8n Webhook (Test URL)

Destination:

Home Assistant

---

## Test Case 01 — Positive Flow

### Input

POST:

http://134.65.245.19:5678/webhook-test/email-router

Payload:

```json
{
  "from":"alerts@state.gov",
  "subject":"Visa appointment available",
  "threadId":"lab-test-001",
  "receivedAt":"2026-05-25T21:00:00Z"
}
```

Command:

```powershell
Invoke-RestMethod `
-Uri "http://134.65.245.19:5678/webhook-test/email-router" `
-Method POST `
-ContentType "application/json" `
-Body '{
  "from":"alerts@state.gov",
  "subject":"Visa appointment available",
  "threadId":"lab-test-001",
  "receivedAt":"2026-05-25T21:00:00Z"
}'
```

---

## Expected Result

Webhook:

RECEIVED

↓

IF:

TRUE

↓

HTTP Request:

200

↓

Home Assistant:

input_boolean.visa_alert

OFF
→ ON
→ OFF

---

## Validation Evidence

Checklist:

- [ ] Webhook executed
- [ ] IF followed TRUE branch
- [ ] HTTP Request returned 200
- [ ] Home Assistant entity switched ON
- [ ] Automation executed
- [ ] Entity returned to OFF

---

## Test Case 02 — Negative Routing

### Input

```powershell
Invoke-RestMethod `
-Uri "http://134.65.245.19:5678/webhook-test/email-router" `
-Method POST `
-ContentType "application/json" `
-Body '{
  "from":"spam@test.com",
  "subject":"Ignore",
  "threadId":"lab-test-002"
}'
```

---

## Expected Result

Webhook:

RECEIVED

↓

IF:

FALSE

↓

No action executed

---

## Learning

This validation demonstrated:

- Event ingestion
- Conditional routing
- HTTP integration
- State transition
- Event cleanup
