import style from "./MapButton.module.css";
import { Map } from "lucide-react";
import Link from "next/link";
export default function MapButton() {
  return (
    <Link href="/map" className={style.mapButton}>
      <Map></Map>
      <div>지도</div>
    </Link>
  );
}
