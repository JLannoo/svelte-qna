import type { ServerLoad } from "@sveltejs/kit";
import prisma from "../../../../prisma/prisma";

export const ssr = true;

export const load: ServerLoad = async ({ params }) => {
    const question = await prisma.question.findUnique({
        where: {
            id: +(params.id || ""),
        },
        include: {
            answers: true,
        }
    })

    return {question};
}