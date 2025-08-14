# Online Exam System

A secure, scalable, and user‑friendly platform for creating, delivering, and evaluating online examinations. Designed for schools, colleges, coaching institutes, and corporate training.


---

## Overview
The **Online Exam System** enables instructors to build exams from a reusable question bank, schedule and proctor tests securely, and analyze results with detailed insights. Students get a reliable, distraction‑free test experience with autosave, timers, and instant feedback (if enabled).

## Goals
- **Reliability:** Autosave, resume on reconnect, robust timekeeping.
- **Security:** Randomization, proctoring hooks, device/IP limits.
- **Usability:** Clear navigation, flags/notes, accessibility support.
- **Insights:** Question‑wise analytics, difficulty & discrimination metrics.
- **Extensibility:** Modular API, pluggable question types & proctoring.

---

## Screens & Roles

### Roles
- **Admin/Teacher:** Manage exams, questions, students, and reports.
- **Student:** Take exams, review results (if allowed).
- **Proctor/Invigilator (optional):** Monitor live sessions, flag events.

### Core Screens
- **Admin:** Dashboard • Exams • Questions Bank • Students/Groups • Scheduling • Results & Analytics • Settings
- **Student:** My Exams (upcoming/active/past) • Exam Player • Results
- **Proctor:** Live Monitor • Session Logs • Violations

---

## Features

- Create/edit exams with **MCQ (single/multiple)**, **True/False**, **Short Answer**, **Fill‑in‑the‑blank**.
- **Question Bank** with tags (topic, difficulty, marks), import/export (CSV/Excel).
- **Scheduling:** start/end window, duration, grace period, attempts.
- **Randomization:** shuffle questions & options, per‑student variants.
- **Auto‑grading** (objective Qs) + manual grading (subjective Qs).
- **Student management:** bulk import, assign exams to groups.
- **Exam runner:** timer, question navigator, flag for review, autosave.
- **Results:** per‑student scorecard, download as PDF/CSV.

### (For Future)
### Good‑to‑Have
- **Negative marking**, question weights.
- **Section‑wise timing/marks**, per‑question time cap.
- **Practice mode** from question bank.
- **Moderation workflows** for reviewing questions/exams.
- **Notifications:** email/SMS/app for schedules & results.
- **Basic proctoring:** tab‑switch detection, fullscreen lock attempts.

### Advanced
- **AI/Webcam proctoring** (face detection, gaze drift, multiple faces).
- **Adaptive testing** (difficulty changes based on performance).
- **Plagiarism & similarity** checks for subjective answers.
- **LMS integration** (Moodle, Google Classroom) & **SSO** (OAuth/SAML).
- **Multi‑tenant** (institutions), **multi‑language UI**, **offline sync**.

---

**Frontend**: React + Vite 

**Backend**: Python (Flask)

**Database**: PostgreSQL 

**Auth**: JWT + refresh • OAuth2

**Proctoring**: WebRTC + TensorFlow.js/OpenCV hooks (optional)

---

## Security & Anti-Cheating
- Browser lockdown (detect tab switch, copy/paste, fullscreen exit).
- Randomized question/option order, per‑student variants.
- Attempt limits, IP/device logging.
- Optional webcam proctoring (face/multi‑face detection hooks).
- Server‑side timekeeping; autosave and signed payloads to prevent tampering.
- Rate limiting, CSRF protection for web sessions, secure HTTP headers.

---

## Accessibility & i18n
- Keyboard‑navigable UI, ARIA labels, color‑contrast compliant.
- Adjustable font sizes and timer visibility.
- Multi‑language support; store question text in multiple locales.




