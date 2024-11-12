import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { order: string } }
) {
  const order = ["0", "3", "6", "9", "12", "15"].includes(params.order)
    ? params.order
    : null;
  if (order == null) {
    return Response.json(
      { content: "Image not fount" },
      {
        status: 404,
      }
    );
  }

  const filePath = path.resolve(
    `src/app/api/diffusion-portrait-images/images/${params.order}.png`
  );
  const fileContent = fs.readFileSync(filePath, "base64");
  return Response.json(
    { content: fileContent },
    {
      status: 200,
    }
  );
}
