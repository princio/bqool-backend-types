/** AI BooleanQ evaluation result (previously from @princio/bqool) */
export interface AiBooleanQResult {
    id: number;
    answer: boolean;
    citations: string[];
    rationale: string;
}
/** AI coherence assessment output (previously from @princio/bqool) */
export interface AiCoherenceOutput {
    level: number;
    rationale: string;
}
/** Group of BooleanQ results within one rubric item (from AI output file) */
export interface AiCorrectionItemGroup {
    booleanqs?: Partial<AiBooleanQResult>[];
    domande?: Partial<AiBooleanQResult>[];
}
/** Full AI correction output file shape (concepts + expressions + code + errors + coherence) */
export interface AiFullCorrectionOutput {
    concepts?: AiCorrectionItemGroup[];
    expressions?: AiCorrectionItemGroup[];
    code?: AiCorrectionItemGroup[];
    errors?: AiCorrectionItemGroup[];
    coherence?: Partial<AiCoherenceOutput>;
    suggestions?: Record<string, unknown>;
}
/** Resolved rubric item from AI review (with matched baseline) */
export interface ResolvedRubricItem {
    name: string;
    booleanqs?: {
        id: number;
        answer: boolean;
        citations?: string[];
        rationale?: string;
    }[];
    rubric_concept_id?: number | null;
    rubric_expression_id?: number | null;
    rubric_code_id?: number | null;
    rubric_error_id?: number | null;
    baseline?: {
        id: number;
        name: string;
        severity?: number;
        definition?: string;
    } | null;
    [key: string]: unknown;
}
/** Baseline item proposed by AI for adding to rubric */
export interface BaselineProposal {
    name?: string;
    expression?: string;
    type?: string;
    severity?: number;
    definition?: string;
    description?: string;
}
/** Confirm review payload from frontend */
export interface ConfirmReviewPayload {
    eval: {
        concepts: ResolvedRubricItem[];
        expressions: ResolvedRubricItem[];
        code: ResolvedRubricItem[];
        errors: ResolvedRubricItem[];
        coherence: (AiCoherenceOutput & {
            livello?: number;
        }) | null;
        booleanqs?: AiBooleanQResult[];
    };
    baseline: {
        concepts: BaselineProposal[];
        expressions: BaselineProposal[];
        code: BaselineProposal[];
        errors: BaselineProposal[];
    };
}
/** Response for AI item correction */
export interface CorrectItemResponse {
    ok: boolean;
    count: number;
}
/** Response for AI item preview (wraps multiple BooleanQ results) */
export interface PreviewItemResponse {
    results: AiBooleanQResult[];
}
/** Common body for AI operations that accept an optional model override */
export interface AiModelRequest {
    model?: string;
}
/** Request body for launching an item correction batch run */
export interface LaunchItemCorrectionRequest {
    question_id: number;
    item_type: string;
    student_ids?: number[];
    concurrency?: number;
    model?: string;
    use_seed_fork?: boolean;
}
export interface SaveReviewDraftRequest {
    data: unknown;
}
export interface ConfirmReviewRequest {
    data: unknown;
}
export interface ImportEvalRequest {
    data: unknown;
}
