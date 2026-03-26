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
        byStudent: `${BASE}/answers/by-student`,
        byTest: `${BASE}/answers/by-test`,
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
    criteria: {
        one: (type, id) => `${BASE}/criteria/${type}/${id}`,
        update: (type, id) => `${BASE}/criteria/${type}/${id}`,
        delete: (type, id) => `${BASE}/criteria/${type}/${id}`,
    },
    // ── PDF ───────────────────────────────────────────────────────────────────
    pdf: {
        studentQuestion: `${BASE}/pdf/student-question`,
        studentTest: `${BASE}/pdf/student-test`,
    },
};
