import { NextResponse } from "next/server";

let consultas: any[] = [];

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const nuevaConsulta = {
            id: Date.now(),
            estado: "nueva",
            ...body,
        };

        consultas.push(nuevaConsulta);

        console.log("Consultas guardadas:", consultas);

        return NextResponse.json({
            message: "Consulta guardada correctamente",
            data: nuevaConsulta,
        });
    } catch (error) {
        console.error("Error al guardar la consulta:", error);

        return NextResponse.json(
            { message: "Error al procesar la consulta" },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(consultas);
}

export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const { id, estado } = body;

        consultas = consultas.map((consulta) =>
            consulta.id === id
                ? { ...consulta, estado }
                : consulta
        );

        return NextResponse.json({
            message: "Estado actualizado",
        });
    } catch (error) {
        return NextResponse.json(
            { message: "Error al actualizar estado" },
            { status: 500 }
        );
    }
}