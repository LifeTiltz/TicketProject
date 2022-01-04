import { useState, FormEventHandler } from "react";
import { useHistory } from "react-router-dom";
import { RegistrationValues, ErrorValues } from "../../models/types";
import Button from "../../common/components/button/Button";
import Checkbox from "../../common/components/Checkbox/Checkbox";
import Error from "../../common/components/Errors/errors";
import Input from "../../common/components/Input/Input";
import { validation } from "../../common/services/validation-service";
import { apiService } from "../../common/services/apiService";
import "./Registration.css";

export const Registration: React.FC = () => {
  const history = useHistory();

  const [values, setValues] = useState<RegistrationValues>({
    name: "",
    email: "",
    password: "",
    userAgreement: "",
    isChecked: false,
  });

  const [errors, setErrors] = useState<ErrorValues>({
    name: "",
    email: "",
    password: "",
    userAgreement: "",
    isChecked: "",
  });

  const handleChange = (name: string, value: string) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const newErrors = validation(values) as ErrorValues;
    setErrors(newErrors);
    if (
      Object.values(newErrors).every(
        (errorsMsg: string) => errorsMsg.length === 0
      )
    ) {
      const response = await apiService.post('/register', {
        username: values.name,
        email: values.email,
        password: values.password
      }, false)
      if (response && (Number(response.status) >= 200 && Number(response.status) < 300)) {
        history.push("/login");
      } else {
        setErrors({
          ...errors,
          name: response.body?.message
        })
      }
    }
  };

  const handleChangeBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      isChecked: event.target.checked,
    });
  };

  return (
    <div className="withBackground page">
      <div className="auth">
        <form className="authForm" onSubmit={handleSubmit}>
          <h2 className="authHeadline">Registration</h2>
          <Input
            name="name"
            inputValue={values.name}
            onChange={handleChange}
            type="text"
          />
          <Error errorMsg={errors.name} />
          <Input
            name="email"
            inputValue={values.email}
            onChange={handleChange}
            type="text"
          />
          {<Error errorMsg={errors.email} />}
          <Input
            name="password"
            inputValue={values.password}
            onChange={handleChange}
            type="password"
          />
          {<Error errorMsg={errors.password} />}
          <div className="form-input agreementDiv">
            <label htmlFor="userAgreement"></label>
            <Checkbox
              isChecked={values.isChecked}
              handleChangeBox={handleChangeBox}
              label="Please accept our user agreements"
              className="userAgreementLink"
              href="/userAgreement"
            />
          </div>
          {errors.userAgreement && <Error errorMsg={errors.userAgreement} />}
          <Button type="submit" title="Register" classes="btn" onClick={() => handleSubmit} />
          <div>
            <a href="app/login" className="loginLink">
              <p>You already have an account?</p>
              <p> Please sign in!</p>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};