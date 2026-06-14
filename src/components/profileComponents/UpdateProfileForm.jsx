"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/libs/auth-client";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "@/styles/my-profile.css";

const UpdateProfileForm = ({ session }) => {
  const user = session.user;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(user.image || "");

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: user.name || "",
      image: user.image || "",
    },
  });

  // Watch image field for live preview
  const imageValue = watch("image");

  const handleUpdate = async (formData) => {
    const { name, image } = formData;
    setIsLoading(true);

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message || "Update failed. Please try again.");
      return;
    }

    toast.success("Profile updated successfully!");
    router.push("/my-profile");
  };

  return (
    <div className="profile-page">
      {/* ── Back link ── */}
      <div className="page-container">
        <div className="profile-back">
          <Link href="/my-profile" className="profile-back-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Profile
          </Link>
        </div>
      </div>

      {/* ── Update Card ── */}
      <div className="page-container profile-body">
        <div className="profile-card">
          {/* Header */}
          <div className="update-card-header">
            <div className="divider update-divider" />
            <h1 className="profile-name">Update Profile</h1>
            <p className="profile-email">
              Update your display name and profile photo
            </p>
          </div>

          {/* Live Image Preview */}
          <div className="update-preview-wrap">
            {imageValue ? (
              <div className="update-preview-img-wrap">
                <Image
                  src={imageValue}
                  alt="Profile preview"
                  fill
                  style={{ objectFit: "cover" }}
                  onError={() => {}}
                />
              </div>
            ) : (
              <div className="update-preview-placeholder">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            )}
            <p className="update-preview-label">Preview</p>
          </div>

          {/* Divider */}
          <div className="profile-divider" />

          {/* Form */}
          <form className="update-form" onSubmit={handleSubmit(handleUpdate)}>
            {/* Name field */}
            <div className="update-field">
              <label className="update-label" htmlFor="name">
                Display Name
              </label>
              <input
                id="name"
                type="text"
                className="update-input"
                placeholder="Your full name"
                {...register("name", { required: true })}
              />
            </div>

            {/* Image URL field */}
            <div className="update-field">
              <label className="update-label" htmlFor="image">
                Photo URL
              </label>
              <input
                id="image"
                type="url"
                className="update-input"
                placeholder="https://example.com/photo.jpg"
                {...register("image")}
              />
              <p className="update-field-hint">
                Paste a direct link to your profile image
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary update-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Information"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
