'use client';

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import { Button } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { TextInputField } from "@supportops/ui-form";

import { AuthCard } from "../../../../../components/auth/AuthCard";
import styles from "../auth.module.css";

type ForgotFormValues = {
  email: string;
};

export default function ForgotPasswordPage() {
  const { locale } = useParams<{ locale: string }>();
  const { control, handleSubmit } = useForm<ForgotFormValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotFormValues) => {
    console.log(data);
  };

  return (
    <AuthCard
      title="Forgot your password?"
      subtitle="We will send a reset link to your email."
      illustration={
        <>
          <span className={styles.illustrationBadge}>Recovery</span>
          <div className={styles.illustrationTitle}>Reset in minutes</div>
          <div className={styles.illustrationText}>
            Enter your email and we will help you get back in.
          </div>
          <LockResetOutlinedIcon
            sx={{ fontSize: 120, color: "#2563eb", mt: 2 }}
          />
        </>
      }
      footer={
        <>
          <span>Remembered your password?</span>
          <Link href={`/${locale}/login`}>Back to sign in</Link>
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
            startIcon={<EmailOutlinedIcon fontSize="small" />}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
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
            Recover password
          </Button>
        </div>
      </form>
    </AuthCard>
  );
}
