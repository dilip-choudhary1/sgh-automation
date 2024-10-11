import { useForm } from "react-hook-form";
import { registerFormData, registerFormFieldProps, registerFormSchema } from "../types";
import { MdClose } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideLoginForm } from "../features/loginFormDisplaySlice";




export default function RegisterForm({ }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // setError,
    } = useForm<registerFormData>({
        resolver: zodResolver(registerFormSchema)
    });

    const dispatch = useDispatch();


    const onSubmit = async () => {
    }


    return (
        <form
            className="w-[25vw] h-[60vh] min-h-fit bg-white rounded-xl shadow-lg relative items-start p-10 py-14 font-light text-sm"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Link className="absolute right-7 top-7 text-[1.5rem]"
                onClick={() => { dispatch(hideLoginForm()) }}
                to={"/"}
            >
                <MdClose />
            </Link>

            <FormField
                type="string"
                placeholder="Name"
                name="name"
                register={register}
                error={errors.name}
                className="w-full p-2 border-b focus:outline-none focus:border-b-2 focus:border-b-slate-500"
            />
            <FormField
                type="string"
                placeholder="Username"
                name="username"
                register={register}
                error={errors.username}
                className="w-full p-2 border-b mt-4 focus:outline-none focus:border-b-2 focus:border-b-slate-500"
            />
            <FormField
                type="password"
                placeholder="Password"
                name="password"
                register={register}
                error={errors.password}
                className="w-full p-2 border-b mt-4 focus:outline-none focus:border-b-2 focus:border-b-slate-500"
            />
            <FormField
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                register={register}
                error={errors.confirmPassword}
                className="w-full p-2 border-b mt-4 focus:outline-none focus:border-b-2 focus:border-b-slate-500"
            />




            <div className="flex justify-between items-center">
                <FormField
                    type="date"
                    placeholder="Date joined"
                    name="dateJoined"
                    register={register}
                    error={errors.dateJoined}
                    className="w-1/2 p-2 border-b mt-4 focus:outline-none focus:border-b-2 focus:border-b-slate-500 text-slate-400 text-sm"
                />

                <select  className="focus:outline-none mt-4 text-slate-400 w-fit " {...register("gender", { required: true })}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <select
                className="focus:outline-none mt-5 text-slate-400 w-fit"
                {...register("role", { required: true })}
            >
                <option value="admin">Admin</option>
                <option value="supervisor">Supervisor</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="repair">Repair</option>
                <option value="polish">Polish</option>
                <option value="check">Check</option>
                <option value="packaging">Packaging</option>
                <option value="shipping">Shipping</option>
            </select>


            <p className="text-[0.7rem] font-medium text-pink underline mt-9 cursor-pointer w-full cursor-pointer"> <Link to={"/login"}> Already Registered? Sign-in  </Link></p>

            <button className="pink-btn text-white relative mt-10 left-1/2 -translate-x-1/2" type="submit" > Create Account </button>
        </form>
    )
}



const FormField: React.FC<registerFormFieldProps> = ({
    type,
    name,
    register,
    placeholder,
    error,
    className
}) => (
    <>
        <input
            type={type}
            placeholder={placeholder}
            {...register(name)}
            className={className}
        />
        {error && <span
            className="text-red-600 text-[0.6rem] font-medium mt-1 w-full">
            {error.message}
        </span>}
    </>
);