import { link } from "fs";
import style from "./ResultBox.module.css";
import Link from "next/link";
export default function ResultBox({ id }: { id: string }) {
  return (
    <Link href={`/recipe/${id}`} className={style.link}>
      <p className={style.box}>
        <article className={style.restaurant}>
          <header className={style.inform}>
            <h2 id={style.resName}>음식 이름</h2>
            <p id={style.comment}>음식 설명..........</p>
            <div className={style.poster}>
              <div id={style.circle}></div>
              <div>
                <p style={{ fontSize: "9px", padding: "0px 0px 0px 5px" }}>
                  올린 사람 이름
                </p>
                <time style={{ fontSize: "9px", padding: "0px 0px 0px 5px" }}>
                  Date
                </time>
              </div>
            </div>
          </header>
          <div id={style.photo}>음식 사진</div>
        </article>
      </p>
    </Link>
  );
}
