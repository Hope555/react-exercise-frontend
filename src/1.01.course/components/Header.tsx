import React from 'react'

interface HeaderProps {
  head: string
}

const Header = ({ head }: HeaderProps) => {
  return (
    <h3>{head}</h3>
  );
};

export default Header;