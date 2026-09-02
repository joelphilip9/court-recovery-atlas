# Court Recovery Atlas

A calm, safety-first companion for athletes returning to sport.

**Live app:** https://court-recovery-atlas-app.vercel.app

Created by Joel Philip.

## What it does

- Offers CourtGuide, a bounded conversational guide for soreness, return-to-practice questions, and conversations with a clinician, athletic trainer, or coach.
- Uses a one-minute readiness reflection for energy, comfort moving, and confidence.
- Turns the reflection into explainable **progress carefully**, **repeat**, or **pull back** guidance.
- Escalates red-flag signals such as new swelling or instability instead of trying to solve them in an app.
- Links to educational resources from Mayo Clinic, AAOS, and Mass General Brigham.
- Works entirely in the browser without accounts, uploads, or a health-data backend.

## Important boundary

Court Recovery Atlas is educational support, not medical diagnosis, treatment, or return-to-play clearance. The readiness reflection is not a clinical score. A qualified clinician, athletic trainer, and coach should guide an athlete’s individual return plan.

The current check-in is private to the active browser session; it is not cloud-saved or shared.

## Stack

- Plain HTML, CSS, and JavaScript
- Vercel for static hosting
- No database, account system, or backend

## Run locally

Open `index.html` in a modern browser, or serve the directory with any static web server.

## Roadmap

- Improve accessibility and keyboard support across the check-in flow.
- Add optional local-only trend history with clear controls to export or erase it.
- Expand evidence links and add source-review dates.
- Refine the question prompts with clinician feedback while preserving the safety boundary.

## Privacy

Do not enter private health details into a public device. The project does not request accounts or upload recovery data.
