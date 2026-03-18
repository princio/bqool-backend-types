"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
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
exports.API = {
    // ── Dashboard ────────────────────────────────────────────────────────────
    dashboard: `${BASE}/dashboard`,
    // ── Classes ──────────────────────────────────────────────────────────────
    classes: {
        list: `${BASE}/classes`,
        create: `${BASE}/classes`,
        one: (id) => `${BASE}/classes/${id}`,
        update: (id) => `${BASE}/classes/${id}`,
        delete: (id) => `${BASE}/classes/${id}`,
        students: {
            add: (classId) => `${BASE}/classes/${classId}/students`,
            remove: (classId, studentId) => `${BASE}/classes/${classId}/students/${studentId}`,
        },
    },
    // ── Tests ────────────────────────────────────────────────────────────────
    tests: {
        list: `${BASE}/tests`,
        create: `${BASE}/tests`,
        one: (id) => `${BASE}/tests/${id}`,
        update: (id) => `${BASE}/tests/${id}`,
        delete: (id) => `${BASE}/tests/${id}`,
        detail: (id) => `${BASE}/tests/${id}/detail`,
        results: (id) => `${BASE}/tests/${id}/results`,
        questions: {
            add: (testId) => `${BASE}/tests/${testId}/questions`,
            update: (testId, questionId) => `${BASE}/tests/${testId}/questions/${questionId}`,
            remove: (testId, questionId) => `${BASE}/tests/${testId}/questions/${questionId}`,
        },
        students: {
            summary: (testId, studentId) => `${BASE}/tests/${testId}/students/${studentId}`,
            grade: (testId, studentId) => `${BASE}/tests/${testId}/students/${studentId}/grade`,
        },
    },
    // ── Questions ────────────────────────────────────────────────────────────
    questions: {
        list: `${BASE}/questions`,
        create: `${BASE}/questions`,
        one: (id) => `${BASE}/questions/${id}`,
        update: (id) => `${BASE}/questions/${id}`,
        delete: (id) => `${BASE}/questions/${id}`,
        gradeParams: (id) => `${BASE}/questions/${id}/grade-params`,
    },
    // ── Students ─────────────────────────────────────────────────────────────
    students: {
        one: (id) => `${BASE}/students/${id}`,
        tests: (id) => `${BASE}/students/${id}/tests`,
        nav: (id, questionId) => `${BASE}/students/${id}/questions/${questionId}/nav`,
        answer: (id, questionId) => `${BASE}/students/${id}/questions/${questionId}/answer`,
    },
    // ── Answers ──────────────────────────────────────────────────────────────
    answers: {
        create: `${BASE}/answers`,
        one: (id) => `${BASE}/answers/${id}`,
        protected: (id) => `${BASE}/answers/${id}/protected`,
        grade: (id) => `${BASE}/answers/${id}/grade`,
        bonus: (id) => `${BASE}/answers/${id}/bonus`,
        workdir: (id) => `${BASE}/answers/${id}/workdir`,
        workdirStatus: (id) => `${BASE}/answers/${id}/workdir-status`,
        byStudent: `${BASE}/answers/by-student`,
        byTest: `${BASE}/answers/by-test`,
        batch: `${BASE}/answers/batch`,
        batchReset: `${BASE}/answers/batch-reset`,
        correction: (category, itemId) => `${BASE}/answers/correction/${category}/${itemId}`,
        ai: {
            importOutput: (id) => `${BASE}/answers/${id}/ai/import-output`,
            reviewData: (id) => `${BASE}/answers/${id}/ai/review-data`,
            reviewDraft: (id) => `${BASE}/answers/${id}/ai/review-draft`,
            reviewConfirm: (id) => `${BASE}/answers/${id}/ai/review/confirm`,
            correctBooleanq: (answerId, booleanqId) => `${BASE}/answers/${answerId}/ai/correct-booleanq/${booleanqId}`,
            previewBooleanq: (answerId, booleanqId) => `${BASE}/answers/${answerId}/ai/preview-booleanq/${booleanqId}`,
            correctItem: (answerId, itemType, itemId) => `${BASE}/answers/${answerId}/ai/correct-item/${itemType}/${itemId}`,
            previewItem: (answerId, itemType, itemId) => `${BASE}/answers/${answerId}/ai/preview-item/${itemType}/${itemId}`,
            assessCoherence: (answerId) => `${BASE}/answers/${answerId}/ai/assess-coherence`,
        },
    },
    // ── AI item-correction batch ──────────────────────────────────────────────
    aiItemCorrection: {
        run: `${BASE}/ai/item-correction/run`,
        status: `${BASE}/ai/item-correction/status`,
        stop: `${BASE}/ai/item-correction/stop`,
    },
    // ── Boolean answers ───────────────────────────────────────────────────────
    booleanAnswers: {
        init: `${BASE}/boolean-answers/init`,
        one: (booleanqId) => `${BASE}/boolean-answers/${booleanqId}`,
        review: (booleanqId) => `${BASE}/boolean-answers/${booleanqId}/review`,
    },
    // ── Penmarks ──────────────────────────────────────────────────────────────
    penmarks: {
        create: `${BASE}/penmarks`,
    },
    // ── Rubric ────────────────────────────────────────────────────────────────
    rubric: {
        detail: `${BASE}/rubric/detail`,
        export: `${BASE}/rubric/export`,
        sync: `${BASE}/rubric/sync`,
    },
    rubricConcepts: {
        list: `${BASE}/rubric-concepts`,
        create: `${BASE}/rubric-concepts`,
        one: (id) => `${BASE}/rubric-concepts/${id}`,
        update: (id) => `${BASE}/rubric-concepts/${id}`,
        delete: (id) => `${BASE}/rubric-concepts/${id}`,
    },
    rubricBooleanqs: {
        list: (itemType, itemId) => `${BASE}/rubric-booleanqs/${itemType}/${itemId}`,
        create: `${BASE}/rubric-booleanqs`,
        one: (id) => `${BASE}/rubric-booleanqs/${id}`,
        update: (id) => `${BASE}/rubric-booleanqs/${id}`,
        delete: (id) => `${BASE}/rubric-booleanqs/${id}`,
    },
    criteria: {
        one: (type, id) => `${BASE}/criteria/${type}/${id}`,
        update: (type, id) => `${BASE}/criteria/${type}/${id}`,
        delete: (type, id) => `${BASE}/criteria/${type}/${id}`,
    },
    rubricExpressions: {
        create: `${BASE}/rubric-expressions`,
        one: (id) => `${BASE}/rubric-expressions/${id}`,
        update: (id) => `${BASE}/rubric-expressions/${id}`,
        delete: (id) => `${BASE}/rubric-expressions/${id}`,
    },
    rubricCodes: {
        create: `${BASE}/rubric-codes`,
        one: (id) => `${BASE}/rubric-codes/${id}`,
        update: (id) => `${BASE}/rubric-codes/${id}`,
        delete: (id) => `${BASE}/rubric-codes/${id}`,
    },
    rubricErrors: {
        create: `${BASE}/rubric-errors`,
        one: (id) => `${BASE}/rubric-errors/${id}`,
        update: (id) => `${BASE}/rubric-errors/${id}`,
        delete: (id) => `${BASE}/rubric-errors/${id}`,
    },
    // ── Rubric drafts (population / seek / merge) ─────────────────────────────
    rubricDrafts: {
        list: `${BASE}/rubric-drafts`,
        create: `${BASE}/rubric-drafts`,
        import: (populationId) => `${BASE}/rubric-drafts/${populationId}/import`,
        reviewData: (populationId) => `${BASE}/rubric-drafts/${populationId}/review-data`,
        confirm: (populationId) => `${BASE}/rubric-drafts/${populationId}/confirm`,
        batch: (itemType) => ({
            workdirs: `${BASE}/rubric-draft/batch/${itemType}/workdirs`,
            run: `${BASE}/rubric-draft/batch/${itemType}/run`,
            status: `${BASE}/rubric-draft/batch/${itemType}/status`,
            stop: `${BASE}/rubric-draft/batch/${itemType}/stop`,
            overview: `${BASE}/rubric-draft/batch/${itemType}/overview`,
            mergeWorkdir: `${BASE}/rubric-draft/batch/${itemType}/merge-workdir`,
            mergeStatus: `${BASE}/rubric-draft/batch/${itemType}/merge-status`,
            importMerge: `${BASE}/rubric-draft/batch/${itemType}/import-merge`,
        }),
    },
    // ── Sessions ──────────────────────────────────────────────────────────────
    sessions: {
        list: `${BASE}/sessions`,
        create: `${BASE}/sessions`,
        one: (id) => `${BASE}/sessions/${id}`,
        update: (id) => `${BASE}/sessions/${id}`,
        delete: (id) => `${BASE}/sessions/${id}`,
        persist: (id) => `${BASE}/sessions/${id}/persist`,
    },
    // ── Backups ───────────────────────────────────────────────────────────────
    backups: {
        list: `${BASE}/backups`,
        create: `${BASE}/backups`,
        export: `${BASE}/backups/export`,
        import: `${BASE}/backups/import`,
        restore: (id) => `${BASE}/backups/${id}/restore`,
        one: (id) => `${BASE}/backups/${id}`,
        delete: (id) => `${BASE}/backups/${id}`,
    },
    // ── Import/Export ─────────────────────────────────────────────────────────
    importJson: `${BASE}/import-json`,
    // ── PDF ───────────────────────────────────────────────────────────────────
    pdf: {
        studentQuestion: `${BASE}/pdf/student-question`,
        studentTest: `${BASE}/pdf/student-test`,
    },
};
