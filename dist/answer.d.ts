import type { RubricConceptRow, RubricExpressionRow, RubricCodeRow, RubricErrorRow, RubricBooleanQRow, CriterionType } from './rubric';
export interface AnswerRow {
    id: number;
    question_id: number;
    student_id: number;
    text: string;
    isblank: number;
    grade: number | null;
    grade_bonus: number | null;
    grade_rationale: string;
    coherence_level: number;
    coherence_rationale: string;
    protected: number;
    created_at: string;
    updated_at: string | null;
}
export interface BooleanAnswerRow {
    id: number;
    answer_id: number;
    rubric_booleanq_id: number;
    answer: number;
    citations: string[];
    rationale: string;
    reviewed_count: number;
    booleanq_text?: string;
    item_type?: string;
    criterion_id?: number;
}
/** Concept enriched with derived evaluation state from BooleanAnswers */
export interface CorrectionConceptItem {
    id: number;
    name: string;
    definition?: string;
    required?: number;
    present: boolean;
    completeness: number;
    booleanq_count: number;
    booleanq_answers: BooleanAnswerRow[];
    rationale: string[];
    citations: string[];
}
/** Expression enriched with derived evaluation state */
export interface CorrectionExpressionItem {
    id: number;
    name: string;
    severity: number;
    positive: boolean;
    detected: boolean;
    booleanq_answers: BooleanAnswerRow[];
    rationale: string[];
    citations: string[];
}
/** Code item enriched with derived evaluation state */
export interface CorrectionCodeItem {
    id: number;
    name: string;
    severity: number;
    positive: boolean;
    detected: boolean;
    booleanq_answers: BooleanAnswerRow[];
    rationale: string[];
    citations: string[];
}
/** Error item enriched with derived evaluation state */
export interface CorrectionErrorItem {
    id: number;
    name: string;
    severity: number;
    detected: boolean;
    booleanq_answers: BooleanAnswerRow[];
    rationale: string[];
    citations: string[];
}
export type CorrectionItem = CorrectionConceptItem | CorrectionExpressionItem | CorrectionCodeItem | CorrectionErrorItem;
export interface CorrectionCriterionItem<T> {
    criterion: T;
    boolean_questions: RubricBooleanQRow[];
    boolean_answers: BooleanAnswerRow[];
}
export type ConceptDetail = Pick<RubricConceptRow, 'id' | 'name'> & {
    definition?: string;
    required?: number;
};
export type ExpressionDetail = Pick<RubricExpressionRow, 'id' | 'name' | 'severity'>;
export type CodeDetail = Pick<RubricCodeRow, 'id' | 'name'>;
export type ErrorDetail = Pick<RubricErrorRow, 'id' | 'name'>;
export interface CorrectionData {
    concepts: CorrectionCriterionItem<ConceptDetail>[];
    expressions: CorrectionCriterionItem<ExpressionDetail>[];
    codes: CorrectionCriterionItem<CodeDetail>[];
    errors: CorrectionCriterionItem<ErrorDetail>[];
}
export interface AnswerDetail extends AnswerRow {
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
