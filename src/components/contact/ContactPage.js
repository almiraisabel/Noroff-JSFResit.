import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../layout/Heading";



const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    number: yup.number().required("Enter a valid number").min(8),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><Heading title="Contact Us" />
                <p>Have any questions?</p></div>

                 <select className="cards__btn" {...register("regards")}>
                <option value="Enquiry">Enquiry</option>
                <option value="Complaint">Complaint</option>
                <option value="General">General</option>
            </select>

            <input {...register("name")} placeholder="Name" />
            {errors.name && <span>{errors.name.message}</span>}
            <input {...register("number")} placeholder="Number" />
            {errors.number && <span>{errors.number.message}</span>}
            <input {...register("email")} placeholder="Email" />
            {errors.email && <span>{errors.email.message}</span>}

            <textarea {...register("message")} placeholder="Input message here" />
            {errors.message && <span>{errors.message.message}</span>}


           <button type="submit" className="cards__btn" >Send</button>
        </form>
    );
}

export default Contact;