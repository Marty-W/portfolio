interface Project {
  name: string
  slug: string
  techstack: string[]
  description: string
  githubUrl: string
  imageUrl: string
  websiteUrl?: string
  carouselImgs?: CarouselImg[]
}

export interface CarouselImg {
  src: string
  alt?: string
}

export const PROJECTS: { [slug: string]: Project } = {
  habitsync: {
    slug: "habitsync",
    name: "HabitSync",
    techstack: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "trpc",
      "prisma",
      "NextAuth",
    ],
    description: "A habit tracking app that syncs with your Todoist account",
    githubUrl: "https://github.com/Marty-W/habitsync",
    websiteUrl: "https://habitsync.app",
    imageUrl: "/project_images/habitsync/1.webp",
    carouselImgs: [
      {
        src: "/project_images/habitsync/1.webp",
        alt: "Landing Page",
      },
      {
        src: "/project_images/habitsync/2.webp",
        alt: "Desktop Dashboard",
      },
      {
        src: "/project_images/habitsync/3.webp",
        alt: "Dark mode",
      },

      {
        src: "/project_images/habitsync/4.webp",
        alt: "Project sync",
      },
      {
        src: "/project_images/habitsync/5.webp",
        alt: "Mobile dashboard",
      },
      {
        src: "/project_images/habitsync/6.webp",
        alt: "Mobile habit list",
      },
      {
        src: "/project_images/habitsync/7.webp",
        alt: "Mobile settings",
      },
      {
        src: "/project_images/habitsync/8.webp",
        alt: "Mobile landing page",
      },
      {
        src: "/project_images/habitsync/9.webp",
        alt: "Dark mode dashboard",
      },
    ],
  },
  portfolio: {
    slug: "portfolio",
    name: "Portfolio",
    techstack: ["Astro.js", "React"],
    description: "My personal portfolio website",
    githubUrl: "https://github.com/Marty-W/portfolio",
    imageUrl: "/project_images/portfolio/thumbnail.png",
  },
  "swiss-knife": {
    slug: "swiss-knife",
    name: "SwissKnife",
    techstack: ["React", "Typescript", "Firebase"],
    description: "A collection of productivity tools",
    githubUrl: "https://github.com/Marty-W/swiss-knife-client",
    websiteUrl: "https://wizardly-joliot-31a4d4.netlify.app",
    imageUrl: "/project_images/swiss-knife/1.png",
    carouselImgs: [
      {
        src: "/project_images/swiss-knife/1.png",
        alt: "Landing page",
      },
      {
        src: "/project_images/swiss-knife/2.png",
        alt: "Tasks view",
      },
      {
        src: "/project_images/swiss-knife/4.png",
        alt: "Mobile habit view",
      },
      {
        src: "/project_images/swiss-knife/5.png",
        alt: "Mobile pomodoro view",
      },
      {
        src: "/project_images/swiss-knife/6.png",
        alt: "Mobile landing page",
      },
      {
        src: "/project_images/swiss-knife/7.png",
        alt: "Auth with firebase",
      },
    ],
  },
  "old-portfolio": {
    slug: "old-portfolio",
    name: "Old portfolio",
    techstack: ["React", "Javascript"],
    description: "My old portfolio website",
    githubUrl: "https://github.com/Marty-W/portfolio-v1",
    websiteUrl: "https://master--jade-stroopwafel-035621.netlify.app/",
    imageUrl: "/project_images/old-portfolio/hero.png",
    carouselImgs: [
      { src: "/project_images/old-portfolio/1.png" },
      { src: "/project_images/old-portfolio/2.png" },
      { src: "/project_images/old-portfolio/3.png" },
    ],
  },
  dotfiles: {
    slug: "dotfiles",
    name: "Dotfiles",
    techstack: ["nvim", "yabai", "skhd", "zsh", "tmux", "wezterm"],
    description: "My humble dotfiles",
    githubUrl: "https://github.com/Marty-W/dotfiles",
    imageUrl: "/project_images/dotfiles/1.png",
    carouselImgs: [
      { src: "/project_images/dotfiles/1.png" },
      { src: "/project_images/dotfiles/2.png" },
      { src: "/project_images/dotfiles/3.png" },
    ],
  },
}
