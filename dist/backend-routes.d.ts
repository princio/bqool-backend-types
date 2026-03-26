import type { OkResponse, OkIdResponse } from './common';
import type { ClassRoomSummary, ClassRoomDetail, CreateClassRoomRequest } from './classroom';
import type { StudentDetail, StudentTestsData, StudentTestAnswersData, AddStudentRequest } from './student';
import type { TestListItem, TestRef, TestDetail, TestRisultatiData, CreateTestRequest, UpdateTestRequest, AddQuestionToTestRequest, UpdateQuestionNumberRequest } from './test';
import type { QuestionListItem, QuestionDetail, CreateQuestionRequest, UpdateQuestionRequest } from './question';
import type { NavData, AnswerData } from './nav';
import type { AnswerDetail, UpdateAnswerRequest, SetGradeRequest, SetBonusRequest, UpsertBooleanQAnswerRequest, ToggleProtectionResponse } from './answer';
import type { RubricDetail, RubricExportData, SyncRubricPayload, BooleanQ, CreateBooleanQRequest, UpdateBooleanQRequest, UpdateCriterionFieldRequest } from './rubric';
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
            response: ClassRoomSummary[];
        };
        create: {
            method: 'POST';
            body: CreateClassRoomRequest;
            response: OkIdResponse;
        };
        one: {
            method: 'GET';
            params: {
                id: number;
            };
            body: never;
            response: ClassRoomDetail;
        };
        update: {
            method: 'PUT';
            params: {
                id: number;
            };
            body: CreateClassRoomRequest;
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
    };
    booleanqs: {
        list: {
            method: 'GET';
            params: {
                itemType: string;
                itemId: number;
            };
            body: never;
            response: BooleanQ[];
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
            response: BooleanQ;
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
    criteria: {
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
            body: UpdateCriterionFieldRequest;
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
        readonly byStudent: "/api/answers/by-student";
        readonly byTest: "/api/answers/by-test";
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
    readonly criteria: {
        readonly one: (type: string, id: number) => string;
        readonly update: (type: string, id: number) => string;
        readonly delete: (type: string, id: number) => string;
    };
    readonly pdf: {
        readonly studentQuestion: "/api/pdf/student-question";
        readonly studentTest: "/api/pdf/student-test";
    };
};
