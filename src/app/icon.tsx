import type { MetadataRoute } from "next";

export default function Icon(): MetadataRoute.Icon {
  return {
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3CradialGradient id='g' cx='32' cy='20' r='44' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2338bdf8'/%3E%3Cstop offset='1' stop-color='%230a0a0a'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='14' fill='url(%23g)'/%3E%3Cpath d='M18 44V20h14c7 0 12 4 12 10s-5 10-12 10H26v4H18zm8-10h6c3 0 5-2 5-4s-2-4-5-4h-6v8z' fill='white' fill-opacity='.92'/%3E%3C/svg%3E"
  };
}

