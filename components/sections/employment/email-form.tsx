"use client";

import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import { useToast } from "@/components/ui/use-toast";
import { AREA, employmentFormSchema } from "@/constants/employment";
import emailLottie from "@/public/email-lottie.json";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie-player";
import { z } from "zod";

export default function EmailForm() {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof employmentFormSchema>>({
    resolver: zodResolver(employmentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      area: undefined,
      phone: undefined,
      attachments: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof employmentFormSchema>) => {
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
            className="grid grid-cols-2 gap-4 w-[1024px] max-w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>성함</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>이메일 주소</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                        <SelectValue />
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>연락처</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attachments"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>이력서 첨부</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      multiple
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                          Promise.all(
                            Array.from(files).map(async (file) => ({
                              filename: file.name,
                              content: Buffer.from(
                                await file.arrayBuffer()
                              ).toString("base64"),
                            }))
                          ).then((filesArray) => {
                            field.onChange(filesArray);
                          });
                        }
                      }}
                    />
                  </FormControl>
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
