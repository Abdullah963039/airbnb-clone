"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useState, useCallback } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useRegisterModal } from "@/hooks/use-register-modal";
import { Heading } from "@/components/heading";
import { Input } from "@/components/inputs/input";
import { Button } from "@/components/button";

import { Modal } from "./modal";

export const RegisterModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onClose, onOpen } = useRegisterModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => onClose())
      .catch((err) => toast.error("Something went wrong!"))
      .finally(() => setIsLoading(false));
  };

  const bodyCotnent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subTitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        type="password"
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        label="Continue with Google"
        outline
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        label="Continue with Gitbub"
        outline
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex items-center justify-center gap-2">
          <div>Already have an account?</div>
          <div
            role="button"
            onClick={onClose}
            className="text-neutral-800 hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyCotnent}
      footer={footerContent}
    />
  );
};
