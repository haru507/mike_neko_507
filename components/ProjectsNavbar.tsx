import { FunctionComponent } from "react";
import { Category } from "@/utils/type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";
  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="laravel" {...props} />
      <NavItem value="spring" {...props} />
      <NavItem value="php" {...props} />
      <NavItem value="python" {...props} />
      <NavItem value="wordpress" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
