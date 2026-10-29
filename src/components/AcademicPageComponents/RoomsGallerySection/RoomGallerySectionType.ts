export type RoomGalleryCategory =
  | "classrooms"
  | "library"
  | "science-lab"
  | "computer-lab"
  | "garden";

export interface GalleryCardProps {
  category: RoomGalleryCategory;
  title: string;
  description: string;
  images: string[];
}