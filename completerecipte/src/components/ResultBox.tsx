import { link } from "fs";
import style from "./ResultBox.module.css";
import Link from "next/link";
export default function ResultBox({ id }: { id: string }) {
  return (
    <Link href={`/recipe/${id}`} className={style.link}>
      <div className={style.box}>
        <div className={style.restaurant}>
          <div className={style.inform}>
            <div id={style.resName}>식당 이름</div>
            <div id={style.comment}>한 줄 평..........</div>
            <div className={style.poster}>
              <div id={style.circle}></div>
              <div>
                <div style={{ fontSize: "9px", padding: "0px 0px 0px 5px" }}>
                  올린 사람
                </div>
                <div style={{ fontSize: "9px", padding: "0px 0px 0px 5px" }}>
                  Date
                </div>
              </div>
              <div className={style.rating}>
                <div>5</div>
              </div>
            </div>
          </div>
          <div id={style.photo}>음식 사진</div>
        </div>
      </div>
    </Link>
  );
}
