import { FC } from "react";
import { NavLink } from "react-router-dom";

type Tab = {
  id: string;
  title: string;
  order: number;
  path: string;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs: FC<TabsProps> = ({ tabs }) => {
  return (
    <ul className="tabs">
      {tabs.map(({ id, path, title }) => (
        <li key={id}>
          <NavLink
            to={path.split("/")[1].split(".")[0]}
            className={({ isActive }) =>
              [isActive && "active", "tab"].join(" ")
            }
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
