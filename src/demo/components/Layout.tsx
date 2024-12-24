import { Outlet } from "react-router";
import navigation from "../navigation";
import { NavLink } from "react-router";
import Logo from "../../logo";

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pt-8">
        <NavLink to="/" className="flex h-16 shrink-0 items-center">
          <Logo />
        </NavLink>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-100 text-gray-800"
                            : "hover:bg-gray-50 text-gray-700",
                          "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grow flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
