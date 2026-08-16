# 30-day technical arc

This is a direction, not a contract. The exact idea for a day can change if a better experiment appears, but the difficulty should keep moving downward through the stack.

## Days 01–05 — Interaction quality

Build small, highly legible interactions: gestures, transitions, keyboard behavior, haptics, spring systems, and state-driven motion. The objective is polish, not screen count.

## Days 06–10 — Graphics and physics

Move beyond standard view composition. Explore Skia, particles, shader-like effects, physical simulations, spatial interfaces, and custom rendering. Start making performance constraints visible.

## Days 11–15 — Camera and on-device intelligence

Introduce real-time camera work, frame processing, overlays, tracking, segmentation, or lightweight on-device ML. The interesting part should happen locally whenever practical.

## Days 16–20 — Performance engineering

Deliberately create difficult workloads, profile them, identify the bottleneck, and show the fix. Focus on frame time, virtualization, startup, memory, rendering, and reproducible benchmarks.

## Days 21–25 — Native boundaries

Write Swift and Kotlin. Expose platform APIs through typed React Native interfaces, create native views where appropriate, and learn what should stay native versus cross-platform.

## Days 26–29 — JSI, Nitro, C++, open source

Move hot paths below the bridge, experiment with JSI/Nitro-style bindings and C++, and turn at least one useful result into a contribution to an existing open-source project.

## Day 30 — Integration

Build one final demo that combines several layers of the challenge — polished interaction, real-time work, performance constraints, and native code — without hiding the engineering behind a video edit.

## Selection test for every idea

Before committing to a day, ask:

1. Can the interesting behavior be understood in three seconds?
2. Is there a real engineering problem underneath the visual?
3. Can the result be demonstrated on-device?
4. Will the source teach something that the video cannot?
5. Does it move the challenge forward instead of repeating an earlier day?

If the answer to several of these is no, choose a stronger experiment.
