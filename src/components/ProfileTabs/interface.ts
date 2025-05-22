export interface IProfileTabsProps {
  postCount: number;
  onTabChange?: (tabText: string) => void;
  tabs: ITab[];
}

export interface ITab {
  text: string;
}
