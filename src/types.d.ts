import type { Answer, Question } from "@prisma/client";

export interface HomePageAPIQuestion extends Question {
    _count: {
        answers: number;
    }
}

export interface QuestionPageAPIQuestion extends Question {
    answers: Answer[];
}