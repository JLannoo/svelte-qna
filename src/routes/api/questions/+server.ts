import prisma from "../../../../prisma/prisma";

export async function GET(){
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

    return new Response(JSON.stringify(questions), {status: 200});
}