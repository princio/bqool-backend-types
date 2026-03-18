import type { QuestionRow } from './question';
import type { SchoolClassListItem } from './class';
import type { StudentSummary } from './student';

export interface TestRow {
  id: number;
  name: string;
  classroom_id: number;
}

/** Minimal test reference */
export interface TestRef { id: number; name: string }

export interface TestListItem {
  id: number;
  name: string;
  classroom_name: string;
  classroom_id: number;
}

/** Test entry in question listings */
export interface TestQuestionLink { id: number; name: string; classroom_name: string; question_id: number }

/** Question shape inside TestDetail */
export interface TestDetailQuestion extends Pick<QuestionRow, 'id' | 'name'> {
  number: number | null;
  text: string;
  expected_answer: string;
  rubric_count: number;
  nr_rubric_count: number;
  expression_count: number;
  code_count: number;
  error_count: number;
}

export interface TestDetail {
  test: TestRef;
  classroom: SchoolClassListItem;
  questions: TestDetailQuestion[];
  students: StudentSummary[];
}

export interface TestRisultatiData {
  test: { id: number; name: string };
  questions: { id: number; name: string; number: number | null }[];
  students: {
    id: number;
    name: string;
    final_grade: number | null;
    scores: Record<number, {
      grade: number | null; grade_bonus: number | null;
      isblank: boolean; word_count: number; status: 'blank' | 'filled' | 'to_fill';
      booleanq_yes?: number;
    }>;
  }[];
}

export interface CreateTestRequest { class_id: number; name: string }
export interface UpdateTestRequest { name: string }
export interface AddQuestionToTestRequest { root_question_id: number; copy_baseline?: boolean }
export interface UpdateQuestionNumberRequest { number: number | null }
