import { register } from "@/app/gsheets";

export async function POST(request: Request) {
  const { name, email, phone } = await request.json()

  try {
  await register(name, email, phone)
    return new Response( "success")
  } catch (e) {
    console.log(e)
    return new Response( "Internal server error", {status:500})
  }
}
