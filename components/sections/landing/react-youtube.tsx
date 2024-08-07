"use client";

import useBreakpoint from "@/hooks/useBreakPoint";
import useWindowSize from "@/hooks/useWindowSize";
import YouTube, { YouTubeProps } from "react-youtube";

export default function ReactYoutube() {
  const { height, width } = useWindowSize();
  const currentScreenSize = useBreakpoint();

  const opts: YouTubeProps["opts"] = {
    width: "200",
    height: "100",
    playerVars: {
      rel: 0,
      autoplay: 0,
      modestbranding: 1,
      loop: 1,
      playlist: "BlzbRNfgcVU",
    },
  };
  return (
    <YouTube
      videoId="BlzbRNfgcVU"
      onReady={(e: any) => {
        e.target.mute();
        // e.target.playVideo();
      }}
      opts={opts}
      iframeClassName="relative w-full h-full h-screen ring aspect-video"
    />
  );
}
