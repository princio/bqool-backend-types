import type { StudentSummary, StudentDetail } from './student';
import type { Question } from './question';

export interface NavAnswerSummary {
  id: number;
  grade: number | null;
  workdir: string;
}

export interface SiblingScore {
  grade: number | null;
  coherence_level: number;
  concepts_present: number;
  concepts_total: number;
  completeness_sum: number;
  completeness_max: number;
  expressions_pos: number;
  expressions_neg: number;
  code_correct: number;
  code_error: number;
  errors_count: number;
}

/** Test context shape inside NavData */
export interface NavTestContext {
  id: number;
  name: string;
  current_index: number;
  questions: {
    id: number;
    name: string;
    number: number | null;
    has_answer: boolean;
    answer_summary: { grade: number | null } | null;
  }[];
}

export interface NavData {
  student: StudentSummary;
  question: Question;
  siblings: (StudentSummary & { score: SiblingScore | null })[];
  answer: NavAnswerSummary | null;
  test: NavTestContext | null;
}

export interface AnswerData {
  text: string | null;
  isblank: boolean;
  student: StudentDetail;
  question: Question;
  siblings: StudentSummary[];
}
