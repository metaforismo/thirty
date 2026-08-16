import type { Experiment } from './types';

export type { Experiment, ExperimentStatus } from './types';

/**
 * The canonical registry for shipped THIRTY experiments.
 *
 * Add an entry only when the corresponding day is actually ready to demo.
 */
export const experiments: Experiment[] = [];
