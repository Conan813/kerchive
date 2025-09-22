import style from "./MapButton.module.css";
import { Map } from "lucide-react";
export default function MapButton() {
  return (
    <div className={style.mapButton}>
      <Map></Map>
      <div>지도</div>
    </div>
  );
}
