import "./NavLink.css";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const NavLink = ({
  href,
  children,
  className = "",
  onClick,
}: NavLinkProps) => {
  return (
    <a href={href} className={`nav-link ${className}`} onClick={onClick}>
      {children}
    </a>
  );
};