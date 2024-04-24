import { type EmailFormValues } from "@/constants/employment";
import { NextRequest } from "next/server";
import * as React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, area, career, contents, phone, major }: EmailFormValues =
    await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: `Acme <noreply@resend.dev>`,
      // TODO: use real email
      to: "junsgk@gmail.com",
      subject: `[DTCT 채용] ${area} / ${name}`,
      react: EmailTemplate({
        name,
        email,
        area,
        career,
        contents,
        major,
        phone,
      }) as React.ReactElement,
      reply_to: email,
    });

    if (error) {
      return Response.json({ statusCode: 400, error });
    }

    return Response.json({ statusCode: 200, data });
  } catch (error) {
    return Response.json({ statusCode: 400, error });
  }
}
