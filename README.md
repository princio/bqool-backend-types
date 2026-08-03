# bqool-contracts

HTTP API contracts for [BQC — Boolean Question Corrector](https://github.com/princio/bqool) — an AI-assisted grading system for open-ended student answers.

**Start at [princio/bqool](https://github.com/princio/bqool)** for what the system does and how the four repositories fit together.

---

## What this is

The single declaration of the API surface shared by [bqc-backend](https://github.com/princio/bqc-backend) and [bqool-frontend-v2](https://github.com/princio/bqool-frontend-v2). It contains no logic — only types, built from the domain types in [`@princio/bqool`](https://github.com/princio/bqool).

Every endpoint is an explicitly named namespace pairing its request and response:

```typescript
/** Update the grade parameters of a question */
/** PATCH /question/:id/grade-params */
export namespace UpdateQuestionGradeParams {
  export interface Request { ... }
  export interface Response { ... }
}
```

No inline or anonymous payload types, anywhere. The rule exists so both consumers name the same type rather than each writing a structurally similar one that drifts.

## The point of a contract package

This package is a contract, not an implementation. A type here does not get edited because a consumer disagrees with it — the consumer is what's wrong. There are exactly two reasons to change a type:

1. the upstream `bqool` domain type changed and this needs to re-align,
2. the API shape is being deliberately redesigned.

If a backend service returns something that doesn't match a type here, the service gets fixed.

That direction is enforced rather than trusted. `tsc` covers type compatibility, and [`bqool`'s contract compiler](https://github.com/princio/bqool#the-contract-compiler) parses the NestJS controllers and the frontend API layer with ts-morph to verify that every declared route is actually implemented on both ends — and that neither end calls a route that was never declared.

```
bqool  →  bqool-contracts  →  bqc-backend
                           →  bqool-frontend-v2
```

## Layout

```
src/
  classroom.ts  student.ts  test.ts  student-test.ts
  question.ts   criterion.ts  booleanq.ts  booleanq-answer.ts
  answer.ts     correction.ts  penmark.ts  grid.ts
  pdf.ts        common.ts
  index.ts
```

One file per domain entity, mirroring `bqool/src`. `correction.ts` is the exception — `Correction` is a virtual entity assembled from penmarks and booleanq-answers, with no table behind it.

## Use

```bash
npm install
npm run build     # tsc
npm run check     # biome
npm run format    # biome --write
```

Consumed via an npm `file:` dependency, so `@princio/bqool` must be built first. `npm run update-bqool` refreshes the linked domain package after an upstream change.
