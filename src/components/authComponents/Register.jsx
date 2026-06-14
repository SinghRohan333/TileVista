"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, InputGroup, Label, TextField } from "@heroui/react";
import {
  Eye,
  EyeSlash,
  Person,
  Envelope,
  LockFill,
  Link as LinkIcon,
} from "@gravity-ui/icons";
import "@/styles/login.css";
import { useForm } from "react-hook-form";
import { authClient } from "@/libs/auth-client";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterData = async (formData) => {
    // console.log(formData);
    const { name, email, image, password } = formData;
    setIsLoading(true);
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      image,
      password,
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message || "Registration failed. Please try again.");
      return;
    }
    if (data) {
      toast.success("Account created successfully! Welcome to TileVista.");
      const redirect = searchParams.get("redirect");
      router.push(redirect || "/");
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: searchParams.get("redirect") || "/",
    });
    if (error) {
      toast.error(error.message || "Google login failed. Please try again.");
      setIsGoogleLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    setIsGithubLoading(true);
    const { data, error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: searchParams.get("redirect") || "/",
    });
    if (error) {
      toast.error(error.message || "GitHub login failed. Please try again.");
      setIsGithubLoading(false);
    }
  };
  return (
    <main className="login-page">
      <div className="page-container login-container">
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <div className="divider login-divider" />
            <h1 className="login-title">Create Account</h1>
            <p className="login-subtitle">
              Join us to explore our premium tile collections
            </p>
          </div>

          {/* Form */}
          <form
            className="login-form"
            onSubmit={handleSubmit(handleRegisterData)}
          >
            <TextField isRequired name="name" className="login-field">
              <Label className="login-label">Full Name</Label>
              <InputGroup className="login-input-wrapper">
                <InputGroup.Prefix>
                  <Person className="login-input-icon" />
                </InputGroup.Prefix>
                <InputGroup.Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="login-input"
                  {...register("name")}
                />
              </InputGroup>
            </TextField>

            <TextField isRequired name="email" className="login-field">
              <Label className="login-label">Email Address</Label>
              <InputGroup className="login-input-wrapper">
                <InputGroup.Prefix>
                  <Envelope className="login-input-icon" />
                </InputGroup.Prefix>
                <InputGroup.Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="login-input"
                  {...register("email")}
                />
              </InputGroup>
            </TextField>

            <TextField name="photoUrl" className="login-field">
              <Label className="login-label">Photo URL</Label>
              <InputGroup className="login-input-wrapper">
                <InputGroup.Prefix>
                  <LinkIcon className="login-input-icon" />
                </InputGroup.Prefix>
                <InputGroup.Input
                  id="photoUrl"
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  className="login-input"
                  {...register("image")}
                />
              </InputGroup>
            </TextField>

            <TextField
              isRequired
              name="password"
              className="login-field"
              isInvalid={!!errors.password}
            >
              <Label className="login-label">Password</Label>
              <InputGroup className="login-input-wrapper">
                <InputGroup.Prefix>
                  <LockFill className="login-input-icon" />
                </InputGroup.Prefix>
                <InputGroup.Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="login-input"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    validate: {
                      hasUppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must contain at least one uppercase letter",
                      hasNumber: (value) =>
                        /\d/.test(value) ||
                        "Password must contain at least one number",
                    },
                  })}
                />
                <InputGroup.Suffix>
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="login-eye-toggle"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </button>
                </InputGroup.Suffix>
              </InputGroup>

              {/* Error Message Span */}
              {errors.password && (
                <span className="login-error-message">
                  {errors.password.message?.toString()}
                </span>
              )}
            </TextField>

            <Button
              type="submit"
              className="btn-primary login-submit-btn"
              isDisabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Register"}
            </Button>
          </form>

          {/* Divider */}
          <div className="login-or-divider">
            <span className="login-or-line" />
            <span className="login-or-text">or continue with</span>
            <span className="login-or-line" />
          </div>

          {/* Social Logins */}
          <div className="login-social-row">
            <button
              type="button"
              className="login-social-btn"
              onClick={handleGoogleLogin}
              disabled={isGoogleLoading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.65-5.17 3.65-8.58z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.32v3.15C3.31 21.88 7.41 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.32A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.25 5.39l4.07-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.19 15.24 0 12 0 7.41 0 3.31 2.12 1.32 5.54l4.05 3.15c.96-2.85 3.59-4.94 6.68-4.94z"
                />
              </svg>
              <span>{isGoogleLoading ? "Connecting..." : "Google"}</span>
            </button>

            <button
              type="button"
              className="login-social-btn"
              onClick={handleGithubLogin}
              disabled={isGithubLoading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>{isGithubLoading ? "Connecting..." : "GitHub"}</span>
            </button>
          </div>

          {/* Login link */}
          <p className="login-register-text">
            Already have an account?{" "}
            <Link
              href={`/login${searchParams.get("redirect") ? `?redirect=${searchParams.get("redirect")}` : ""}`}
              className="login-register-link"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
