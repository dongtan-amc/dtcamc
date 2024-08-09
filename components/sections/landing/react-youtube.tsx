"use client";

import YouTube, { YouTubeProps } from "react-youtube";

export default function ReactYoutube() {
  const opts: YouTubeProps["opts"] = {
    playerVars: {
      rel: 0,
      autoplay: 0,
      modestbranding: 1,
      loop: 1,
      playlist: "ItWaJwVQ3vI",
      vq: "hd1080",
    },
  };
  return (
    <YouTube
      videoId="ItWaJwVQ3vI"
      onReady={(e: any) => {
        e.target.mute();
        e.target.playVideo();
      }}
      opts={opts}
      iframeClassName="h-[calc(100vh-96px)] aspect-video w-full"
    />
  );
}
