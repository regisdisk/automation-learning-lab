# Workflow 04 - Event Ingestion Gateway

## Goal

Create an operational event ingestion layer that validates trusted senders, transforms incoming payloads and normalizes events for downstream integration through n8n.

Email is one possible ingestion channel in this workflow. It is not the architectural identity of the workflow.

---

## Architecture

Ingestion Channel
-> Google Apps Script
-> HTTP POST
-> n8n Webhook
-> Sender Validation
-> Event Normalization
-> Integration Gateway
-> Downstream Notification Provider

---

## Concepts Practiced

- Trusted sender validation
- Event ingestion
- Payload transformation
- Event normalization
- Integration gateway behavior
- Webhooks
- Conditional routing
- Delivery acknowledgment
- Event processing

---

## Components

### Google Apps Script

Responsibilities:

- Search unread events from the email ingestion channel
- Filter senders
- Send structured payload
- Mark source messages as processed

---

### Webhook

Responsibilities:

- Receive ingestion events
- Normalize source payloads

---

### Sender Validation

Responsibilities:

- Validate trusted senders
- Reject untrusted event sources

---

### Integration Gateway

Responsibilities:

- Trigger downstream notification providers
- Preserve channel-independent event shape

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

Source email is marked as read only when:

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
