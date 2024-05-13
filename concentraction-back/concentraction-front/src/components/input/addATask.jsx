/** Organism that tasks several inputs, submit button and dropdown. It includes the logic to add a task and cache it (state management) : 
 * with apollo server (GraphQL)  : implement mutation to add a task and cache 
 * with react hook form (UI) : handles errors and validation
 */

import { Input, TextArea } from "./input";
import { CustomDropdown } from "./dropdown";
import InputDatePicker from "./datePicker";
import { AddButton } from "../button";
import { useForm, Controller } from "react-hook-form";

//Apollo client import
import { useMutation } from "@apollo/client";
// import { ADD_TASK, GET_USER_TASKS } from "../../services/queries.jsx";

//"handleSubmit" will validate your inputs before invoking "onSubmit"
//register : register your input into the hook by invoking the "register" function
//include validation with required or other standard HTML validation rules
//errors.nameOfInput : {/* errors will return when field validation fails  */}
//Controller allows us to use react-hook-form with custom components and third party components like customDropdown and datePicker

export function AddATask() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // //extracts addTask mutation from useMutation hook, loading, error
  // const[addTask, { loading, error}] = useMutation(ADD_TASK, {
  //   onCompleted: (data) => {
  //     console.log(data)
  //   },
  //   update(cache, {data}) {
  //     //current state of tasks
  //     const {tasks} = cache.readQuery({
  //       query: GET_USER_TASKS}
  //     );
  //     //change the data within the cache for get user tasks, copying current tasks and adding the new one
  //     cache.writeQuery({
  //       query:GET_USER_TASKS,
  //       data:{
  //         user :{
  //         tasks:[
  //           data.addTask,
  //           ...tasks
  //         ]}
  //       }
  //     })
  //   }
  // }
  //   );

  const onSubmit = (data) => {
    console.log(data);
    // addTask({variables: {content: data}})
  };

  // if (loading) return 'Submitting...';
  // if (error) return `Submission error! ${error.message}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-neutral-white">
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
            headerTitle={"Statut"}
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
            headerTitle={"Category"}
          />
        )}
      />
      <AddButton role="submit" />
    </form>
  );
}
