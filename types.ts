
export interface Topic {
  name: string;
  details: string[];
  resources: string[];
}

export interface Project {
  title: string;
  description: string;
}

export interface Phase {
  phaseNumber: number;
  title: string;
  duration: string;
  goals: string[];
  topics: Topic[];
  project: Project;
}

export interface LearningPlan {
  title: string;
  introduction: string;
  phases: Phase[];
  conclusion: string;
}
