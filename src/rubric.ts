import type { BooleanAnswerRow } from './answer';

export interface RubricConceptRow {
  id: number;
  question_id: number;
  name: string;
  definition: string;
  position: number;
  required: number;
}

export interface RubricExpressionRow {
  id: number;
  question_id: number;
  name: string;
  definition: string;
  severity: number;
}

export interface RubricCodeRow {
  id: number;
  question_id: number;
  name: string;
  definition: string;
  severity: number;
}

export interface RubricErrorRow {
  id: number;
  question_id: number;
  name: string;
  definition: string;
  severity: number;
}

export interface RubricBooleanQRow {
  id: number;
  item_type: string;
  rubric_item_id: number;
  text: string;
  parent_name?: string;
  parent_description?: string;
}

/** Common fields shared by all rubric item types */
export interface RubricItemBase {
  id: number;
  question_id: number;
  name: string;
  definition: string;
}

/** Union of all rubric item row types */
export type RubricItem = RubricConceptRow | RubricExpressionRow | RubricCodeRow | RubricErrorRow;

export type RubricItemWithBooleanQs =
  | (RubricConceptRow & { booleanqs: Pick<RubricBooleanQRow, 'id' | 'text'>[] })
  | (RubricExpressionRow & { booleanqs: Pick<RubricBooleanQRow, 'id' | 'text'>[] })
  | (RubricCodeRow & { booleanqs: Pick<RubricBooleanQRow, 'id' | 'text'>[] })
  | (RubricErrorRow & { booleanqs: Pick<RubricBooleanQRow, 'id' | 'text'>[] });

export interface RubricExportData {
  question_id: string;
  concepts: (RubricConceptRow & { booleanqs: RubricBooleanQRow[] })[];
  expressions: (RubricExpressionRow & { booleanqs: RubricBooleanQRow[] })[];
  code: (RubricCodeRow & { booleanqs: RubricBooleanQRow[] })[];
  errors: (RubricErrorRow & { booleanqs: RubricBooleanQRow[] })[];
  students: string[];
  answers: Record<string, string>;
}

export interface RubricDetailStudent {
  id: number;
  name: string;
  classroom_id: number;
  classroom: string;
  has_answer: boolean;
  not_answered: boolean;
  answer: string | null;
}

export interface RubricDetail {
  question_id: number;
  question_name: string;
  question_text: string;
  created_at: string;
  updated_at: string;
  students: RubricDetailStudent[];
}

export interface ReviewEval {
  booleanqs: BooleanAnswerRow[];
  coherence: { level: number; rationale: string } | null;
}

export interface ReviewData {
  answerId: number;
  question_id: number;
  student_id: number;
  student_name: string;
  answer_text: string;
  eval: ReviewEval;
  suggestions: Record<string, unknown>;
  modifications: RubricModification[];
  rubric_booleanq: RubricBooleanQRow[];
  warnings: string[];
}

export interface RubricModification {
  item_type: string;
  item_id: number;
  field: string;
  current: string;
  proposed: string;
}

export interface SyncRubricPayload {
  concepts?: { name: string; definition: string }[];
  expressions?: { name: string; severity: number; definition?: string }[];
  code?: { name: string; severity: number; definition?: string }[];
  errors?: { name: string; definition: string }[];
}

// ── Request types ────────────────────────────────────────────────────

export interface CreateRubricConceptRequest { name: string; definition: string }

export interface CreateBooleanQRequest { item_type: string; item_id: number; text: string; italian_text?: string }
export interface UpdateBooleanQRequest { text?: string; italian_text?: string }

export interface CreateExpressionRequest { name: string; type: string }

export interface CreateCodeRequest { expression: string; type: string }

export interface CreateErrorRequest { name: string; description: string }

export interface UpdateRubricItemFieldRequest { field: string; value: string | number }

/** Generic rubric item creation (covers expression, code, error) */
export interface CreateRubricItemRequest { name?: string; expression?: string; severity?: number; definition?: string; description?: string }
