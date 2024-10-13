import { useContext } from "react";
import { NavItemsContext } from "../../../Provider/RightSideNavItemProvider";
import MenuItemForProfile from "../../../Components/MenuItemForProfile";

const RightSection = () => {
  const { menuItem } = useContext(NavItemsContext);
  console.log('context is ', menuItem);

  if (menuItem === '') {
    return <div>active now</div>;
  } else if (menuItem === 'message') {
    return (
      <div>
        <p>message</p>
      </div>
    );
  } else if (menuItem === 'notification') {
    return (
      <div>
        <p>notification</p>
      </div>
    );
  } else if (menuItem === 'profileItem') {
    return (
    <MenuItemForProfile></MenuItemForProfile>
    );
  } 
};

export default RightSection;
