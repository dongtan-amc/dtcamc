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
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";
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
      <motion.div
        className="flex flex-col items-center gap-10 md:flex-row"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-full md:w-1/2 lg:text-lg">
          <p>
            24시 동탄시티동물의료센터는 반려동물의 질환에 대해서 전문적으로
            치료하는 병원으로 구성되어 있습니다.
            <br />
            <br /> 세부적으로 정형외과, 연부조직수술, 신장/혈액투석, 종양외과를
            포함한 항암치료, 중환자치료센터, 그리고 진단영상센터로 구성되어
            있습니다. 이러한 구성을 통해 중증질환의 치료시에 보다 발전된 진단및
            치료방식으로 운영되도록 노력하고 있습니다. <br />
            <br /> 본원의 직원채용관은 인간미 있는 효율성을 중요시합니다. 따라서
            근무자 또한 삶의 질이 유지되어야만 하며 즐거운 환경에서 근무하도록
            노력하고 있습니다. 그에 따라 선한인성과 올바른 근무윤리를 지닌
            인재상이 필요합니다.
            <br />
            <br /> 본원의 직원복지와 의무는 노무법에 따른 고용형태를 지니고
            있습니다. <br />
            <br />
            감사합니다.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 lg:w-1/2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2 lg:col-span-1">
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
                <FormItem className="col-span-2 lg:col-span-1">
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
                <FormItem className="col-span-2 lg:col-span-1">
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
                <FormItem className="col-span-2 lg:col-span-1">
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
                  <FormLabel>이력서 첨부 ( 다수 첨부 가능 )</FormLabel>
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
                                await file.arrayBuffer(),
                              ).toString("base64"),
                            })),
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

            <Button
              type="submit"
              className="col-span-2 mt-4 md:mt-10"
              disabled={isSending}
            >
              {isSending ? (
                "전송중..."
              ) : (
                <div className="flex items-center gap-2">
                  메일 전송
                  <LuSend />
                </div>
              )}
            </Button>
          </form>
        </Form>
      </motion.div>
    </Container>
  );
}
