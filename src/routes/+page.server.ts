import type { ServerLoad } from "@sveltejs/kit";
import prisma from "../../prisma/prisma";

export const ssr = true;

export const load: ServerLoad = async () => {
    const questions = await prisma.question.findMany({
        include: {
            _count: {
                select: {
                    answers: true,
                }
            }
        },
        orderBy: {
            id: "desc"
        }
    });

    return {questions};
}