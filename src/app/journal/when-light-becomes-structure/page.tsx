import type { Metadata } from "next";

import { ArticleView } from "@/components/vanta/article-view";

export const metadata: Metadata = { title: "When light becomes structure" };

export default function ArticlePage() {
  return <ArticleView />;
}
