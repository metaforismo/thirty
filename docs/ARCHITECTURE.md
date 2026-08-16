# Architecture

THIRTY is intentionally a monorepo with one runnable showcase application.

## Principles

### One app, many experiments

`apps/showcase` owns navigation, presentation, and the public gallery. Daily experiments should not create thirty duplicated Expo applications.

### Experiments are code, not screenshots

Reusable experiment implementations live in `packages/experiments`. The showcase imports them through the workspace package. This keeps each day easy to discover while allowing code to be reused later.

### Primitives graduate to `packages/ui`

If a component becomes useful in more than one experiment, move it out of the day implementation and into `packages/ui`. This prevents copy/paste from becoming the architecture.

### Native work has a clear boundary

Swift, Kotlin, Expo Modules, JSI/Nitro, and C++ implementations belong under `modules/`. The TypeScript-facing API should remain small, typed, and explicit about platform behavior.

### Measurements live with the claim

Performance experiments should record the device/simulator, build mode, metric, methodology, and result in the corresponding day note. Avoid benchmark numbers without enough context to reproduce them.

## Dependency direction

```text
apps/showcase
   ├── @thirty/experiments
   └── @thirty/ui

@thirty/experiments
   ├── @thirty/ui (when needed)
   └── modules/*   (when needed)
```

Shared packages must never import the showcase app.

## When to split a repository

Do not create a new repository merely because a day is complete. A THIRTY experiment graduates only when it has a real independent audience or API: for example, a reusable native module, a library people want to install, or a tool with its own release lifecycle.
