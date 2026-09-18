export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  alt: string;
}

export const articles: Article[] = [
  {
    slug: "how-to-call-a-deaf-person-on-the-phone",
    category: "Deaf Culture",
    title: "How to Call a Deaf Person on the Phone: The Complete 2026 Guide",
    excerpt:
      "Need to call a deaf person on the phone? Learn how 711 relay services, VRS, captioned phones, and apps like Nagish make communication simple in 2026.",
    date: "June 12, 2026",
    image: "/images/blog-how-to-call-a-deaf-person-on-the-phone.BL0W2BRJ_IgyYE.webp",
    alt: "A person holding a smartphone to their ear during a captioned call.",
  },
  {
    slug: "how-to-sign-deaf-in-asl",
    category: "Deaf Culture",
    title: "How to Sign \"Deaf\" in ASL",
    excerpt:
      "Want to learn how to sign \"deaf\" in ASL? Follow step-by-step instructions, see accepted variations, avoid common mistakes, and understand Deaf culture.",
    date: "June 11, 2026",
    image: "/images/blog-how-to-sign-deaf-in-asl.BaKUCYa7_Z1p1F5X.webp",
    alt: "A classroom demonstration of the American Sign Language sign for “deaf”.",
  },
  {
    slug: "how-to-know-if-youre-going-deaf-in-one-ear",
    category: "Hearing Loss",
    title: "How to Know If You're Going Deaf in One Ear: Common Signs, Causes, and What to Do Next",
    excerpt:
      "Wondering if you're going deaf in one ear? Learn the early signs of single-sided hearing loss, common causes, when it's an emergency, and what to do next.",
    date: "June 11, 2026",
    image: "/images/blog-how-to-know-if-youre-going-deaf-in-one-ear.BXSX73zv_lpmBq.webp",
    alt: "A person leaning in to listen, a hand cupped behind one ear.",
  },
];
