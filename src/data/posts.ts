export interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  categories: string[];
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Beautiful Landscape Photography with a Very Long Title That Should Truncate",
    author: "John Doe",
    date: "2024-01-15",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    categories: ["Nature", "Mountains"],
  },
  {
    id: "2",
    title: "Urban Architecture in Modern Cities",
    author: "Jane Smith",
    date: "2024-01-14",
    imageUrl:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    categories: ["Architecture", "Urban"],
  },
  {
    id: "3",
    title: "Street Photography: Life in Motion",
    author: "Mike Johnson",
    date: "2024-01-13",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    categories: ["Street"],
  },
  {
    id: "4",
    title: "Portrait Photography: Capturing Emotions",
    author: "Sarah Wilson",
    date: "2024-01-12",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    categories: ["Portrait", "People"],
  },
  {
    id: "5",
    title: "Wildlife Photography: Nature's Beauty",
    author: "David Brown",
    date: "2024-01-11",
    imageUrl:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop",
    categories: ["Wildlife", "Animals"],
  },
  {
    id: "6",
    title: "Abstract Art Photography",
    author: "Lisa Chen",
    date: "2024-01-10",
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    categories: ["Abstract"],
  },
]; 