export type ExperimentStatus = 'shipped' | 'in-progress';

export type Experiment = {
  day: number;
  slug: string;
  title: string;
  focus: string;
  summary: string;
  status: ExperimentStatus;
  sourcePath: string;
  notesPath: string;
};
