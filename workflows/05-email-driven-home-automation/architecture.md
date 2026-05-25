# Architecture

## Sequence Diagram

Email
↓
Apps Script
↓
n8n Webhook
↓
IF
↓
HTTP Request
↓
Home Assistant
↓
input_boolean.visa_alert = ON
↓
Automation
↓
Delay
↓
input_boolean.visa_alert = OFF

---

## Components

Producer:
Google Apps Script

Router:
n8n

Consumer:
Home Assistant

Executor:
Automation

---

## State Model

OFF
↓
ON
↓
ACTION
↓
OFF

---

## Ownership

Apps Script:
Event collection

n8n:
Routing

Home Assistant:
State lifecycle