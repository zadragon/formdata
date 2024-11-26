"use client";

import { useFormState } from "react-dom";
import FormInput from "../components/form-input";
import FormButton from "../components/form-btn";
import { handleForm } from "./actions";

export default function Home() {
  const [state, action] = useFormState(handleForm, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          type="email"
          placeholder="이메일을 입력하세요"
          required={true}
          errors={state?.errors?.fieldErrors.email}
          name="email"
        />
        <FormInput
          type="text"
          placeholder="닉네임을 입력하세요"
          required={true}
          errors={state?.errors?.fieldErrors.username}
          name="username"
        />
        <FormInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          required={true}
          errors={state?.errors?.fieldErrors.password}
          name="password"
        />
        <FormButton text="로그인" />
      </form>
    </div>
  );
}
