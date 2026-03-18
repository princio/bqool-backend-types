export interface ImportJsonBody {
    json?: Record<string, unknown>;
    classe?: string;
    test?: string;
    version_id?: string;
    answer_id?: string;
    expressions?: Array<{
        name?: string;
        expression?: string;
        severity?: number;
        definition?: string;
    }>;
    errors?: Array<{
        name: string;
        definition?: string;
        description?: string;
        severity?: number;
    }>;
    students?: string[];
    answers?: Record<string, string>;
}
