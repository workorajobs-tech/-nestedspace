export type ShowcaseProject = {
  id: string;
  name: string;
  category: string;
  url: string;
  video: string;
  poster: string;
};

// Add the next project's recording here; the showcase enables slide navigation
// automatically and advances when each video finishes.
export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "big-bangs",
    name: "Big Bangs",
    category: "Streetwear · Design & development",
    url: "https://big-bangs.pages.dev/",
    video: "/showcase/big-bangs-scroll.mp4",
    poster: "/showcase/big-bangs-poster.webp",
  },
];
