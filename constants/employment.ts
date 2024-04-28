import { z } from "zod";

export type EmailFormValues = z.infer<typeof employmentFormSchema>;

export const AREA = [
  "수의사",
  "동물보건과(자격유)",
  "동물보건과(자격무)",
  "리셉션",
  "원무과",
] as const;

const fileSchema = z.object({
  filename: z.string(),
  content: z.any(),
});

export const employmentFormSchema = z.object({
  name: z.string().min(2, {
    message: "이름은 두글자 이상으로 입력해주세요.",
  }),
  email: z
    .string({ required_error: "이메일을 입력해주세요." })
    .email({ message: "올바른 형식의 이메일을 입력해주세요." }),
  area: z.enum(AREA, {
    required_error: "지원 직종을 선택해주세요.",
  }),
  phone: z.string({ required_error: "전화번호를 입력해주세요." }),
  attachments: z.array(fileSchema, {
    required_error: "이력서를 첨부해주세요.",
  }),
});
