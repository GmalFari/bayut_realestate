import { useForm, Controller } from "react-hook-form";
import { Input} from "@chakra-ui/react";
import SignupCard from "../../components/accounts/Signup";
const Register = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  const onSubmit = data => console.log(data);
  return (
    <SignupCard/>
  //  <>
  //    <form onSubmit={handleSubmit(onSubmit)}>
  //     <Controller
  //       name="firstName"
  //       control={control}
  //       render={({ field }) => <Input {...field} />}
  //     />
  //     <Controller
  //       name="select"
  //       control={control}
  //       render={({ field }) => <select 
  //         {...field} 
  //         options={[
  //           { value: "chocolate", label: "Chocolate" },
  //           { value: "strawberry", label: "Strawberry" },
  //           { value: "vanilla", label: "Vanilla" }
  //         ]} 
  //       />}
  //     />
  //     <input type="submit" />
  //   </form>
  //   <SignupCard />
  //  </>
  );
};

export default Register;