import NavItem from "./NavItem";

const Navigation = () => {
 
  return (
    <nav>
      <ul className="flex flex-col md:flex-row md:item-center gap-1 md:gap-2">
        <NavItem />
      </ul>
    </nav>
  );
}

export default Navigation