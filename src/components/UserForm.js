import React from "react";

const UserForm = ({ onSubmit, handleSubmit, register, errors }) => {
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Search UserName"
          {...register("userName", { required: true })}
        />
        <p>
          {errors.userName?.type === "required" && "UserName cannot be blank"}
        </p>

        <button type="submit">Search </button>
      </form>
    </>
  );
};

export default UserForm;
