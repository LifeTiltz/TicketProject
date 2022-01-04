import { useState, FormEvent, ChangeEvent, FormEventHandler } from "react";
import { useHistory } from "react-router";
import Button from "../../common/components/button/Button";
import Error from "../../common/components/Errors/errors";
import Input from "../../common/components/Input/Input";
import { apiService } from "../../common/services/apiService";
import { validation } from "../../common/services/validation-service";
import './Registration.css';

type LoginValues = {
  email: string
  password: string
}

const Login = () => {
  const defaultLoginValues = {
    email: '',
    password: ''
  }
  const [values, setValues] = useState<LoginValues>({...defaultLoginValues});
  const [errors, setErrors] = useState<LoginValues>({...defaultLoginValues});
  const history = useHistory();
  
  const login = async () => {
    const response = await apiService.post('/login', values, false)
    if (response && (Number(response.status) >= 200 && Number(response.status) < 300)) {
        setErrors(defaultLoginValues)
        localStorage.setItem("token", response.body?.token)
        history.push("/news")
    } else {
        setErrors({ ...errors, email: response.body?.message });
    }
}

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const errorMessages = validation(values) as LoginValues
  if (
    Object.values(errorMessages).every(
      (errorsMsg: string) => errorsMsg.length === 0
    )
  ) {
    login()
  } else {
    setErrors(errorMessages)
  }
}

const handleChange = (name: string, value: string) => {
  setValues({
    ...values,
    [name]: value,
  });
};

return (
  <div className="auth">
    <form onSubmit={onSubmit} className="authForm">
    <h2 className="authHeadline">Login</h2>
    <div className="inputBox">
      <Input
        name="email"
        inputValue={values['email']}
        onChange={handleChange}
        type="text"
      />
      <Error errorMsg={errors.email} />
      <Input
        name="password"
        inputValue={values['password']}
        onChange={handleChange}
        type="password"
      />
      <Error errorMsg={errors.password} />
      <Button type="submit" title="Login" classes="btn" onClick={() => onSubmit} />
    </div>
  </form >
  </div>  
)
}

export default Login;