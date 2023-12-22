import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const CARD_NAMES = [
  { title: 'Next.js 13' },
  { title: 'NextUI' },
  { title: 'YouTuber' },
]

export const TREE_LINKS = [
  { title: 'YouTube', href: 'https://youtube.com'},
  { title: 'GitHub', href: 'https://github.com'},
  { title: 'LinkedIn', href: 'https://linkedin.com'},
]