"use client";

import { useState } from "react";
import style from "./page.module.css";
import SearchBar from "@/components/searchBar";
import ResultBox from "@/components/ResultBox";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    setKeyword(query);
    const res = await fetch(`api/search?query=${query}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div
        style={{
          color: "#8B0029",
          marginBottom: "10px",
          marginLeft: "75px",
          marginTop: "60px",
        }}
      >
        검색결과
      </div>
      <ResultBox id="1" />
      <ResultBox id="2" />
      <ResultBox id="3" />
    </div>
  );
}
