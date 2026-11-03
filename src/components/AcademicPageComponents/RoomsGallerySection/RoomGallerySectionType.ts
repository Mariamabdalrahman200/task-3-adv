import type { ReactNode } from "react";

export type RoomGalleryCategory =
   | "Classrooms"| "Library"| "Science Lab" | "Computer Lab" | "Garden and Nature Area";

  export interface GalleryCardData {
  category: RoomGalleryCategory;
  title: string;
  description: string;
  images: string[];
}

export interface GalleryCardGridProps {
  cards: GalleryCardData[];
  prevIcon: ReactNode;
  nextIcon: ReactNode;
}