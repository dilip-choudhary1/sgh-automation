import { useForm } from "react-hook-form";
import { loginFormData, loginFormFieldProps, loginFormSchema } from "../types";
import { MdClose } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideLoginForm } from "../features/loginFormDisplaySlice";




export default function LoginForm({ }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // setError,
    } = useForm<loginFormData>({
        resolver: zodResolver(loginFormSchema)
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onSubmit = async ( ) => {
        console.log("SUCCESS");
        navigate("/user/:423")
    }


    return (
        <form
            className="w-[25vw] h-[60vh] bg-white rounded-xl shadow-lg relative flex flex-col items-center p-10 py-14 font-light text-sm"

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
                placeholder="Username"
                name="username"
                register={register}
                error={errors.username}
                className="w-full p-2 border-b focus:outline-none focus:border-b-2 focus:border-b-slate-500"
            />

            <FormField
                type="password"
                placeholder="Password"
                name="password"
                register={register}
                error={errors.password}
                className="w-full mt-5 p-2 border-b focus:outline-none focus:border-b-2 focus:border-b-slate-500"

            />


            <span className="text-[0.7rem] font-medium text-pink underline mt-9 cursor-pointer w-full"> <Link to={"/register"}> Not registered? Create an account </Link> </span>


            <button type="submit" className="pink-btn absolute bottom-10 text-white" > Sign In </button>
        </form>
    )
}





const FormField: React.FC<loginFormFieldProps> = ({
    type,
    placeholder,
    name,
    register,
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