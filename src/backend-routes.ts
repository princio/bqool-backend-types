import type { OkResponse, OkIdResponse, ImportJsonResponse } from './common';
import type { SchoolClassListItem, SchoolClassSummary, SchoolClassDetail, CreateSchoolClassRequest } from './class';
import type { StudentSummary, StudentDetail, StudentTestsData, StudentTestAnswersData, AddStudentRequest } from './student';
import type { TestListItem, TestRef, TestDetail, TestRisultatiData, CreateTestRequest, UpdateTestRequest, AddQuestionToTestRequest, UpdateQuestionNumberRequest } from './test';
import type { QuestionListItem, QuestionDetail, CreateQuestionRequest, UpdateQuestionRequest } from './question';
import type { NavData, AnswerData } from './nav';
import type {
  AnswerDetail,
  UpdateAnswerRequest,
  SetGradeRequest,
  SetBonusRequest,
  UpsertBooleanQAnswerRequest,
  ToggleProtectionResponse,
  BatchCreateResponse,
  BatchResetResponse,
  WorkdirStatusResponse,
  RecreateWorkdirResponse,
  ImportAnswerOutputResult,
  ConfirmReviewResult,
} from './answer';
import type {
  CorrectItemResponse,
  PreviewItemResponse,
  AiModelRequest,
  LaunchItemCorrectionRequest,
  SaveReviewDraftRequest,
  ConfirmReviewRequest,
  ImportEvalRequest,
} from './ai';
import type {
  RubricDetail,
  RubricExportData,
  SyncRubricPayload,
  RubricConceptRow,
  RubricBooleanQRow,
  CreateRubricConceptRequest,
  CreateBooleanQRequest,
  UpdateBooleanQRequest,
  CreateExpressionRequest,
  CreateCodeRequest,
  CreateErrorRequest,
  UpdateCriterionFieldRequest,
  CreateCriterionRequest,
} from './rubric';
import type {
  PopulationListItem,
  CreatePopulationResponse,
  PopulationReviewData,
  ConfirmPopulationResult,
  PopulationItemPayload,
} from './rubric-draft';
import type { BackupListItem } from './backup';
import type { ImportJsonBody } from './import-export';

/**
 * Maps each route key to its HTTP method, body, params, query, and response types.
 *
 * Provides a single source of truth tying API routes to their HTTP contract.
 */
export interface BackendApiTypeMap {
  dashboard: {
    get: { method: 'GET'; body: never; response: unknown };
  };

  classes: {
    list:   { method: 'GET';    body: never; response: SchoolClassSummary[] };
    create: { method: 'POST';   body: CreateSchoolClassRequest; response: OkIdResponse };
    one:    { method: 'GET';    params: { id: number }; body: never; response: SchoolClassDetail };
    update: { method: 'PUT';    params: { id: number }; body: CreateSchoolClassRequest; response: OkResponse };
    delete: { method: 'DELETE'; params: { id: number }; body: never; response: OkResponse };
    students: {
      add:    { method: 'POST';   params: { classId: number }; body: AddStudentRequest; response: OkIdResponse };
      remove: { method: 'DELETE'; params: { classId: number; studentId: number }; body: never; response: OkResponse };
    };
  };

  tests: {
    list:    { method: 'GET';    body: never; response: TestListItem[] };
    create:  { method: 'POST';   body: CreateTestRequest; response: OkIdResponse };
    one:     { method: 'GET';    params: { id: number }; body: never; response: TestRef };
    update:  { method: 'PUT';    params: { id: number }; body: UpdateTestRequest; response: OkResponse };
    delete:  { method: 'DELETE'; params: { id: number }; body: never; response: OkResponse };
    detail:  { method: 'GET';    params: { id: number }; body: never; response: TestDetail };
    results: { method: 'GET';    params: { id: number }; body: never; response: TestRisultatiData };
    questions: {
      add:    { method: 'POST';   params: { testId: number }; body: AddQuestionToTestRequest; response: OkResponse };
      update: { method: 'PUT';    params: { testId: number; questionId: number }; body: UpdateQuestionNumberRequest; response: OkResponse };
      remove: { method: 'DELETE'; params: { testId: number; questionId: number }; body: never; response: OkResponse };
    };
    students: {
      summary: { method: 'GET'; params: { testId: number; studentId: number }; body: never; response: unknown };
      grade:   { method: 'GET'; params: { testId: number; studentId: number }; body: never; response: unknown };
    };
  };

  questions: {
    list:        { method: 'GET';    body: never; response: QuestionListItem[] };
    create:      { method: 'POST';   body: CreateQuestionRequest; response: OkIdResponse };
    one:         { method: 'GET';    params: { id: number }; body: never; response: QuestionDetail };
    update:      { method: 'PUT';    params: { id: number }; body: UpdateQuestionRequest; response: OkResponse };
    delete:      { method: 'DELETE'; params: { id: number }; body: never; response: OkResponse };
    gradeParams: { method: 'GET';    params: { id: number }; body: never; response: unknown };
  };

  students: {
    one:    { method: 'GET'; params: { id: number }; body: never; response: StudentDetail };
    tests:  { method: 'GET'; params: { id: number }; body: never; response: StudentTestsData };
    nav:    { method: 'GET'; params: { id: number; questionId: number }; body: never; response: NavData };
    answer: { method: 'GET'; params: { id: number; questionId: number }; body: never; response: AnswerData };
    testAnswers: { method: 'GET'; params: { id: number; testId: number }; body: never; response: StudentTestAnswersData };
  };

  answers: {
    create:       { method: 'POST';   body: unknown; response: OkIdResponse };
    one:          { method: 'GET';    params: { id: number }; body: never; response: AnswerDetail };
    update:       { method: 'PUT';    params: { id: number }; body: UpdateAnswerRequest; response: OkResponse };
    protected:    { method: 'PUT';    params: { id: number }; body: never; response: ToggleProtectionResponse };
    grade:        { method: 'PUT';    params: { id: number }; body: SetGradeRequest; response: OkResponse };
    bonus:        { method: 'PUT';    params: { id: number }; body: SetBonusRequest; response: OkResponse };
    workdir:      { method: 'POST';   params: { id: number }; body: never; response: RecreateWorkdirResponse };
    workdirStatus:{ method: 'GET';    params: { id: number }; body: never; response: WorkdirStatusResponse };
    byStudent:    { method: 'GET';    query: { student_id: number; question_id: number }; body: never; response: unknown };
    byTest:       { method: 'GET';    query: { test_id: number }; body: never; response: unknown };
    batch:        { method: 'POST';   body: unknown; response: BatchCreateResponse };
    batchReset:   { method: 'POST';   body: unknown; response: BatchResetResponse };
    correction:   { method: 'DELETE'; params: { category: string; itemId: number }; body: never; response: OkResponse };
    ai: {
      importOutput:    { method: 'POST'; params: { id: number }; body: ImportEvalRequest; response: ImportAnswerOutputResult };
      reviewData:      { method: 'GET';  params: { id: number }; body: never; response: unknown };
      reviewDraft:     { method: 'GET';  params: { id: number }; body: never; response: unknown };
      saveReviewDraft: { method: 'PUT';  params: { id: number }; body: SaveReviewDraftRequest; response: OkResponse };
      reviewConfirm:   { method: 'POST'; params: { id: number }; body: ConfirmReviewRequest; response: ConfirmReviewResult };
      correctBooleanq: { method: 'POST'; params: { answerId: number; booleanqId: number }; body: AiModelRequest; response: CorrectItemResponse };
      previewBooleanq: { method: 'POST'; params: { answerId: number; booleanqId: number }; body: AiModelRequest; response: PreviewItemResponse };
      correctItem:     { method: 'POST'; params: { answerId: number; itemType: string; itemId: number }; body: AiModelRequest; response: CorrectItemResponse };
      previewItem:     { method: 'POST'; params: { answerId: number; itemType: string; itemId: number }; body: AiModelRequest; response: PreviewItemResponse };
      assessCoherence: { method: 'POST'; params: { answerId: number }; body: AiModelRequest; response: unknown };
    };
  };

  aiItemCorrection: {
    run:    { method: 'POST'; body: LaunchItemCorrectionRequest; response: unknown };
    status: { method: 'GET';  body: never; response: unknown };
    stop:   { method: 'POST'; body: never; response: unknown };
  };

  booleanAnswers: {
    init:   { method: 'POST';   body: unknown; response: unknown };
    one:    { method: 'PUT';    params: { booleanqId: number }; body: UpsertBooleanQAnswerRequest; response: OkResponse };
    delete: { method: 'DELETE'; params: { booleanqId: number }; body: never; response: OkResponse };
    review: { method: 'POST';   params: { booleanqId: number }; body: unknown; response: unknown };
  };

  penmarks: {
    create: { method: 'POST'; body: unknown; response: unknown };
  };

  rubric: {
    detail: { method: 'GET';  query: { question_id: number }; body: never; response: RubricDetail };
    export: { method: 'GET';  query: { question_id: number }; body: never; response: RubricExportData };
    sync:   { method: 'POST'; body: SyncRubricPayload; response: OkResponse };
  };

  rubricConcepts: {
    list:   { method: 'GET';    query: { question_id: number }; body: never; response: RubricConceptRow[] };
    create: { method: 'POST';   body: CreateRubricConceptRequest; response: OkIdResponse };
    one:    { method: 'GET';    params: { id: number }; body: never; response: RubricConceptRow };
    update: { method: 'PUT';    params: { id: number }; body: UpdateCriterionFieldRequest; response: OkResponse };
    delete: { method: 'DELETE'; params: { id: number }; body: never; response: OkResponse };
  };

  rubricBooleanqs: {
    list:   { method: 'GET';    params: { itemType: string; itemId: number }; body: never; response: RubricBooleanQRow[] };
    create: { method: 'POST';   body: CreateBooleanQRequest; response: OkIdResponse };
    one:    { method: 'GET';    params: { id: number }; body: never; response: RubricBooleanQRow };
    update: { method: 'PUT';    params: { id: number }; body: UpdateBooleanQRequest; response: OkResponse };
    delete: { method: 'DELETE'; params: { id: number }; body: never; response: OkResponse };
  };

  criteria: {
    one:    { method: 'GET';    params: { type: string; id: number }; body: never; response: unknown };
    update: { method: 'PUT';    params: { type: string; id: number }; body: UpdateCriterionFieldRequest; response: OkResponse };
    delete: { method: 'DELETE'; params: { type: string; id: number }; body: never; response: OkResponse };
  };

  rubricExpressions: {
    create: { method: 'POST';   body: CreateExpressionRequest; response: OkIdResponse };
    one:    { method: 'GET';    params: { id: number }; body: never; response: unknown };
    update: { method: 'PUT';    params: { id: number }; body: CreateCriterionRequest; response: OkResponse };
    delete: { method: 'DELETE'; params: { id: number }; body: never; response: OkResponse };
  };

  rubricCodes: {
    create: { method: 'POST';   body: CreateCodeRequest; response: OkIdResponse };
    one:    { method: 'GET';    params: { id: number }; body: never; response: unknown };
    update: { method: 'PUT';    params: { id: number }; body: CreateCriterionRequest; response: OkResponse };
    delete: { method: 'DELETE'; params: { id: number }; body: never; response: OkResponse };
  };

  rubricErrors: {
    create: { method: 'POST';   body: CreateErrorRequest; response: OkIdResponse };
    one:    { method: 'GET';    params: { id: number }; body: never; response: unknown };
    update: { method: 'PUT';    params: { id: number }; body: CreateCriterionRequest; response: OkResponse };
    delete: { method: 'DELETE'; params: { id: number }; body: never; response: OkResponse };
  };

  rubricDrafts: {
    list:       { method: 'GET';  body: never; response: PopulationListItem[] };
    create:     { method: 'POST'; body: unknown; response: CreatePopulationResponse };
    import:     { method: 'POST'; params: { populationId: string }; body: unknown; response: unknown };
    reviewData: { method: 'GET';  params: { populationId: string }; body: never; response: PopulationReviewData };
    confirm:    { method: 'POST'; params: { populationId: string }; body: Record<string, PopulationItemPayload[]>; response: ConfirmPopulationResult };
    batch: {
      workdirs:    { method: 'POST'; params: { itemType: string }; body: unknown; response: unknown };
      run:         { method: 'POST'; params: { itemType: string }; body: unknown; response: unknown };
      status:      { method: 'GET';  params: { itemType: string }; body: never; response: unknown };
      stop:        { method: 'POST'; params: { itemType: string }; body: never; response: unknown };
      overview:    { method: 'GET';  params: { itemType: string }; body: never; response: unknown };
      mergeWorkdir:{ method: 'POST'; params: { itemType: string }; body: unknown; response: unknown };
      mergeStatus: { method: 'GET';  params: { itemType: string }; body: never; response: unknown };
      importMerge: { method: 'POST'; params: { itemType: string }; body: unknown; response: unknown };
    };
  };

  sessions: {
    list:    { method: 'GET';    body: never; response: unknown[] };
    create:  { method: 'POST';   body: unknown; response: OkIdResponse };
    one:     { method: 'GET';    params: { id: number }; body: never; response: unknown };
    update:  { method: 'PUT';    params: { id: number }; body: unknown; response: OkResponse };
    delete:  { method: 'DELETE'; params: { id: number }; body: never; response: OkResponse };
    persist: { method: 'POST';   params: { id: number }; body: never; response: OkResponse };
  };

  backups: {
    list:    { method: 'GET';    body: never; response: BackupListItem[] };
    create:  { method: 'POST';   body: unknown; response: OkIdResponse };
    export:  { method: 'GET';    body: never; response: unknown };
    import:  { method: 'POST';   body: unknown; response: unknown };
    restore: { method: 'POST';   params: { id: number }; body: never; response: OkResponse };
    one:     { method: 'GET';    params: { id: number }; body: never; response: BackupListItem };
    delete:  { method: 'DELETE'; params: { id: number }; body: never; response: OkResponse };
  };

  importJson: {
    run: { method: 'POST'; body: ImportJsonBody; response: ImportJsonResponse };
  };

  pdf: {
    studentQuestion: { method: 'GET'; query: { student_id: number; question_id: number }; body: never; response: unknown };
    studentTest:     { method: 'GET'; query: { student_id: number; test_id: number }; body: never; response: unknown };
  };
}

/**
 * API route constants for the bqool backend.
 *
 * This file is the ground-truth for all backend endpoints consumed by other repos
 * (frontend, runner, etc.). It must be kept in sync with bqool-backend controllers.
 *
 * All paths include the `/api` prefix. Parameterized routes are functions.
 *
 * @example
 *   fetch(API.classes.one(3))
 *   fetch(API.answers.ai.correctItem(5, 'concept', 12))
 */

const BASE = '/api';

export const API = {
  // ── Dashboard ────────────────────────────────────────────────────────────
  dashboard: `${BASE}/dashboard`,

  // ── Classes ──────────────────────────────────────────────────────────────
  classes: {
    list:    `${BASE}/classes`,
    create:  `${BASE}/classes`,
    one:     (id: number) => `${BASE}/classes/${id}`,
    update:  (id: number) => `${BASE}/classes/${id}`,
    delete:  (id: number) => `${BASE}/classes/${id}`,
    students: {
      add:    (classId: number) => `${BASE}/classes/${classId}/students`,
      remove: (classId: number, studentId: number) => `${BASE}/classes/${classId}/students/${studentId}`,
    },
  },

  // ── Tests ────────────────────────────────────────────────────────────────
  tests: {
    list:    `${BASE}/tests`,
    create:  `${BASE}/tests`,
    one:     (id: number) => `${BASE}/tests/${id}`,
    update:  (id: number) => `${BASE}/tests/${id}`,
    delete:  (id: number) => `${BASE}/tests/${id}`,
    detail:  (id: number) => `${BASE}/tests/${id}/detail`,
    results: (id: number) => `${BASE}/tests/${id}/results`,
    questions: {
      add:    (testId: number) => `${BASE}/tests/${testId}/questions`,
      update: (testId: number, questionId: number) => `${BASE}/tests/${testId}/questions/${questionId}`,
      remove: (testId: number, questionId: number) => `${BASE}/tests/${testId}/questions/${questionId}`,
    },
    students: {
      summary: (testId: number, studentId: number) => `${BASE}/tests/${testId}/students/${studentId}`,
      grade:   (testId: number, studentId: number) => `${BASE}/tests/${testId}/students/${studentId}/grade`,
    },
  },

  // ── Questions ────────────────────────────────────────────────────────────
  questions: {
    list:        `${BASE}/questions`,
    create:      `${BASE}/questions`,
    one:         (id: number) => `${BASE}/questions/${id}`,
    update:      (id: number) => `${BASE}/questions/${id}`,
    delete:      (id: number) => `${BASE}/questions/${id}`,
    gradeParams: (id: number) => `${BASE}/questions/${id}/grade-params`,
  },

  // ── Students ─────────────────────────────────────────────────────────────
  students: {
    one:    (id: number) => `${BASE}/students/${id}`,
    tests:  (id: number) => `${BASE}/students/${id}/tests`,
    nav:    (id: number, questionId: number) => `${BASE}/students/${id}/questions/${questionId}/nav`,
    answer: (id: number, questionId: number) => `${BASE}/students/${id}/questions/${questionId}/answer`,
  },

  // ── Answers ──────────────────────────────────────────────────────────────
  answers: {
    create:       `${BASE}/answers`,
    one:          (id: number) => `${BASE}/answers/${id}`,
    protected:    (id: number) => `${BASE}/answers/${id}/protected`,
    grade:        (id: number) => `${BASE}/answers/${id}/grade`,
    bonus:        (id: number) => `${BASE}/answers/${id}/bonus`,
    workdir:      (id: number) => `${BASE}/answers/${id}/workdir`,
    workdirStatus:(id: number) => `${BASE}/answers/${id}/workdir-status`,
    byStudent:    `${BASE}/answers/by-student`,
    byTest:       `${BASE}/answers/by-test`,
    batch:        `${BASE}/answers/batch`,
    batchReset:   `${BASE}/answers/batch-reset`,
    correction:   (category: string, itemId: number) => `${BASE}/answers/correction/${category}/${itemId}`,

    ai: {
      importOutput:    (id: number) => `${BASE}/answers/${id}/ai/import-output`,
      reviewData:      (id: number) => `${BASE}/answers/${id}/ai/review-data`,
      reviewDraft:     (id: number) => `${BASE}/answers/${id}/ai/review-draft`,
      reviewConfirm:   (id: number) => `${BASE}/answers/${id}/ai/review/confirm`,
      correctBooleanq: (answerId: number, booleanqId: number) => `${BASE}/answers/${answerId}/ai/correct-booleanq/${booleanqId}`,
      previewBooleanq: (answerId: number, booleanqId: number) => `${BASE}/answers/${answerId}/ai/preview-booleanq/${booleanqId}`,
      correctItem:     (answerId: number, itemType: string, itemId: number) => `${BASE}/answers/${answerId}/ai/correct-item/${itemType}/${itemId}`,
      previewItem:     (answerId: number, itemType: string, itemId: number) => `${BASE}/answers/${answerId}/ai/preview-item/${itemType}/${itemId}`,
      assessCoherence: (answerId: number) => `${BASE}/answers/${answerId}/ai/assess-coherence`,
    },
  },

  // ── AI item-correction batch ──────────────────────────────────────────────
  aiItemCorrection: {
    run:    `${BASE}/ai/item-correction/run`,
    status: `${BASE}/ai/item-correction/status`,
    stop:   `${BASE}/ai/item-correction/stop`,
  },

  // ── Boolean answers ───────────────────────────────────────────────────────
  booleanAnswers: {
    init:   `${BASE}/boolean-answers/init`,
    one:    (booleanqId: number) => `${BASE}/boolean-answers/${booleanqId}`,
    review: (booleanqId: number) => `${BASE}/boolean-answers/${booleanqId}/review`,
  },

  // ── Penmarks ──────────────────────────────────────────────────────────────
  penmarks: {
    create: `${BASE}/penmarks`,
  },

  // ── Rubric ────────────────────────────────────────────────────────────────
  rubric: {
    detail: `${BASE}/rubric/detail`,
    export: `${BASE}/rubric/export`,
    sync:   `${BASE}/rubric/sync`,
  },

  rubricConcepts: {
    list:   `${BASE}/rubric-concepts`,
    create: `${BASE}/rubric-concepts`,
    one:    (id: number) => `${BASE}/rubric-concepts/${id}`,
    update: (id: number) => `${BASE}/rubric-concepts/${id}`,
    delete: (id: number) => `${BASE}/rubric-concepts/${id}`,
  },

  rubricBooleanqs: {
    list:   (itemType: string, itemId: number) => `${BASE}/rubric-booleanqs/${itemType}/${itemId}`,
    create: `${BASE}/rubric-booleanqs`,
    one:    (id: number) => `${BASE}/rubric-booleanqs/${id}`,
    update: (id: number) => `${BASE}/rubric-booleanqs/${id}`,
    delete: (id: number) => `${BASE}/rubric-booleanqs/${id}`,
  },

  criteria: {
    one:    (type: string, id: number) => `${BASE}/criteria/${type}/${id}`,
    update: (type: string, id: number) => `${BASE}/criteria/${type}/${id}`,
    delete: (type: string, id: number) => `${BASE}/criteria/${type}/${id}`,
  },

  rubricExpressions: {
    create: `${BASE}/rubric-expressions`,
    one:    (id: number) => `${BASE}/rubric-expressions/${id}`,
    update: (id: number) => `${BASE}/rubric-expressions/${id}`,
    delete: (id: number) => `${BASE}/rubric-expressions/${id}`,
  },

  rubricCodes: {
    create: `${BASE}/rubric-codes`,
    one:    (id: number) => `${BASE}/rubric-codes/${id}`,
    update: (id: number) => `${BASE}/rubric-codes/${id}`,
    delete: (id: number) => `${BASE}/rubric-codes/${id}`,
  },

  rubricErrors: {
    create: `${BASE}/rubric-errors`,
    one:    (id: number) => `${BASE}/rubric-errors/${id}`,
    update: (id: number) => `${BASE}/rubric-errors/${id}`,
    delete: (id: number) => `${BASE}/rubric-errors/${id}`,
  },

  // ── Rubric drafts (population / seek / merge) ─────────────────────────────
  rubricDrafts: {
    list:       `${BASE}/rubric-drafts`,
    create:     `${BASE}/rubric-drafts`,
    import:     (populationId: string) => `${BASE}/rubric-drafts/${populationId}/import`,
    reviewData: (populationId: string) => `${BASE}/rubric-drafts/${populationId}/review-data`,
    confirm:    (populationId: string) => `${BASE}/rubric-drafts/${populationId}/confirm`,

    batch: (itemType: string) => ({
      workdirs:    `${BASE}/rubric-draft/batch/${itemType}/workdirs`,
      run:         `${BASE}/rubric-draft/batch/${itemType}/run`,
      status:      `${BASE}/rubric-draft/batch/${itemType}/status`,
      stop:        `${BASE}/rubric-draft/batch/${itemType}/stop`,
      overview:    `${BASE}/rubric-draft/batch/${itemType}/overview`,
      mergeWorkdir:`${BASE}/rubric-draft/batch/${itemType}/merge-workdir`,
      mergeStatus: `${BASE}/rubric-draft/batch/${itemType}/merge-status`,
      importMerge: `${BASE}/rubric-draft/batch/${itemType}/import-merge`,
    }),
  },

  // ── Sessions ──────────────────────────────────────────────────────────────
  sessions: {
    list:    `${BASE}/sessions`,
    create:  `${BASE}/sessions`,
    one:     (id: number) => `${BASE}/sessions/${id}`,
    update:  (id: number) => `${BASE}/sessions/${id}`,
    delete:  (id: number) => `${BASE}/sessions/${id}`,
    persist: (id: number) => `${BASE}/sessions/${id}/persist`,
  },

  // ── Backups ───────────────────────────────────────────────────────────────
  backups: {
    list:    `${BASE}/backups`,
    create:  `${BASE}/backups`,
    export:  `${BASE}/backups/export`,
    import:  `${BASE}/backups/import`,
    restore: (id: number) => `${BASE}/backups/${id}/restore`,
    one:     (id: number) => `${BASE}/backups/${id}`,
    delete:  (id: number) => `${BASE}/backups/${id}`,
  },

  // ── Import/Export ─────────────────────────────────────────────────────────
  importJson: `${BASE}/import-json`,

  // ── PDF ───────────────────────────────────────────────────────────────────
  pdf: {
    studentQuestion: `${BASE}/pdf/student-question`,
    studentTest:     `${BASE}/pdf/student-test`,
  },
} as const;
