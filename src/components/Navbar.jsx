import { NavLink } from "react-router-dom";
import config from "../config.js";

const navItems = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/pending", label: "Pendientes" },
  { to: "/completed", label: "Completadas" },
  { to: "/new", label: "Nueva tarea" }
];

const getNavLinkClass = ({ isActive }) =>
  [
    "rounded-full px-4 py-2 text-sm font-medium transition",
    isActive
      ? "bg-brand-blue text-white"
      : "text-slate-700 hover:bg-slate-100 hover:text-brand-dark"
  ].join(" ");

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-app flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">

            {/* Logo */}
            <img
              src="/icons/workflow_logo.svg"
              alt="WorkFlow Manager logo"
              className="h-9 w-9 object-contain flex-shrink-0"
            />

            {/* Texto */}
            <h1 className="text-2xl font-semibold tracking-tight text-[#131313] leading-none whitespace-nowrap">
              WorkFlow{" "}
              <span className="text-[#1561F0]">Manager</span>
            </h1>

          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={getNavLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
