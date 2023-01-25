export interface LoginFormInitialValues {
  email: string;
  password: string;
}
export interface sendCodeFormInitialValues {
  mobile?: string | null;
}
export interface confirmCodeFormInitialValues {
  mobile?: string | null;
  otp?: string | null;
}
