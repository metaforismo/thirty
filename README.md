# THIRTY

**30 days. 30 experiments. One public attempt to push React Native further every day.**

THIRTY is a build-in-public engineering challenge focused on the parts of React Native that are easiest to talk about and hardest to execute well: interaction quality, animation, graphics, camera, performance, native APIs, JSI, and eventually C++.

The goal is not to ship thirty disconnected toy apps. The goal is to build a coherent body of work where every experiment is inspectable, runnable, documented, and better engineered than the one before it.

> **Current progress: 0 / 30** — foundation ready; Day 01 is next.

## The rules

1. **Ship something visible every day.** A stranger should understand the interesting part from a short demo.
2. **Keep the source public.** The implementation lives here, not behind a polished video.
3. **Measure when performance is the claim.** FPS, frame time, memory, startup cost, throughput, or another relevant metric.
4. **Go below JavaScript when the problem calls for it.** Swift, Kotlin, JSI/Nitro, and C++ are part of the challenge.
5. **Document the lesson.** Every day should leave behind a reusable idea, primitive, benchmark, or write-up.
6. **Prefer depth over novelty theater.** A small interaction with excellent engineering beats a large app held together by shortcuts.

## Progress

| Day | Experiment | Focus | Status |
| ---: | --- | --- | :---: |
| 01 | — | Interaction | ⬜ |
| 02 | — | Interaction | ⬜ |
| 03 | — | Animation | ⬜ |
| 04 | — | Animation | ⬜ |
| 05 | — | Motion / haptics | ⬜ |
| 06 | — | Skia / graphics | ⬜ |
| 07 | — | Physics | ⬜ |
| 08 | — | Graphics | ⬜ |
| 09 | — | 3D / spatial UI | ⬜ |
| 10 | — | Rendering | ⬜ |
| 11 | — | Camera | ⬜ |
| 12 | — | Vision | ⬜ |
| 13 | — | On-device ML | ⬜ |
| 14 | — | Real-time processing | ⬜ |
| 15 | — | Camera + UI | ⬜ |
| 16 | — | Profiling | ⬜ |
| 17 | — | Lists / virtualization | ⬜ |
| 18 | — | Startup / memory | ⬜ |
| 19 | — | Rendering performance | ⬜ |
| 20 | — | Benchmarking | ⬜ |
| 21 | — | Swift | ⬜ |
| 22 | — | Kotlin | ⬜ |
| 23 | — | Native views | ⬜ |
| 24 | — | Native modules | ⬜ |
| 25 | — | Cross-platform native API | ⬜ |
| 26 | — | JSI / Nitro | ⬜ |
| 27 | — | C++ | ⬜ |
| 28 | — | Open source | ⬜ |
| 29 | — | Integration | ⬜ |
| 30 | — | Final build | ⬜ |

The themes are deliberate; the exact experiments are allowed to change. See [`docs/ROADMAP.md`](docs/ROADMAP.md) for the technical arc.

## Technical direction

The challenge starts with a fast Expo + React Native iteration loop and progressively moves closer to the platform:

```text
React / TypeScript
        ↓
Expo + React Native
        ↓
Reanimated / Skia / VisionCamera
        ↓
Swift + Kotlin
        ↓
JSI / Nitro
        ↓
C++
```

Expo is the shell, not the ceiling.

The showcase currently tracks **Expo SDK 57 / React Native 0.86**, with native code introduced only when an experiment benefits from it.

## Repository layout

```text
thirty/
├── apps/
│   └── showcase/          # One app that exposes every shipped experiment
├── packages/
│   ├── experiments/       # Daily experiments + registry
│   └── ui/                # Reusable primitives that survive multiple days
├── modules/               # Swift, Kotlin, Expo Modules, JSI/Nitro, C++
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DAY_TEMPLATE.md
│   └── ROADMAP.md
└── .github/
    ├── pull_request_template.md
    └── workflows/ci.yml
```

The repository intentionally has **one canonical showcase app**. Experiments stay here while they are part of the challenge. If one grows into a useful standalone library, it can graduate into its own repository/package later.

## Run it

Requirements: Node.js 22+ and pnpm.

```bash
git clone https://github.com/metaforismo/thirty.git
cd thirty
pnpm install
pnpm start
```

Then launch the showcase on the platform you care about:

```bash
pnpm ios
pnpm android
pnpm web
```

Some later experiments will require a development build or native project generation. Their day notes will call that out explicitly.

## Quality bar

A day is considered shipped when the interesting behavior works on a real target, the code is readable enough to review, and the claim in the demo can be defended.

For performance-oriented days, a before/after video without measurements is not enough. For native days, a JavaScript wrapper without understanding the platform boundary is not enough. For visual days, "technically works" is not enough.

The standard is simple: **make the demo shareable and the repository worth opening after watching it.**

## Stack

React Native · Expo · TypeScript · Reanimated · Skia · VisionCamera · Swift · Kotlin · JSI/Nitro · C++

Not every technology is installed on Day 0. Dependencies are added when an experiment actually needs them so the repository records the progression honestly.

## License

MIT © 2026 Francesco Giannicola.
