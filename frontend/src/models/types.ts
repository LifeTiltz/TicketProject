export type RegistrationValues = {
  name: string;
  email: string;
  password: string;
  isChecked: boolean;
  userAgreement?: string;
};

export type ErrorValues = {
  name: string;
  email: string;
  password: string;
  isChecked: string;
  userAgreement?: string;
};
