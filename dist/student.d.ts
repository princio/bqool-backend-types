import type { TestRef, TestListItem } from './test';
import type { ClassRoomDetail } from './classroom';
import type { AnswerDetail } from './answer';
export interface StudentSummary {
    id: number;
    name: string;
}
export interface StudentDetail {
    id: number;
    name: string;
    classroom_id: number;
    classroom_name: string;
}
export interface StudentTestData {
    test: TestRef;
    classroom: ClassRoomDetail;
    student: StudentSummary;
    questions: {
        question_id: number;
        question_name: string;
        score: null;
    }[];
    media: null;
    fascia: null;
}
export interface StudentTestsData {
    student: StudentSummary;
    classroom: ClassRoomDetail;
    tests: {
        id: number;
        name: string;
        questions: {
            id: number;
            name: string;
            score: null;
            word_count: number;
            isblank: boolean;
            has_answer: boolean;
        }[];
        media: number | null;
        fascia: null;
    }[];
}
export interface StudentTestAnswersData {
    test: TestListItem;
    student: StudentSummary;
    final_grade: number | null;
    answers: {
        question_id: number;
        question_name: string;
        question_text: string;
        question_number: number | null;
        answer: AnswerDetail | null;
    }[];
}
export interface AddStudentRequest {
    name: string;
}
