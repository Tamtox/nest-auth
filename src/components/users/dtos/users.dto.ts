import {
  EMAIL_MAX,
  EMAIL_MIN,
  PASS_MAX,
  PASS_MIN,
  STRING_MAX,
  STRING_MIN,
  USERNAME_MAX,
  USERNAME_MIN,
  VERIFICATION_CODE_MIN,
} from 'src/common/constants/common.constants';
import { z } from 'zod';

// Create User --------------------------------------------------------------------------------------------------------------------------
export const createUserDto = z.object({
  email: z.string().email().min(EMAIL_MIN).max(EMAIL_MAX),
  username: z.string().min(USERNAME_MIN).max(USERNAME_MAX),
  password: z.string().min(PASS_MIN).max(PASS_MAX),
  firstName: z.string().min(STRING_MIN).max(STRING_MAX).optional(),
  middleName: z.string().min(STRING_MIN).max(STRING_MAX).optional(),
  lastName: z.string().min(STRING_MIN).max(STRING_MAX).optional(),
  isVerified: z.boolean().optional(),
  verificationCode: z
    .string()
    .min(VERIFICATION_CODE_MIN)
    .max(VERIFICATION_CODE_MIN)
    .optional(),
});
export type CreateUserDto = z.infer<typeof createUserDto>;

// Update User --------------------------------------------------------------------------------------------------------------------------

// Sign Up ------------------------------------------------------------------------------------------------------------------------------
export const signUpDtp = z.object({
  email: z.string().email().min(EMAIL_MIN).max(EMAIL_MAX),
  username: z.string().min(USERNAME_MIN).max(USERNAME_MAX),
  password: z.string().min(PASS_MIN).max(PASS_MAX),
});
export type SignUpDto = z.infer<typeof signUpDtp>;

// Sign In ------------------------------------------------------------------------------------------------------------------------------
export const signInDto = z.object({
  email: z.string().email().min(EMAIL_MIN).max(EMAIL_MAX),
  password: z.string().min(PASS_MIN).max(PASS_MAX),
});

// Reset Password -----------------------------------------------------------------------------------------------------------------------

// Change Password ----------------------------------------------------------------------------------------------------------------------

// Verify Email -------------------------------------------------------------------------------------------------------------------------
