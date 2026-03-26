import type { BooleanAnswer, BooleanQ, Concept, Criterion } from '@princio/bqool';
export type { BooleanAnswer, BooleanQ, Concept, Criterion, CriterionType } from '@princio/bqool';
/** Common fields shared by all criterion types */
export interface CriterionBase {
    id: number;
    question_id: number;
    name: string;
    definition: string;
}
/** Union of all rubric item types */
export type RubricItem = Concept | Criterion;
export type CriterionWithBooleanQs = (Concept & {
    booleanqs: Pick<BooleanQ, 'id' | 'text'>[];
}) | (Criterion & {
    booleanqs: Pick<BooleanQ, 'id' | 'text'>[];
});
export interface RubricExportData {
    question_id: string;
    concepts: (Concept & {
        booleanqs: BooleanQ[];
    })[];
    criteria: (Criterion & {
        booleanqs: BooleanQ[];
    })[];
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
    booleanqs: BooleanAnswer[];
    coherence: {
        level: number;
        rationale: string;
    } | null;
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
    rubric_booleanq: BooleanQ[];
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
    concepts?: {
        name: string;
        definition: string;
    }[];
    expressions?: {
        name: string;
        severity: number;
        definition?: string;
    }[];
    code?: {
        name: string;
        severity: number;
        definition?: string;
    }[];
    errors?: {
        name: string;
        definition: string;
    }[];
}
export interface CreateRubricConceptRequest {
    name: string;
    definition: string;
}
export interface CreateBooleanQRequest {
    criterion_type: string;
    criterion_id: number;
    text: string;
}
export interface UpdateBooleanQRequest {
    text?: string;
}
export interface CreateExpressionRequest {
    name: string;
    type: string;
}
export interface CreateCodeRequest {
    expression: string;
    type: string;
}
export interface CreateErrorRequest {
    name: string;
    description: string;
}
export interface UpdateCriterionFieldRequest {
    field: string;
    value: string | number;
}
/** Generic criterion creation (covers expression, code, error) */
export interface CreateCriterionRequest {
    name?: string;
    expression?: string;
    severity?: number;
    definition?: string;
    description?: string;
}
