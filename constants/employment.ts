import { z } from "zod";

export type EmailFormValues = z.infer<typeof employmentFormSchema>;

export const AREA = ["수의사", "테크니션", "리셉션"] as const;
export const CAREER = [
  "신입",
  "2년차",
  "3년차",
  "4년차",
  "5년차 이상",
] as const;
export const MAJOR = ["내과", "외과", "영상", "기타"] as const;

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
  major: z.enum(MAJOR).optional(),
  career: z.enum(CAREER, {
    required_error: "경력을 입력해주세요",
  }),
  phone: z.string({ required_error: "전화번호를 입력해주세요." }),
  contents: z.string().min(1, {
    message: "이력을 자유형식으로 작성해주세요.",
  }),
});
