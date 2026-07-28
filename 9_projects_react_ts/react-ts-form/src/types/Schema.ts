import { z } from "zod";

export const formSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nome obrigatório")
      .min(3, "O nome deve ter no mínimo 3 caracteres"),
    lastName: z
      .string()
      .min(1, "Sobrenome obrigatório")
      .min(3, "O sobrenome deve ter no mínimo 3 caracteres"),
    gender: z.string().min(1, "Genêro obrigatório"),
    email: z.email("E-mail obrigatório"),
    password: z
      .string()
      .min(3, "Senha obrigatória")
      .min(6, "A senha deve ter no mínimo 6 digitos"),
    confirmPassword: z.string(),
    checkTerm: z.literal(true, {
      error: "Você precisa aceitar os termos",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type FormData = z.infer<typeof formSchema>;
