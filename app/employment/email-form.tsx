"use client";

import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Lottie from "react-lottie-player";
import emailLottie from "@/public/email-lottie.json";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export type EmailFormValues = z.infer<typeof formSchema>;
const AREA = ["수의사", "테크니션", "리셉션"] as const;
const CAREER = ["신입", "2년차", "3년차", "4년차", "5년차 이상"] as const;
const MAJOR = ["내과", "외과", "영상", "기타"] as const;

const formSchema = z.object({
  name: z.string({ required_error: "이름를 입력해주세요." }).min(2, {
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
  contents: z.string({ required_error: "이력을 자유형식으로 작성해주세요." }),
});

export default function EmailForm() {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      area: undefined,
      major: undefined,
      career: undefined,
      contents: "",
      phone: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSending(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.statusCode === 200) {
        toast({
          title: "지원해주셔서 감사합니다😊",
          description:
            '"010-1234-5678"로 성함을 남겨주시면 빠르게 연락드리겠습니다.',
        });
      } else {
        toast({
          title: "전송 중 에러가 발생하였습니다.",
          description: "직접 메일을 보내주시면 연락드리겠습니다.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "전송 중 에러가 발생하였습니다.",
        description: "직접 메일을 보내주시면 연락드리겠습니다.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center">
        <Lottie loop animationData={emailLottie} play />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 py-10 md:w-4/5 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>성함</FormLabel>
                  <FormControl>
                    <Input placeholder="성함" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input placeholder="dtct@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>지원분야</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="지원분야" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {AREA.map((element) => (
                        <SelectItem value={element} key={element}>
                          {element}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="major"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>전공</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="학위자만 선택" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {MAJOR.map((element) => (
                        <SelectItem value={element} key={element}>
                          {element}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="career"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>경력</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="경력" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CAREER.map((element) => (
                        <SelectItem value={element} key={element}>
                          {element}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>연락처</FormLabel>
                  <FormControl>
                    <Input placeholder="010-1234-5678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contents"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>이력</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={10}
                      placeholder="안녕하세요..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    이력을 자유형식으로 작성해주세요.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="col-span-2" disabled={isSending}>
              {isSending ? "전송중..." : "전송"}
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
}
