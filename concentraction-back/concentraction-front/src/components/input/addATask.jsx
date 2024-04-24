import { Input, TextArea } from "./input";
import { CustomDropdown } from "./dropdown";
import InputDatePicker from "./datePicker";
import { AddButton } from "../button";
import { useForm, Controller } from "react-hook-form";

//"handleSubmit" will validate your inputs before invoking "onSubmit"
//register : register your input into the hook by invoking the "register" function
//include validation with required or other standard HTML validation rules
//errors.nameOfInput : {/* errors will return when field validation fails  */}

export function AddATask({}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="number"
        name="Nom de la tâche"
        register={register}
        aria-invalid={errors.example1 ? "true" : "false"}
      />
      <Input name="example2" register={register} required />

      <TextArea name="Description" register={register} />
      <Controller
        control={control}
        name="Échéance"
        render={({ field: { onChange, value } }) => (
          <InputDatePicker onChange={onChange} value={value} />
        )}
      />

      <Controller
        control={control}
        name="Date de début"
        render={({ field: { onChange, value } }) => (
          <InputDatePicker onChange={onChange} value={value} />
        )}
      />

      <Controller
        control={control}
        name="Statut"
        render={({ field: { onChange, value } }) => (
          <CustomDropdown
            options={[{ name: "Example 1" }, { name: "Example 2" }]}
            onChange={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="Catégorie"
        render={({ field: { onChange, value } }) => (
          <CustomDropdown
            options={[{ name: "Example 1" }, { name: "Example 2" }]}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <AddButton role="submit" />
    </form>
  );
}
