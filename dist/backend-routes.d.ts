import type { OkResponse, OkIdResponse, ImportJsonResponse } from './common';
import type { SchoolClassSummary, SchoolClassDetail, CreateSchoolClassRequest } from './class';
import type { StudentDetail, StudentTestsData, StudentTestAnswersData, AddStudentRequest } from './student';
import type { TestListItem, TestRef, TestDetail, TestRisultatiData, CreateTestRequest, UpdateTestRequest, AddQuestionToTestRequest, UpdateQuestionNumberRequest } from './test';
import type { QuestionListItem, QuestionDetail, CreateQuestionRequest, UpdateQuestionRequest } from './question';
import type { NavData, AnswerData } from './nav';
import type { AnswerDetail, UpdateAnswerRequest, SetGradeRequest, SetBonusRequest, UpsertBooleanQAnswerRequest, ToggleProtectionResponse, BatchCreateResponse, BatchResetResponse, WorkdirStatusResponse, RecreateWorkdirResponse, ImportAnswerOutputResult, ConfirmReviewResult } from './answer';
import type { CorrectItemResponse, PreviewItemResponse, AiModelRequest, LaunchItemCorrectionRequest, SaveReviewDraftRequest, ConfirmReviewRequest, ImportEvalRequest } from './ai';
import type { RubricDetail, RubricExportData, SyncRubricPayload, RubricConceptRow, RubricBooleanQRow, CreateRubricConceptRequest, CreateBooleanQRequest, UpdateBooleanQRequest, CreateExpressionRequest, CreateCodeRequest, CreateErrorRequest, UpdateRubricItemFieldRequest, CreateRubricItemRequest } from './rubric';
import type { PopulationListItem, CreatePopulationResponse, PopulationReviewData, ConfirmPopulationResult, PopulationItemPayload } from './rubric-draft';
import type { BackupListItem } from './backup';
import type { ImportJsonBody } from './import-export';
/**
 * Maps each route key to its HTTP method, body, params, query, and response types.
 *
 * Provides a single source of truth tying API routes to their HTTP contract.
 */
export interface BackendApiTypeMap {
    dashboard: {
        get: {
            method: 'GET';
            body: never;
            response: unknown;
        };
    };
    classes: {
        list: {
            method: 'GET';
            body: never;
            response: SchoolClassSummary[];
        };
        create: {
            method: 'POST';
            body: CreateSchoolClassRequest;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: SchoolClassDetail;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: CreateSchoolClassRequest;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
        students: {
            add: {
                method: 'POST';
                params: {
                    classId: number;
                };
                body: AddStudentRequest;
                response: OkIdResponse;
            };
            remove: {
                method: 'DELETE';
                params: {
                    classId: number;
                    studentId: number;
                };
                body: never;
                response: OkResponse;
            };
        };
    };
    tests: {
        list: {
            method: 'GET';
            body: never;
            response: TestListItem[];
        };
        create: {
            method: 'POST';
            body: CreateTestRequest;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: TestRef;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: UpdateTestRequest;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
        detail: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: TestDetail;
        };
        results: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: TestRisultatiData;
        };
        questions: {
            add: {
                method: 'POST';
                params: {
                    testId: number;
                };
                body: AddQuestionToTestRequest;
                response: OkResponse;
            };
            update: {
                method: 'PUT';
                params: {
                    testId: number;
                    questionId: number;
                };
                body: UpdateQuestionNumberRequest;
                response: OkResponse;
            };
            remove: {
                method: 'DELETE';
                params: {
                    testId: number;
                    questionId: number;
                };
                body: never;
                response: OkResponse;
            };
        };
        students: {
            summary: {
                method: 'GET';
                params: {
                    testId: number;
                    studentId: number;
                };
                body: never;
                response: unknown;
            };
            grade: {
                method: 'GET';
                params: {
                    testId: number;
                    studentId: number;
                };
                body: never;
                response: unknown;
            };
        };
    };
    questions: {
        list: {
            method: 'GET';
            body: never;
            response: QuestionListItem[];
        };
        create: {
            method: 'POST';
            body: CreateQuestionRequest;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: QuestionDetail;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: UpdateQuestionRequest;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
        gradeParams: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: unknown;
        };
    };
    students: {
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: StudentDetail;
        };
        tests: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: StudentTestsData;
        };
        nav: {
            method: 'GET';
            params: {
                id: number;
                questionId: number;
            };
            body: never;
            response: NavData;
        };
        answer: {
            method: 'GET';
            params: {
                id: number;
                questionId: number;
            };
            body: never;
            response: AnswerData;
        };
        testAnswers: {
            method: 'GET';
            params: {
                id: number;
                testId: number;
            };
            body: never;
            response: StudentTestAnswersData;
        };
    };
    answers: {
        create: {
            method: 'POST';
            body: unknown;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: AnswerDetail;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: UpdateAnswerRequest;
            response: OkResponse;
        };
        protected: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: never;
            response: ToggleProtectionResponse;
        };
        grade: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: SetGradeRequest;
            response: OkResponse;
        };
        bonus: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: SetBonusRequest;
            response: OkResponse;
        };
        workdir: {
            method: 'POST';
            params: {
                id: number;
            };
            body: never;
            response: RecreateWorkdirResponse;
        };
        workdirStatus: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: WorkdirStatusResponse;
        };
        byStudent: {
            method: 'GET';
            query: {
                student_id: number;
                question_id: number;
            };
            body: never;
            response: unknown;
        };
        byTest: {
            method: 'GET';
            query: {
                test_id: number;
            };
            body: never;
            response: unknown;
        };
        batch: {
            method: 'POST';
            body: unknown;
            response: BatchCreateResponse;
        };
        batchReset: {
            method: 'POST';
            body: unknown;
            response: BatchResetResponse;
        };
        correction: {
            method: 'DELETE';
            params: {
                category: string;
                itemId: number;
            };
            body: never;
            response: OkResponse;
        };
        ai: {
            importOutput: {
                method: 'POST';
                params: {
                    id: number;
                };
                body: ImportEvalRequest;
                response: ImportAnswerOutputResult;
            };
            reviewData: {
                method: 'GET';
                params: {
                    id: number;
                };
                body: never;
                response: unknown;
            };
            reviewDraft: {
                method: 'GET';
                params: {
                    id: number;
                };
                body: never;
                response: unknown;
            };
            saveReviewDraft: {
                method: 'PUT';
                params: {
                    id: number;
                };
                body: SaveReviewDraftRequest;
                response: OkResponse;
            };
            reviewConfirm: {
                method: 'POST';
                params: {
                    id: number;
                };
                body: ConfirmReviewRequest;
                response: ConfirmReviewResult;
            };
            correctBooleanq: {
                method: 'POST';
                params: {
                    answerId: number;
                    booleanqId: number;
                };
                body: AiModelRequest;
                response: CorrectItemResponse;
            };
            previewBooleanq: {
                method: 'POST';
                params: {
                    answerId: number;
                    booleanqId: number;
                };
                body: AiModelRequest;
                response: PreviewItemResponse;
            };
            correctItem: {
                method: 'POST';
                params: {
                    answerId: number;
                    itemType: string;
                    itemId: number;
                };
                body: AiModelRequest;
                response: CorrectItemResponse;
            };
            previewItem: {
                method: 'POST';
                params: {
                    answerId: number;
                    itemType: string;
                    itemId: number;
                };
                body: AiModelRequest;
                response: PreviewItemResponse;
            };
            assessCoherence: {
                method: 'POST';
                params: {
                    answerId: number;
                };
                body: AiModelRequest;
                response: unknown;
            };
        };
    };
    aiItemCorrection: {
        run: {
            method: 'POST';
            body: LaunchItemCorrectionRequest;
            response: unknown;
        };
        status: {
            method: 'GET';
            body: never;
            response: unknown;
        };
        stop: {
            method: 'POST';
            body: never;
            response: unknown;
        };
    };
    booleanAnswers: {
        init: {
            method: 'POST';
            body: unknown;
            response: unknown;
        };
        one: {
            method: 'PUT';
            params: {
                booleanqId: number;
            };
            body: UpsertBooleanQAnswerRequest;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                booleanqId: number;
            };
            body: never;
            response: OkResponse;
        };
        review: {
            method: 'POST';
            params: {
                booleanqId: number;
            };
            body: unknown;
            response: unknown;
        };
    };
    penmarks: {
        create: {
            method: 'POST';
            body: unknown;
            response: unknown;
        };
    };
    rubric: {
        detail: {
            method: 'GET';
            query: {
                question_id: number;
            };
            body: never;
            response: RubricDetail;
        };
        export: {
            method: 'GET';
            query: {
                question_id: number;
            };
            body: never;
            response: RubricExportData;
        };
        sync: {
            method: 'POST';
            body: SyncRubricPayload;
            response: OkResponse;
        };
    };
    rubricConcepts: {
        list: {
            method: 'GET';
            query: {
                question_id: number;
            };
            body: never;
            response: RubricConceptRow[];
        };
        create: {
            method: 'POST';
            body: CreateRubricConceptRequest;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: RubricConceptRow;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: UpdateRubricItemFieldRequest;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
    };
    rubricBooleanqs: {
        list: {
            method: 'GET';
            params: {
                itemType: string;
                itemId: number;
            };
            body: never;
            response: RubricBooleanQRow[];
        };
        create: {
            method: 'POST';
            body: CreateBooleanQRequest;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: RubricBooleanQRow;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: UpdateBooleanQRequest;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
    };
    rubricItems: {
        one: {
            method: 'GET';
            params: {
                type: string;
                id: number;
            };
            body: never;
            response: unknown;
        };
        update: {
            method: 'PUT';
            params: {
                type: string;
                id: number;
            };
            body: UpdateRubricItemFieldRequest;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                type: string;
                id: number;
            };
            body: never;
            response: OkResponse;
        };
    };
    rubricExpressions: {
        create: {
            method: 'POST';
            body: CreateExpressionRequest;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: unknown;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: CreateRubricItemRequest;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
    };
    rubricCodes: {
        create: {
            method: 'POST';
            body: CreateCodeRequest;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: unknown;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: CreateRubricItemRequest;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
    };
    rubricErrors: {
        create: {
            method: 'POST';
            body: CreateErrorRequest;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: unknown;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: CreateRubricItemRequest;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
    };
    rubricDrafts: {
        list: {
            method: 'GET';
            body: never;
            response: PopulationListItem[];
        };
        create: {
            method: 'POST';
            body: unknown;
            response: CreatePopulationResponse;
        };
        import: {
            method: 'POST';
            params: {
                populationId: string;
            };
            body: unknown;
            response: unknown;
        };
        reviewData: {
            method: 'GET';
            params: {
                populationId: string;
            };
            body: never;
            response: PopulationReviewData;
        };
        confirm: {
            method: 'POST';
            params: {
                populationId: string;
            };
            body: Record<string, PopulationItemPayload[]>;
            response: ConfirmPopulationResult;
        };
        batch: {
            workdirs: {
                method: 'POST';
                params: {
                    itemType: string;
                };
                body: unknown;
                response: unknown;
            };
            run: {
                method: 'POST';
                params: {
                    itemType: string;
                };
                body: unknown;
                response: unknown;
            };
            status: {
                method: 'GET';
                params: {
                    itemType: string;
                };
                body: never;
                response: unknown;
            };
            stop: {
                method: 'POST';
                params: {
                    itemType: string;
                };
                body: never;
                response: unknown;
            };
            overview: {
                method: 'GET';
                params: {
                    itemType: string;
                };
                body: never;
                response: unknown;
            };
            mergeWorkdir: {
                method: 'POST';
                params: {
                    itemType: string;
                };
                body: unknown;
                response: unknown;
            };
            mergeStatus: {
                method: 'GET';
                params: {
                    itemType: string;
                };
                body: never;
                response: unknown;
            };
            importMerge: {
                method: 'POST';
                params: {
                    itemType: string;
                };
                body: unknown;
                response: unknown;
            };
        };
    };
    sessions: {
        list: {
            method: 'GET';
            body: never;
            response: unknown[];
        };
        create: {
            method: 'POST';
            body: unknown;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: unknown;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: unknown;
            response: OkResponse;
        };
        delete: {
            method: 'DELETE';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
        persist: {
            method: 'POST';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
    };
    backups: {
        list: {
            method: 'GET';
            body: never;
            response: BackupListItem[];
        };
        create: {
            method: 'POST';
            body: unknown;
            response: OkIdResponse;
        };
        export: {
            method: 'GET';
            body: never;
            response: unknown;
        };
        import: {
            method: 'POST';
            body: unknown;
            response: unknown;
        };
        restore: {
            method: 'POST';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: BackupListItem;
        };
        delete: {
            method: 'DELETE';
            params: {
                id: number;
            };
            body: never;
            response: OkResponse;
        };
    };
    importJson: {
        run: {
            method: 'POST';
            body: ImportJsonBody;
            response: ImportJsonResponse;
        };
    };
    pdf: {
        studentQuestion: {
            method: 'GET';
            query: {
                student_id: number;
                question_id: number;
            };
            body: never;
            response: unknown;
        };
        studentTest: {
            method: 'GET';
            query: {
                student_id: number;
                test_id: number;
            };
            body: never;
            response: unknown;
        };
    };
}
export declare const API: {
    readonly dashboard: "/api/dashboard";
    readonly classes: {
        readonly list: "/api/classes";
        readonly create: "/api/classes";
        readonly one: (id: number) => string;
        readonly update: (id: number) => string;
        readonly delete: (id: number) => string;
        readonly students: {
            readonly add: (classId: number) => string;
            readonly remove: (classId: number, studentId: number) => string;
        };
    };
    readonly tests: {
        readonly list: "/api/tests";
        readonly create: "/api/tests";
        readonly one: (id: number) => string;
        readonly update: (id: number) => string;
        readonly delete: (id: number) => string;
        readonly detail: (id: number) => string;
        readonly results: (id: number) => string;
        readonly questions: {
            readonly add: (testId: number) => string;
            readonly update: (testId: number, questionId: number) => string;
            readonly remove: (testId: number, questionId: number) => string;
        };
        readonly students: {
            readonly summary: (testId: number, studentId: number) => string;
            readonly grade: (testId: number, studentId: number) => string;
        };
    };
    readonly questions: {
        readonly list: "/api/questions";
        readonly create: "/api/questions";
        readonly one: (id: number) => string;
        readonly update: (id: number) => string;
        readonly delete: (id: number) => string;
        readonly gradeParams: (id: number) => string;
    };
    readonly students: {
        readonly one: (id: number) => string;
        readonly tests: (id: number) => string;
        readonly nav: (id: number, questionId: number) => string;
        readonly answer: (id: number, questionId: number) => string;
    };
    readonly answers: {
        readonly create: "/api/answers";
        readonly one: (id: number) => string;
        readonly protected: (id: number) => string;
        readonly grade: (id: number) => string;
        readonly bonus: (id: number) => string;
        readonly workdir: (id: number) => string;
        readonly workdirStatus: (id: number) => string;
        readonly byStudent: "/api/answers/by-student";
        readonly byTest: "/api/answers/by-test";
        readonly batch: "/api/answers/batch";
        readonly batchReset: "/api/answers/batch-reset";
        readonly correction: (category: string, itemId: number) => string;
        readonly ai: {
            readonly importOutput: (id: number) => string;
            readonly reviewData: (id: number) => string;
            readonly reviewDraft: (id: number) => string;
            readonly reviewConfirm: (id: number) => string;
            readonly correctBooleanq: (answerId: number, booleanqId: number) => string;
            readonly previewBooleanq: (answerId: number, booleanqId: number) => string;
            readonly correctItem: (answerId: number, itemType: string, itemId: number) => string;
            readonly previewItem: (answerId: number, itemType: string, itemId: number) => string;
            readonly assessCoherence: (answerId: number) => string;
        };
    };
    readonly aiItemCorrection: {
        readonly run: "/api/ai/item-correction/run";
        readonly status: "/api/ai/item-correction/status";
        readonly stop: "/api/ai/item-correction/stop";
    };
    readonly booleanAnswers: {
        readonly init: "/api/boolean-answers/init";
        readonly one: (booleanqId: number) => string;
        readonly review: (booleanqId: number) => string;
    };
    readonly penmarks: {
        readonly create: "/api/penmarks";
    };
    readonly rubric: {
        readonly detail: "/api/rubric/detail";
        readonly export: "/api/rubric/export";
        readonly sync: "/api/rubric/sync";
    };
    readonly rubricConcepts: {
        readonly list: "/api/rubric-concepts";
        readonly create: "/api/rubric-concepts";
        readonly one: (id: number) => string;
        readonly update: (id: number) => string;
        readonly delete: (id: number) => string;
    };
    readonly rubricBooleanqs: {
        readonly list: (itemType: string, itemId: number) => string;
        readonly create: "/api/rubric-booleanqs";
        readonly one: (id: number) => string;
        readonly update: (id: number) => string;
        readonly delete: (id: number) => string;
    };
    readonly rubricItems: {
        readonly one: (type: string, id: number) => string;
        readonly update: (type: string, id: number) => string;
        readonly delete: (type: string, id: number) => string;
    };
    readonly rubricExpressions: {
        readonly create: "/api/rubric-expressions";
        readonly one: (id: number) => string;
        readonly update: (id: number) => string;
        readonly delete: (id: number) => string;
    };
    readonly rubricCodes: {
        readonly create: "/api/rubric-codes";
        readonly one: (id: number) => string;
        readonly update: (id: number) => string;
        readonly delete: (id: number) => string;
    };
    readonly rubricErrors: {
        readonly create: "/api/rubric-errors";
        readonly one: (id: number) => string;
        readonly update: (id: number) => string;
        readonly delete: (id: number) => string;
    };
    readonly rubricDrafts: {
        readonly list: "/api/rubric-drafts";
        readonly create: "/api/rubric-drafts";
        readonly import: (populationId: string) => string;
        readonly reviewData: (populationId: string) => string;
        readonly confirm: (populationId: string) => string;
        readonly batch: (itemType: string) => {
            workdirs: string;
            run: string;
            status: string;
            stop: string;
            overview: string;
            mergeWorkdir: string;
            mergeStatus: string;
            importMerge: string;
        };
    };
    readonly sessions: {
        readonly list: "/api/sessions";
        readonly create: "/api/sessions";
        readonly one: (id: number) => string;
        readonly update: (id: number) => string;
        readonly delete: (id: number) => string;
        readonly persist: (id: number) => string;
    };
    readonly backups: {
        readonly list: "/api/backups";
        readonly create: "/api/backups";
        readonly export: "/api/backups/export";
        readonly import: "/api/backups/import";
        readonly restore: (id: number) => string;
        readonly one: (id: number) => string;
        readonly delete: (id: number) => string;
    };
    readonly importJson: "/api/import-json";
    readonly pdf: {
        readonly studentQuestion: "/api/pdf/student-question";
        readonly studentTest: "/api/pdf/student-test";
    };
};
