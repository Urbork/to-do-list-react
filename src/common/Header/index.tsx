import { ReactNode } from "react";
import { MainHeader } from "./styled";

interface HeaderProps {
  title: ReactNode;
}

const Header = ({ title }: HeaderProps) => (
  <MainHeader>
    <h1>{title}</h1>
  </MainHeader>
);

export default Header;
