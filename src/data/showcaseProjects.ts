export type ShowcaseProject = {
  id: string;
  name: string;
  category: string;
  url: string;
  video: string;
  poster: string;
};

export const aetherFormProject: ShowcaseProject = {
  id: "aether-form",
  name: "Aether Form",
  category: "Architecture studio · Design & development",
  url: "https://aether-form.pages.dev/",
  video: "/showcase/aether-form-scroll.mp4",
  poster: "/showcase/aether-form-poster.webp",
};

// The showcase enables slide navigation automatically and advances when each
// project's video finishes.
export const showcaseProjects: ShowcaseProject[] = [
  aetherFormProject,
  {
    id: "big-bangs",
    name: "Big Bangs",
    category: "Streetwear · Design & development",
    url: "https://big-bangs.pages.dev/",
    video: "/showcase/big-bangs-scroll.mp4",
    poster: "/showcase/big-bangs-poster.webp",
  },
];
