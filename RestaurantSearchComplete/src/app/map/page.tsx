import NaverMap from "@/components/NaverMap";
import style from "./page.module.css";
export default function Map({ params }: { params: { id: string } }) {
  return (
    <div>
      <div className={style.topBar}>
        <span className={style.arrow}>화살표</span>
        <span className={style.button}>음식분류</span>
        <span className={style.button}>위치선택</span>
        <span className={style.button}>가격</span>
        <span className={style.button}>분위기</span>
      </div>

      <NaverMap />
    </div>
  );
}
