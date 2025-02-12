import { neon } from "@neondatabase/serverless";

export const GET = async (request: Request) => {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);

    const response = await sql`SELECT * FROM drivers`;

    return Response.json({ data: response });
  } catch (e) {
    console.log(e);
  }
};
