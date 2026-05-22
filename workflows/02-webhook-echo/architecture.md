# Architecture

## Workflow Diagram

Webhook
→ Edit Fields
→ Respond to Webhook

---

## Components

### Webhook

Receives external HTTP requests.

Responsibilities:
- Accept payload
- Trigger execution

---

### Edit Fields

Transforms and enriches input.

Responsibilities:
- Extract fields
- Build response contract

---

### Respond to Webhook

Returns HTTP response.

Responsibilities:
- Serialize output
- Complete request lifecycle

---

## Data Flow

Client
↓
POST Request
↓
Webhook
↓
Transformation
↓
Response

---

## Design Decisions

- HTTP chosen for simplicity
- Stateless workflow
- Explicit response model

---

## Limitations

- No persistence
- No authentication
- Test-only endpoint