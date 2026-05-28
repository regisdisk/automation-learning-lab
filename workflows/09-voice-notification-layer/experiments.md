# Experiments

## Experiment 01

Authenticate Alexa Media Player

Status:
Pending

Expected:

Home Assistant
→ Discover Echo


## Experiment 02

Name:
Home Assistant Public Exposure Review

Status:
Completed

Observed:

- Home Assistant exposed on TCP/8123
- n8n exposed on TCP/5678
- Alexa auth endpoint received unsolicited requests

Evidence:

- External IP requests observed
- HTTP auth warnings in Home Assistant logs

Decision:

Suspend external authentication integrations.

Mitigation:

- Restrict Home Assistant ingress
- Enable MFA
- Revisit voice layer later

Learning:

Automation projects become infrastructure projects earlier than expected.


## Experiment 03

Name:
Home Assistant Exposure Hardening

Status:
Completed

Context:

During Alexa Media Player setup, unexpected authentication requests were detected.

Observed:

- Home Assistant exposed on TCP 8123
- Authentication callback endpoint became reachable externally
- Invalid auth attempts recorded

Actions:

- Reviewed OCI Security List
- Restricted ingress from 0.0.0.0/0 to trusted IP
- Validated external access blocked

Result:

- Home Assistant reachable only from trusted source
- Authentication surface reduced

Decision:

Security validation becomes mandatory before adding external integrations.

Learning:

Infrastructure assumptions must be validated before automation experiments.