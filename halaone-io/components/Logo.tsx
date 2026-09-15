export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#2A4D68" />
      <circle cx="10" cy="16" r="2.2" fill="#F5F4F0" />
      <circle cx="22" cy="10" r="2.2" fill="#F5F4F0" />
      <circle cx="22" cy="22" r="2.2" fill="#F5F4F0" />
      <path d="M12 16h8M22 12.2v7.6" stroke="#F5F4F0" strokeWidth="1.4" />
    </svg>
  );
}
