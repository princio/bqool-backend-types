/** Shape of a single rubric item in a population confirm payload */
export interface PopulationItemPayload {
  name?: string;
  expression?: string;
  definition?: string;
  description?: string;
  severity?: number;
  booleanqs?: { text: string }[];
}

/** Raw JSON output shape written by Claude to output/population.json */
export interface PopulationJsonOutput {
  concepts?: unknown[];
  expressions?: unknown[];
  code?: unknown[];
  errors?: unknown[];
}

export interface PopulationReviewData {
  question_id: number;
  population_id: string;
  concepts: unknown[];
  expressions: unknown[];
  code: unknown[];
  errors: unknown[];
}

export interface CreatePopulationResponse {
  id: string;
  path: string;
  relativePath: string;
  question_id: number;
}

export interface ConfirmPopulationResult {
  executed: number;
  errors: string[];
}

export interface PopulationListItem {
  id: string;
  path: string;
  has_output: boolean;
}
