import { useForm } from "react-hook-form";

const OwnerDash = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const handleAddHouse = (data) => {
        console.log(data);
      }
  return (
    <>
      <div className="container-fluid ownerDash">
        <div className="container mx-auto ownerDash__cont">
          <h2 className="text-center text-3xl font-bold py-7">Owner Dashboard</h2>
          <div className="addNew">
            <button onClick={() => document.getElementById("my_modal_add_task").showModal()} className="btn btn-warning">Add New House</button>
            <dialog id="my_modal_add_task" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form
              className="flex mx-autojustify-center flex-col gap-2 px-5"
              onSubmit={handleSubmit(handleAddHouse)}
            >
              <div className="item flex flex-col gap-1">
                <label className="pl-1">Write Email whom you assigned the task</label>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  {...register("assign_email", { required: true })}
                  placeholder="Write Email Here"
                />
                {errors.task_title && (
                  <span className="text-orange-300">
                    This field is required
                  </span>
                )}
              </div>
              <div className="item flex flex-col gap-1">
                <input
                  className="input input-bordered w-full bg-indigo-700 cursor-pointer text-white hover:opacity-90"
                  type="submit"
                  value="Assign"
                />
              </div>
            </form>
          </div>
        </dialog>
          </div>
          <div className="table">
            <h3 className="text-2xl font-bold text-center mb-7">My Added Houses</h3>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerDash;
