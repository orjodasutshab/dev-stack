
export type TechCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Language'
  | 'Styling'
  | 'DevOps'
  | 'Tools';


export type DifficultyLevel =
  | 'Beginner-Friendly'
  | 'Intermediate'
  | 'Advanced';


export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
  icon: string;
  rating: number;
  difficulty: DifficultyLevel;
  badge: string;
}


export interface StackItem extends Technology {
  addedAt: number;
}
