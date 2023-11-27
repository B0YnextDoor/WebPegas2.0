import styles from "./ConnectForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  phoneNumber: string;
}

export const ConnectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data); //действие с полученными данными
  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <label>Ваше имя:</label>
      <input
        type="text"
        {...register("firstName", {
          required: { value: true, message: "Заполните это поле!" },
        })}
        placeholder="Введите имя"
      />
      {errors?.firstName?.type === "required" && (
        <p>{errors.firstName.message}</p>
      )}
      <label>Ваш номер телефона:</label>
      <input
        type="text"
        {...register("phoneNumber", {
          required: { value: true, message: "Заполните это поле!" },
          pattern: {
            value:
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
            message: "Неверный номер телефона!",
          },
        })}
        placeholder="Введите номер"
      />
      {(errors?.phoneNumber?.type === "required" ||
        errors?.phoneNumber?.type == "pattern") && (
        <p>{errors.phoneNumber.message}</p>
      )}
      <input type="submit" value="Связаться с нами" />
    </form>
  );
};
