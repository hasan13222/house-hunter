import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="container-fluid signup">
        <div className="container signup__cont mx-auto py-8">
          <h2 className="text-2xl font-bold mb-7">Register Here</h2>
          <form className="max-w-96" onSubmit={handleSubmit(onSubmit)}>
            <div className="item flex mb-4 flex-col">
              <label className="pl-1" htmlFor="fullname">Full Name</label>
              <input
              className="input mt-1 input-bordered"
                placeholder="Full Name"
                type="fullname"
                {...register("fullname", {
                  required: true,
                  pattern: /^[a-zA-Z. ]+$/,
                })}
              />
              {errors.fullname?.type === "required" && (
                <p role="alert">The field is required</p>
              )}
              {errors.fullname?.type === "pattern" && (
                <p role="alert">No special character allowed</p>
              )}
            </div>
            <div className="item flex mb-4 flex-col">
              <label className="pl-1" htmlFor="role">Role</label>
              <select className="input mt-1 input-bordered" {...register("role")}>
                <option value="owner">House Owner</option>
                <option value="renter">House Renter</option>
              </select>
            </div>
            <div className="item flex mb-4 flex-col">
              <label className="pl-1" htmlFor="phone">Phone Number</label>
              <input
              className="input mt-1 input-bordered"
                placeholder="Phone Number"
                type="phone"
                {...register("phone", {
                  required: true,
                  pattern: /^(\+\d+)?[\d\s]+$/,
                })}
              />
              {errors.phone?.type === "required" && (
                <p role="alert">The field is required</p>
              )}
              {errors.phone?.type === "pattern" && (
                <p role="alert">Please provide a valid phone number</p>
              )}
            </div>
            <div className="item flex mb-4 flex-col">
              <label className="pl-1" htmlFor="email">Email</label>
              <input
              className="input mt-1 input-bordered"
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                })}
              />
              {errors.email?.type === "required" && (
                <p role="alert">The field is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p role="alert">Your entry does not match with an email</p>
              )}
            </div>

            <div className="item flex mb-4 flex-col">
              <label className="pl-1" htmlFor="password">Password</label>
              <input
              className="input mt-1 input-bordered"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[\W_]).{7,}$/,
                })}
              />
              {errors.password?.type === "required" && (
                <p role="alert">The field is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p role="alert">
                  Password have to be more than 6 characters with a capital
                  letter and a special character
                </p>
              )}
            </div>

            <div className="item flex mb-4 flex-col">
              <input
              className="btn btn-warning" type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
