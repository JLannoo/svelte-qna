import type { RequestHandler } from "@sveltejs/kit";
import prisma from "../../../../prisma/prisma";

export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData();
    const question = formData.get("content");

    if (!question) {
        return new Response('Question is required', { status: 400 });
    }

    const newQuestion = await prisma.question.create({
        data: {
            content: question.toString(),
            createdAt: new Date(),
        },
    });

    return new Response(JSON.stringify(newQuestion), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}