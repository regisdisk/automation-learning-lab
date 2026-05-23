# Troubleshooting — Gmail IMAP with n8n

## Scenario

Attempt to replace Google Apps Script with native Email Trigger.

---

## Environment

- OCI Free Tier
- Docker
- n8n 2.21.5
- Gmail IMAP

---

## Symptoms

Email Trigger returned:

Timed out while connecting to server

---

## Investigation

Validated:

✅ OCI outbound network

✅ DNS

✅ TLS

✅ Container connectivity

Commands executed:

```bash
nc -vz imap.gmail.com 993

openssl s_client -connect imap.gmail.com:993
```

Result:

Connection established.

---

## Conclusion

Issue appears isolated to:

- Email Trigger
- Credential behavior
- IMAP implementation

Infrastructure not identified as root cause.

---

## Decision

Use:

Google Apps Script
→ Webhook

instead of:

Email Trigger

---

## Learning

Always isolate:

Application
↓
Container
↓
OS
↓
Network
↓
External Service