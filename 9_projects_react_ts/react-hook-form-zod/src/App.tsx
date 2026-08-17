import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "./App.css";

const schema = z
  .object({
    name: z.string().min(3, "Nome inválido"),
    lastName: z.string().min(3, "Sobrenome inválido"),
    gender: z.string("Genêro inválido"),
    email: z.email("E-mail inválido"),
    password: z.string().min(3, "Senha inválida"),
    confirmPass: z.string().min(3, "As senhas não coincidem"),
    terms: z.boolean().refine((value) => value === true, {
      message: "Concorde com os termos",
    }),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "As senhas não coincidem",
    path: ["confirmPass"],
  });

type FormData = z.infer<typeof schema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      gender: "men",
      terms: false,
    },
  });
  const handleForm = (data: FormData) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex flex-col gap-4 mt-20">
      <h1 className="text-center font-bold text-2xl">
        React Hook Form com TypeScript
      </h1>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="flex flex-col gap-4 border border-gray-400 bg-white rounded-xl p-6 mx-auto w-full max-w-100"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nome:</label>
          <input
            className="border border-gray-400 h-11 rounded-sm px-2"
            id="name"
            type="text"
            placeholder="Digite seu nome..."
            title="Digite seu nome"
            {...register("name")}
          />
          <span className="text-red-500">{errors.name?.message}</span>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName">Sobrenome:</label>
          <input
            className="border border-gray-400 h-11 rounded-sm px-2"
            id="lastName"
            type="text"
            placeholder="Digite seu sobrenome..."
            title="Digite seu sobrenome"
            {...register("lastName")}
          />
          <span className="text-red-500">{errors.lastName?.message}</span>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="gender">Gênero:</label>
          <select
            id="gender"
            className="border border-gray-400 h-11 rounded-sm px-2"
            {...register("gender")}
          >
            <option value="men">Homem</option>
            <option value="women">Mulher</option>
          </select>
          <span className="text-red-500">{errors.gender?.message}</span>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail:</label>
          <input
            className="border border-gray-400 h-11 rounded-sm px-2"
            id="email"
            type="email"
            placeholder="Digite seu e-mail..."
            title="Digite seu e-mail"
            {...register("email")}
          />
          <span className="text-red-500">{errors.email?.message}</span>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Senha:</label>
          <input
            className="border border-gray-400 h-11 rounded-sm px-2"
            type="password"
            placeholder="Digite sua senha..."
            title="Digite sua senha"
            {...register("password")}
          />
          <span className="text-red-500">{errors.password?.message}</span>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPass">Confirme sua Senha:</label>
          <input
            className="border border-gray-400 h-11 rounded-sm px-2"
            id="confirmPass"
            type="password"
            placeholder="Confirme sua senha..."
            title="Confirme sua senha"
            {...register("confirmPass")}
          />
          <span className="text-red-500">{errors.confirmPass?.message}</span>
        </div>
        <div className="flex gap-1">
          <input type="checkbox" id="terms" {...register("terms")} />
          <label htmlFor="terms">Concordo com os termos.</label>
          <span className="text-red-500">{errors.terms?.message}</span>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white h-11 rounded-sm font-semibold cursor-pointer transition-colors duration-400 hover:bg-blue-700"
        >
          Enviar Formulário
        </button>
      </form>
    </div>
  );
}

export default App;
