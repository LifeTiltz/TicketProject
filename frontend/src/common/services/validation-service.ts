type Validator = (input: any) => string

const nameValidator: Validator = (name: string) => {
  if (!name.trim()) {
    return 'Username required'
  }
  return ''
}

const emailValidator: Validator = (email: string) => {
  if (!email) {
    return 'Email required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-.]+\.[a-z]{2,}$/i.test(email)) {
    return 'Email address is invalid'
  }
  return ''
}

const passwordValidator: Validator = (password: string) => {
  if (!password) {
    return 'Password is required'
  } else if (password.length < 8) {
    return 'Password needs to be 8 characters or more'
  }
  return ''
}

const isCheckedValidator: Validator = (isChecked: boolean) => {
  if (!isChecked) {
    return 'Please accept our Terms & and condition'
  }
  return ''
}

const validators: { [key: string]: Validator } = {
  name: nameValidator,
  email: emailValidator,
  password: passwordValidator,
  isChecked: isCheckedValidator,
}

export function validation(values: { [key: string]: any }): {
  [key: string]: string
} {
  console.log('values:', values)

  return Object.fromEntries(
    Object.entries(values).map(([key, value]: [string, any]) => [
      key,
      validators[key] ? validators[key](value) : '',
    ])
  )
}
