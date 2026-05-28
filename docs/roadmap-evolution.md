# Roadmap Evolution

The initial roadmap introduced a voice notification layer too early in the learning sequence.

After implementing foundational workflows, the roadmap was revised to prioritize operational concepts before advanced notification channels.

## Target Roadmap

1. 01-health-check
2. 02-webhook-echo
3. 03-site-monitor
4. 04-event-ingestion-gateway
5. 05-event-driven-action-orchestration
6. 06-stateful-alert-management
7. 07-workflow-persistence-layer
8. 08-operational-dashboard-feed
9. 09-voice-notification-layer

## Architectural Rationale

Workflow 04 now represents the operational event ingestion layer. Email remains one possible ingestion channel, but the workflow identity is the gateway pattern: trusted sender validation, payload transformation, event normalization and integration handoff.

Workflow 05 now represents the event-driven action orchestration layer. Home Assistant remains the current action provider, but the workflow identity is event-to-action orchestration, operational triggers and external action execution.

New intermediate phases were added:

- Stateful alert management
- Persistence layer
- Operational dashboard feeds

This change improves the progression from:
automation -> observability -> operational intelligence.
