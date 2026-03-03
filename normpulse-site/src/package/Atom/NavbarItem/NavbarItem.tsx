import "./NavbarItem.css";
import "../../global.css";
import type { ReactNode } from "react";

interface NavbarItemProps {
  children: ReactNode;
}

export default function NavbarItem({
  children,
}: NavbarItemProps) {
  return (
    <div className="navbar-item">
      {children}
    </div>
  );
}