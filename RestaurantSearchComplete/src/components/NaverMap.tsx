"use client";

import { useEffect, useRef } from "react";

const restaurant = {
  id: 5,
  name: "할랄킹",
  address: "서울 동대문구 한빛로 11 1층",
  location_link: "https://naver.me/IMyH5WBz",
  latitude: 37.5771,
  longitude: 127.025,
  summary: "나시르막이 6900원밖에 안 하고 뚬얌에 새우가 많다.",
};
export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = () => {
      if (!window.naver || !window.naver.maps) return;

      const map = new window.naver.maps.Map(mapRef.current as HTMLElement, {
        center: new window.naver.maps.LatLng(
          restaurant.latitude,
          restaurant.longitude
        ),
        zoom: 15,
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          restaurant.latitude,
          restaurant.longitude
        ),
        map,
      });
    };

    // SDK가 로드되었는지 확인하고 실행
    if (window.naver && window.naver.maps) {
      initMap();
    } else {
      window.addEventListener("load", initMap); // 스크립트 로드 후 실행
      return () => window.removeEventListener("load", initMap);
    }
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "940px" }} />;
}
