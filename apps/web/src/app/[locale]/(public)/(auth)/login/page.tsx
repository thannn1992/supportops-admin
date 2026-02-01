'use client';

import EmailIcon from "@mui/icons-material/Email";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { TextInputField } from "@supportops/ui-form";

import { AuthCard } from "../_components/AuthCard";
import styles from "../auth.module.css";

type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};

export default function LoginPage() {
  const { locale } = useParams<{ locale: string }>();
  const { control, handleSubmit, register } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <AuthCard
      title="Sign in"
      subtitle="Welcome back. Pick up where you left off."
      illustration={
        <>
          <span className={styles.illustrationBadge}>Secure access</span>
          <div className={styles.illustrationTitle}>Ready to ship?</div>
          <div className={styles.illustrationText}>
            Keep projects moving with quick, reliable sign in.
          </div>
          <WifiOutlinedIcon sx={{ fontSize: 120, color: "#2563eb", mt: 2 }} />
        </>
      }
      footer={
        <>
          <span>New here?</span>
          <Link href={`/${locale}/register`}>Create an account</Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fields}>
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
            placeholder="••••••••"
            type="password"
            startIcon={<LockOutlinedIcon fontSize="small" />}
            rules={{
              required: "Password is required",
            }}
          />
          <div className={styles.helperRow}>
            <FormControlLabel
              control={<Checkbox size="small" {...register("remember")} />}
              label="Remember me"
            />
            <Link href={`/${locale}/forgot-password`}>Forgot password?</Link>
          </div>
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
            Sign In
          </Button>
        </div>
      </form>
    </AuthCard>
  );
}
