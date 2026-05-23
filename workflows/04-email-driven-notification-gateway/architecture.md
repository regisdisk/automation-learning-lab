# Architecture

## Sequence

Gmail
↓
Apps Script
↓
Webhook
↓
Filter
↓
NotifyMe
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

Use webhook instead of Gmail Trigger.

Reason:

Lower infrastructure complexity.

Trade-off:

Less native integration.