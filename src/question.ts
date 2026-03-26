import type { TestQuestionLink, TestListItem, TestRef } from './test';
import type { ClassRoomDetail } from './classroom';
import type { Question } from '@princio/bqool';

export type { Question } from '@princio/bqool';

export interface QuestionListItem {
  id: number;
  name: string;
  text: string;
  expected_answer: string;
  tests: TestQuestionLink[];
  concepts_count: number;
  nr_concepts_count: number;
  graded_count: number;
  blank_count: number;
  not_typed_count: number;
  todo_count: number;
}

export interface QuestionDetailStudent {
  id: number;
  name: string;
  classroom_id: number;
  classroom: string;
  has_answer: boolean;
  isblank: boolean;
  word_count: number;
  question_id: number | null;
  answer_id: number | null;
  grade: number | null;
  coherence_level: number | null;
  concepts_total: number | null;
  concepts_present: number | null;
  expressions_pos: number | null;
  expressions_neg: number | null;
  errors_count: number | null;
  concepts_completeness_sum: number | null;
  nr_concepts_present: number | null;
  nr_concepts_completeness_sum: number | null;
  codes_correct: number | null;
  codes_wrong: number | null;
  review_count: number;
  grade_bonus: number | null;
  protected: number | null;
  has_output: boolean;
  suggestions_count: number | null;
}

export interface QuestionDetail {
  tests: (TestListItem & { question_id: number })[];
  test: TestRef | null;
  classroom: ClassRoomDetail | null;
  question: Question;
  students: QuestionDetailStudent[];
  answers: Record<string, string>;
  answer_count: number;
}

export interface CreateQuestionRequest { name: string; text?: string; expected_answer?: string; test_id?: number }
export interface UpdateQuestionRequest { name?: string; text?: string; expected_answer?: string }
