import React from "react";
import { useForm } from "react-hook-form";
import { useGetUserFromUserName } from "../hooks/useGetUserFromUserName";
import UserForm from "./UserForm";
import UserData from "./UserData";

const User = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { isLoading, isError, error, data, refetch } = useGetUserFromUserName(
    getValues("userName")
  );

  const onSubmit = () => {
    refetch({ throwOnError: true });
  };

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Error: {error.message} try again</h2>;

  return (
    <div>
      <UserForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      {data === undefined ? (
        <p>Please Enter valid userName</p>
      ) : (
        <UserData user={data} />
      )}
    </div>
  );
};

export default User;
