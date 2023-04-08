import React from "react";
import "./form.scss";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//template_e6118aj  service_l089am7   GFWHGBtjjnTUEH-SE

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    send("service_l089am7",
        "template_e6118aj", 
    data,
     "GFWHGBtjjnTUEH-SE").then(res=>{
        console.log("success", res.status, res.text);
        formSuccess();
    }).catch(err=>{
        console.log("Failed..", err)
    })
  };

  const formSuccess=()=>{
    toast("Thanks for submitting to Contact!")
    document.getElementById("queryForm").reset();
  }
  return (
    <div className="query-form">
      <ToastContainer />
      <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>

        <div className="input-field">
            <input 
            type="text" 
            name="from_name" 
            placeholder="Full Name"
            {...register("from_name", {
                required:"*Name",
                pattern: {
                    value:/^[a-zA-Z]+([ \-']?[a-zA-Z]+)* [a-zA-Z]+([ \-']?[a-zA-Z]+)*$/u
                    ,
                    message: "*Enter Full Name",
                },
            })}
            />
            {errors.from_name?.message && (
                <p className="errors">{errors.from_name?.message}</p>
            )}
        </div>
        <div className="input-field">
        <input type="text" name="reply_to" placeholder="Email"
          {...register("reply_to", {
            required:"*Email",   
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "**Invalid email address",
            },
        })}
        />
         {errors.reply_to?.message && (
                <p className="errors">{errors.reply_to?.message}</p>
            )}
        </div>

        <div className="input-field">
        <input type="text" 
        name="phone_number" 
        placeholder="Mobile No."
        {...register("phone_number", {
            required:"*Mobile Number",
            minLength:{
                value:8,
                message:"Invalid Phone Number"
            }
        })}
        />
         {errors.phone_number?.message && (
                <p className="errors">{errors.phone_number?.message}</p>
            )}
        </div>

        <div className="input-field">
        <input type="text"
         name="subject" 
        placeholder="Subject"
        {...register("subject", {
            required:"*Subject",
            minLength:{
                value:10,
                message:"*Minimum 10 character required!"
            }
        })}
        />
         {errors.subject?.message && (
                <p className="errors">{errors.subject?.message}</p>
            )}
        </div>
        <div className="input-field full-width">
            <textarea 
            className="textarea" 
            name="message" 
            placeholder="Type your message..."
            {...register("message", {

                maxLength:{
                    value:500,
                    message:"Maximum 500 characters allowed"
                }
            })}
            />
             {errors.message?.message && (
                <p className="errors">{errors.message?.message}</p>
            )}
        </div>
        <div className="btn">
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
