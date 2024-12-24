import { NavLink } from "react-router";
import navigation from "../navigation";

export function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        FHIRPath Jotai Demo
      </h1>
      <div className="mt-8">
        <h6 className="text-gray-600 text-sm font-semibold mb-6">
          Choose a demo:
        </h6>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigation.map((item) => (
            <NavLink
              to={item.href}
              key={item.name}
              className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 text-gray-800 font-medium"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
