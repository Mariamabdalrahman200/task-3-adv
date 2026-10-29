import type { ReactNode } from "react";
import type { IconCardProps } from "../../shared/IconCard/IconCard.types";

export interface AwardsSliderProps {
  cards: IconCardProps[];
  moreLabel: string;
  previousIcon: ReactNode;
  nextIcon: ReactNode;
}