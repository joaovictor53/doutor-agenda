import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form"; // 1. Importe FormProvider
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

const loginSchema = z.object({
  email: z.string().trim().min(1, { message: "Email inválido" }).email(),
  password: z
    .string()
    .trim()
    .min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
});

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    // 'form' aqui contém todos os métodos e estado
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          router.push("/dashboard");
          toast.success("Login realizado com sucesso.");
        },
        onError: () => {
          toast.error("Email ou senha inválidos.");
        },
      },
    );
  }

  return (
    // 2. Envolva o seu <form> (ou o conteúdo dele) com FormProvider
    // e passe todas as propriedades de 'form' para ele.
    <FormProvider {...form}>
      <Card>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CardHeader>
            <CardTitle>Faça login</CardTitle>
            <CardDescription>Faça login para continuar</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <FormField
              control={form.control} // 'control' ainda é necessário aqui para FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>{" "}
                  {/* Agora terá acesso ao contexto */}
                  <FormControl>
                    <Input placeholder="Digite seu email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>{" "}
                  {/* Agora terá acesso ao contexto */}
                  <FormControl>
                    <Input
                      type="password" // Adicionado para o campo de senha
                      placeholder="Digite sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Entrar"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </FormProvider>
  );
};

export default LoginForm;
