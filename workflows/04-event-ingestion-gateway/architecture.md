# Architecture

## Sequence

Ingestion Channel
↓
Apps Script
↓
Webhook
↓
Trusted Sender Validation
↓
Payload Transformation
↓
Event Normalization
↓
Integration Gateway
↓
Downstream Provider
↓
HTTP 200
↓
markRead()

---

## Event Contract

Input:

```json
{
 "from":"string",
 "subject":"string",
 "threadId":"string"
}
```

Output:

```json
{
 "status":"accepted"
}
```

---

## Design Decisions

Use webhook ingestion instead of a native Gmail trigger.

Reason:

Lower infrastructure complexity while preserving an integration gateway boundary.

Trade-off:

Less native channel integration.
