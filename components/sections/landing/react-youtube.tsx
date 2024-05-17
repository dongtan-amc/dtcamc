"use client";

import YouTube, { YouTubeProps } from "react-youtube";

export default function ReactYoutube() {
  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      rel: 0,
      autoplay: 1,
      modestbranding: 1,
      loop: 1,
      playlist: "BlzbRNfgcVU",
    },
  };
  return (
    <YouTube
      videoId="BlzbRNfgcVU"
      onReady={(e) => {
        e.target.mute(); //소리 끔
        e.target.playVideo();
      }}
      opts={opts}
      iframeClassName="relative w-full h-auto aspect-video"
    />
  );
}
