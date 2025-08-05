export interface Annotation {
  id: string;
  text: string;
  author: string;
  date: string;
  x: number;
  y: number;
}

export interface PostDetail {
  id: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  categories: string[];
  status: string;
  description: string;
  annotations: Annotation[];
}

export const getPostDetail = (id: string): PostDetail => {
  return {
    id: id,
    title: "Beautiful Landscape Photography",
    author: "John Doe",
    date: "2024-01-15",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    categories: ["Nature", "Mountains"],
    status: "Published",
    description:
      "A stunning landscape captured during golden hour in the mountains.",
    annotations: [
      {
        id: "1",
        text: "Beautiful mountain peaks in the background",
        author: "Alice",
        date: "2024-01-16",
        x: 150,
        y: 100,
      },
      {
        id: "2",
        text: "The lighting here is perfect",
        author: "Bob",
        date: "2024-01-17",
        x: 300,
        y: 200,
      },
      {
        id: "3",
        text: "Great composition with the trees",
        author: "Charlie",
        date: "2024-01-18",
        x: 450,
        y: 150,
      },
    ],
  };
}; 