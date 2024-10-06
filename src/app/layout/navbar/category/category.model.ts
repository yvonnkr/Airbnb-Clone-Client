import {IconName} from "@fortawesome/fontawesome-svg-core";

export type CategoryName = "ALL" | "AMAZING_VIEWS" | "OMG" | "TREEHOUSES"
  | "BEACH" | "FARMS" | "TINY_HOMES" | "LAKE" | "CONTAINERS" | "CAMPING" | "CASTLE" | "SKIING"
  | "ARTIC" | "BOAT" | "BED_AND_BREAKFASTS" | "ROOMS" | "EARTH_HOMES" | "TOWER" | "CAVES"
  | "LUXES" | "CHEFS_KITCHEN";

export interface Category {
  icon: IconName,
  displayName: string,
  technicalName: CategoryName,
  activated: boolean
}
