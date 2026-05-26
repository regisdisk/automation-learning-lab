# Event Contract

Version:
0.1

Status:
Draft

---

## Purpose

Represent business notifications independently of output channel.

---

## Event Structure

event_id

Unique identifier

Example:

evt_20260526_001

---

source

Who generated the event.

Examples:

- gmail
- n8n
- home_assistant

---

event_type

Classification.

Examples:

- email_received
- visa_alert
- automation_failed

---

priority

Allowed:

- low
- medium
- high
- critical

---

title

Short title.

Example:

New email received

---

message

Human-readable content.

Example:

State Department email detected.

---

target_channels

Allowed:

- persistent_notification
- voice
- push
- telegram

---

delivery_mode

Allowed:

- fire_and_forget
- confirm_delivery

---

metadata

Free attributes.

Examples:

sender
timestamp
workflow

---

## Example

{
"event_id":"evt_001",
"source":"gmail",
"event_type":"visa_alert",
"priority":"high",
"title":"Visa Update",
"message":"New email detected",
"target_channels":[
"persistent_notification"
]
}

---

## Non Goals

No business rules.

No delivery implementation.