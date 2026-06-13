"use client";

import { Input } from "@heroui/react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-wrap">
      <div className="search-bar-inner">
        {/* Search icon */}
        <span className="search-bar-icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>

        {/* HeroUI v3 Input — only standard HTML props */}
        <Input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search tiles by name..."
          fullWidth
          className="search-bar-input"
          aria-label="Search tiles"
          autoComplete="off"
        />

        {/* Clear button — shows only when there is a value */}
        {value && (
          <button
            className="search-bar-clear"
            onClick={() => onChange("")}
            aria-label="Clear search"
            type="button"
          >
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
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
