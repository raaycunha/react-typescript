import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema, type FormData } from "../types/Schema";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "",
    },
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex flex-col items-center gap-2 mx-2">
      <h1 className="text-lg text-center font-bold p-2 md:text-2xl">
        React Hook Form com TypeScript
      </h1>
      <form
        className="flex flex-col gap-2 w-full max-w-120 p-4 bg-white rounded-md border border-gray-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label className="font-semibold md:text-lg" htmlFor="name">
            Nome:
          </label>
          <input
            className="border border-gray-300 rounded-md h-11 px-2"
            type="text"
            id="name"
            placeholder="Digite seu nome..."
            title="Digite seu nome"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 md:text-lg">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold md:text-lg" htmlFor="lastUserName">
            Sobrenome:
          </label>
          <input
            className="border border-gray-300 rounded-md h-11 px-2"
            type="text"
            id="lastUserName"
            placeholder="Digite seu sobrenome..."
            title="Digite seu sobrenome"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500 md:text-lg">{errors.lastName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold md:text-lg" htmlFor="selectGender">
            Gênero:
          </label>
          <select
            className="border border-gray-300 rounded-md h-11 px-2"
            id="selectGender"
            title="Selecione seu gênero"
            {...register("gender")}
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="M">Homem</option>
            <option value="W">Mulher</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 md:text-lg">{errors.gender.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold md:text-lg" htmlFor="inEmail">
            E-mail:
          </label>
          <input
            className="border border-gray-300 rounded-md h-11 px-2"
            type="email"
            id="inEmail"
            placeholder="Digite seu e-mail..."
            title="Digite seu email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 md:text-lg">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold md:text-lg" htmlFor="userpass">
            Senha:
          </label>
          <input
            className="border border-gray-300 rounded-md h-11 px-2"
            type="password"
            id="userpass"
            placeholder="Digite a sua senha..."
            title="Digite a sua senha"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 md:text-lg">{errors.password.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold md:text-lg" htmlFor="confirmPassword">
            Confirme a sua senha:
          </label>
          <input
            className="border border-gray-300 rounded-md h-11 px-2"
            type="password"
            id="confirmPassword"
            placeholder="Confirme sua senha..."
            title="Confirme sua senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 md:text-lg">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <input type="checkbox" id="checkTerm" {...register("checkTerm")} />
            <label className="font-semibold md:text-lg" htmlFor="checkTerm">
              Concordo com os termos
            </label>
          </div>
          {errors.checkTerm && (
            <p className="text-red-500 md:text-lg">
              {errors.checkTerm.message}
            </p>
          )}
        </div>
        <button
          className="bg-[#22D3EF] text-white font-bold text-lg h-11 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-[#1db7cf]"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Form;
