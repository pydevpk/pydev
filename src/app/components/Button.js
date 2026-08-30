import Link from "next/link";

const VARIANTS = {
  solid:
    "bg-text text-bg hover:bg-accent hover:text-bg border border-transparent",
  outline:
    "border border-hairline-strong text-text hover:border-text hover:bg-white/[0.04]",
  ghost: "text-muted hover:text-text",
};

export default function Button({
  href,
  children,
  variant = "outline",
  className = "",
  external = false,
  ...props
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${VARIANTS[variant]} ${className}`;

  if (href) {
    const isHash = href.startsWith("#") || href.startsWith("/#");
    if (external || !isHash) {
      return (
        <Link
          href={href}
          className={cls}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
