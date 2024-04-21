import React from "react";
import FormInputText from "../../components/FormInputText/FormInputText";

const SignUp = () => {
  return (
    <main>
      <form>
        <p>Sign Up</p>

        <FormInputText
          legend={"Full Name"}
          placeholder={"John Doe"}
          value={fullName}
        />
      </form>
    </main>
  );
};

export default SignUp;
