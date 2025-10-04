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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/recipe/search?title=${query}`
    );
    if (!res.ok) {
      console.error("API Error:", res.status);
      return;
    }
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
      <div
        style={{
          height: "500px",
          overflowY: "auto",
          marginLeft: "75px",
          marginRight: "75px",
        }}
      >
        {results.map((recipe) => (
          <ResultBox
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            uploader_id={recipe.uploader_id}
            created_at={recipe.created_at}
            thumbnail_url={recipe.thumbnail_url}
          />
        ))}
      </div>
    </div>
  );
}
