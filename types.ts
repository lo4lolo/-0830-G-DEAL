export interface WorkshopStepData {
  id: string;
  category: 'intro' | 'D' | 'V' | 'M' | 'outro';
  boardCategory: 'intro' | 'D1' | 'V' | 'D2' | 'M' | 'outro';
  shortTitle: string;
  title: string;
  duration: number; // in minutes
  description: string;
  details: string[];
  questions: string[];
}