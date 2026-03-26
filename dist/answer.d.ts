import type { Answer, BooleanAnswer, BooleanQ, Concept, Criterion, CriterionType } from '@princio/bqool';
/** Concept enriched with derived evaluation state from BooleanAnswers */
export interface CorrectionConceptItem extends Pick<Concept, 'id' | 'name'>, Partial<Pick<Concept, 'definition' | 'required'>> {
    present: boolean;
    completeness: number;
    booleanq_count: number;
    booleanq_answers: BooleanAnswer[];
    rationale: string[];
    citations: string[];
}
/** Criterion (expression/code/error) enriched with derived evaluation state */
export interface CorrectionCriterionItem extends Pick<Criterion, 'id' | 'name' | 'type' | 'severity'> {
    detected: boolean;
    booleanq_answers: BooleanAnswer[];
    rationale: string[];
    citations: string[];
}
/** @deprecated Use CorrectionCriterionItem */
export type CorrectionExpressionItem = CorrectionCriterionItem;
/** @deprecated Use CorrectionCriterionItem */
export type CorrectionCodeItem = CorrectionCriterionItem;
/** @deprecated Use CorrectionCriterionItem */
export type CorrectionErrorItem = CorrectionCriterionItem;
export type CorrectionItem = CorrectionConceptItem | CorrectionCriterionItem;
export interface CorrectionCriterionDetail<T> {
    criterion: T;
    boolean_questions: BooleanQ[];
    boolean_answers: BooleanAnswer[];
}
/** @deprecated Use CorrectionCriterionDetail */
export type CorrectionCriterionItem_Legacy<T> = CorrectionCriterionDetail<T>;
export type ConceptDetail = Pick<Concept, 'id' | 'name'> & {
    definition?: string;
    required?: number;
};
export type CriterionDetail = Pick<Criterion, 'id' | 'name' | 'type' | 'severity'>;
export interface CorrectionData {
    concepts: CorrectionCriterionDetail<ConceptDetail>[];
    criteria: CorrectionCriterionDetail<CriterionDetail>[];
}
export interface AnswerDetail extends Answer {
    student_name: string;
    question_name: string;
    question_text: string;
    workdir: string;
    generated_prompt: string;
    correction: CorrectionData;
}
export interface PrepareAnswerResponse {
    id: number;
    question_id: number;
    student_id: number;
    student_name: string;
    workdir: string;
    relativePath: string;
}
export interface ImportAnswerOutputResult {
    preview: boolean;
    executed?: number;
    errors?: string[];
    warnings: string[];
    suggestions?: Record<string, unknown> | null;
    data?: unknown;
}
/** Categories for updating existing correction data */
export type UpdateCorrectionCategory = 'boolean_answer' | 'answer' | 'coherence';
/** Categories for creating free-form correction items */
export type FreeCorrectionCategory = 'expression' | 'code' | 'error';
export interface ExportCorrectionData {
    answer_id: number;
    exported_at: string;
    coherence_level: number;
    coherence_rationale: string;
    grade: number | null;
    grade_bonus: number | null;
    grade_rationale: string;
    booleanq: unknown[];
}
export interface ImportCorrectionResult {
    ok: boolean;
    counts: {
        booleanq: number;
    };
}
export interface InitAnswerItemsResult {
    ok: boolean;
    created: {
        booleanq: number;
    };
}
export interface CreateOrphanCorrectionItemResult {
    ok: boolean;
    id: number;
    category: FreeCorrectionCategory;
}
/** @deprecated Use CreateOrphanCorrectionItemResult */
export type CreateOrphanCriterionResult = CreateOrphanCorrectionItemResult;
export interface ConfirmReviewResult {
    executed: number;
    errors: string[];
}
/** Response for toggling answer protection */
export interface ToggleProtectionResponse {
    ok: boolean;
    protected: number;
}
/** Response for batch answer creation */
export interface BatchCreateResponse {
    ok: boolean;
    created: number;
}
/** Response for batch answer reset */
export interface BatchResetResponse {
    ok: boolean;
    reset: number;
}
/** Response for workdir status check */
export interface WorkdirStatusResponse {
    workdir_mtime: string | null;
    output_mtime: string | null;
}
/** Response for workdir recreation */
export interface RecreateWorkdirResponse {
    ok: boolean;
    workdir: string;
}
export interface UpdateAnswerRequest {
    text?: string;
    blank?: boolean;
}
export interface SetGradeRequest {
    grade: number;
}
export interface SetBonusRequest {
    bonus: number | null;
}
export interface UpsertBooleanQAnswerRequest {
    answer?: boolean;
    citations?: string[];
    rationale?: string;
}
export type PenmarkType = Exclude<CriterionType, 'concept'>;
