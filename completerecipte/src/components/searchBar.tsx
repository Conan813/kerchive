"use client";
import { useState } from "react";
import style from "./searchBar.module.css";
import { Menu, Search, MoreVertical } from "lucide-react";
export default function SearchBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  return (
    <div className={style.searchBar}>
      <Menu
        onClick={() => {
          setMenuOpen(!isMenuOpen);
        }}
      ></Menu>
      <div style={{ flexGrow: "1" }}>커리</div>
      <Search
        onClick={() => {
          setSearchOpen(!isSearchOpen);
        }}
      ></Search>
      <MoreVertical></MoreVertical>
    </div>
  );
}
