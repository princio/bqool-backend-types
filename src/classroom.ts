import type { TestRef } from './test';
import type { Question } from './question';
import type { StudentSummary } from './student';

export interface ClassRoomSummary {
  id: number;
  name: string;
  students_count: number;
  tests: (TestRef & { questions: Pick<Question, 'id' | 'name'>[] })[];
}

export interface ClassRoomDetail {
  id: number;
  name: string;
  students: StudentSummary[];
  tests: (TestRef & { questions_count: number })[];
}

export interface CreateClassRoomRequest { name: string }
