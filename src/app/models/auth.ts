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
export interface ProfileInfo {
  name?: string;
  last_name?: string;
  email?: string;
  mobile: number;
  avatar_hash_code?: string;
}

export interface userLoginType {
  user: {
    id: number;
    name: string | null;
    last_name: string | null;
    email: string | null;
    mobile: string;
    mobile_verified_at: string | null;
    email_verified_at: string | null;
    created_at: string | null;
    wallet?: any | null;
  };
  token: string;
}
