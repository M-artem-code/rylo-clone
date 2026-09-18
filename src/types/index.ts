export interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  role?: string;
  quote: string;
  rating?: number;
  featured?: boolean;
  avatar?: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ArticleCard {
  id: string;
  title: string;
  category: string;
  slug: string;
  image: string;
  alt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  iconName: string;
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
    hasTag?: boolean;
    tagLabel?: string;
  }[];
}
