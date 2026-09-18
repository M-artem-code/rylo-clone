import { NavItem, FooterColumn, SocialLink } from "@/types";

export const headerNavItems: NavItem[] = [
  { label: "Products", href: "#captioning", hasDropdown: true },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "Company", href: "#company", hasDropdown: true },
  { label: "Support", href: "/contact" },
  { label: "For Audiologists", href: "/audiologist-hub" },
];

export const footerFeatures = [
  {
    title: "Phone Call Captioning",
    href: "/",
    icon: "PhoneHandsetIcon",
  },
  {
    title: "Live Transcribe",
    href: "/live-transcribe",
    icon: "LiveTranscribeIcon",
  },
  {
    title: "Sidekick for Mac",
    href: "/sidekick",
    icon: "SidekickIcon",
  },
  {
    title: "Sign",
    href: "/sign",
    icon: "SignIcon",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Free Hearing Test", href: "https://rylo.com/hearing-test/", isExternal: true },
      { label: "Audiologist Hub", href: "/audiologist-hub" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Help Center", href: "https://help.rylo.com/en/", isExternal: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "911 Notice", href: "/legal/terms#annex-1-rylo-e911-services" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Google User Data", href: "/legal/google-user-data" },
  { label: "Status", href: "https://rylostatus.com/", isExternal: true },
  { label: "Your Privacy Choices", href: "/legal/privacy#cookies-and-other-information-collected-by-automated-means" },
];

export const socialLinks: SocialLink[] = [
  { platform: "X", href: "https://x.com/RyloHQ", iconName: "TwitterXIcon" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/company/rylohq", iconName: "LinkedInIcon" },
  { platform: "TikTok", href: "https://www.tiktok.com/@rylohq", iconName: "TikTokIcon" },
  { platform: "Instagram", href: "https://www.instagram.com/rylohq/", iconName: "InstagramIcon" },
  { platform: "Facebook", href: "https://www.facebook.com/ryloHQ/", iconName: "FacebookIcon" },
];
