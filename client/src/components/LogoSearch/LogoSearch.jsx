import { UilSearch } from "@iconscout/react-unicons";
import { UilShutter } from "@iconscout/react-unicons";
import "./LogoSearch.css";

const LogoSearch = () => {
  return (
    <div className="logoSearch">
      <UilShutter width="45" height="50" style={{ color: "var(--blue)" }} />
      <div className="search">
        <input type="text" placeholder="Search" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
