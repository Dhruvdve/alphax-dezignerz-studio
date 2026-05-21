"use client";

import { getHomePreviewItems } from "@/content/portfolio";
import { PortfolioTile } from "@/components/PortfolioTile";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

export function PortfolioPreviewGrid() {
  const items = getHomePreviewItems(6);
  return (
    <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
      {items.map((item) => (
        <StaggerItem key={item.id}>
          <PortfolioTile item={item} layout="grid" />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
