"use client";

import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from "react-naver-maps";
export default function MyNaverMap() {
  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: "50%",
        height: "600px",
      }}
    >
      <NaverMap
        scaleControl
        logoControl
        mapDataControl
        mapTypeControl
        zoomControl
        defaultCenter={new navermaps.LatLng(37.20933, 127.061752)}
        defaultZoom={15}
      >
        <Marker defaultPosition={new navermaps.LatLng(37.20933, 127.061752)} />
      </NaverMap>
    </MapDiv>
  );
}
