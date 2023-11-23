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
        {...register("firstName", { required: true })}
        placeholder="Введите имя"
      />
      {errors?.firstName?.type === "required" && <p>Заполните это поле!</p>}
      <label>Ваш номер телефона:</label>
      <input
        type="text"
        {...register("phoneNumber", { required: true })}
        placeholder="Введите номер"
      />
      {errors?.firstName?.type === "required" && <p>Заполните это поле!</p>}
      <input type="submit" value="Связаться с нами" />
    </form>
  );
};
