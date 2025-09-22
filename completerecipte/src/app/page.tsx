import style from "./page.module.css";
import SearchBar from "@/components/searchBar";
import ResultBox from "@/components/ResultBox";
import MapButton from "@/components/MapButton";

export default function Home() {
  return (
    <div>
      <SearchBar />
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
      <MapButton />
    </div>
  );
}
