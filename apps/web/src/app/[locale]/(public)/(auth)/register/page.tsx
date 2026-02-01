'use client';

import EmailIcon from "@mui/icons-material/Email";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { TextInputField } from "@supportops/ui-form";

import { AuthCard } from "../_components/AuthCard";
import styles from "../auth.module.css";

type RegisterFormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

export default function RegisterPage() {
  const { locale } = useParams<{ locale: string }>();
  const { control, handleSubmit, register } = useForm<RegisterFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <AuthCard
      title="Create your free account"
      subtitle="Launch your workspace in minutes."
      illustration={
        <>
          <span className={styles.illustrationBadge}>Onboarding</span>
          <div className={styles.illustrationTitle}>Plug &amp; play setup</div>
          <div className={styles.illustrationText}>
            Get your team synced with a clean, confident workspace.
          </div>
          <PersonOutlineIcon sx={{ fontSize: 120, color: "#1d4ed8", mt: 2 }} />
        </>
      }
      footer={
        <>
          <span>Already have an account?</span>
          <Link href={`/${locale}/login`}>Sign in</Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fields}>
          <TextInputField
            name="fullName"
            control={control}
            label="Full name"
            placeholder="Alex Johnson"
            startIcon={<PersonOutlineIcon fontSize="small" />}
            rules={{
              required: "Name is required",
            }}
          />
          <TextInputField
            name="email"
            control={control}
            label="Your email"
            placeholder="name@example.com"
            startIcon={<EmailIcon fontSize="small" />}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
          />
          <TextInputField
            name="password"
            control={control}
            label="Password"
            placeholder="Create a password"
            type="password"
            startIcon={<LockOutlinedIcon fontSize="small" />}
            rules={{
              required: "Password is required",
            }}
          />
          <TextInputField
            name="confirmPassword"
            control={control}
            label="Confirm password"
            placeholder="Repeat your password"
            type="password"
            startIcon={<LockOutlinedIcon fontSize="small" />}
            rules={{
              required: "Confirm your password",
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" {...register("acceptTerms")} />}
            label={
              <span>
                I accept the{" "}
                <Link href={`/${locale}/terms`}>Terms and Conditions</Link>
              </span>
            }
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 2,
              textTransform: "none",
              py: 1.2,
              fontWeight: 600,
              bgcolor: "#2563eb",
              "&:hover": { bgcolor: "#1d4ed8" },
            }}
          >
            Create account
          </Button>
        </div>
      </form>
    </AuthCard>
  );
}
