import type { RequestHandler } from "@sveltejs/kit";
import prisma from "../../../../prisma/prisma";

export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData();

    const content = formData.get("content");
    const questionId = formData.get("questionId");

    if (!content || !questionId) {
        return new Response("Missing content or questionId", {status: 400});
    }

    const answer = await prisma.answer.create({
        data: {
            content: content.toString(),
            question: {
                connect: {
                    id: parseInt(questionId.toString()),
                },
            },
        },
    });

    return new Response(JSON.stringify(answer), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        },
    });
}