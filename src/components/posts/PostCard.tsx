import React from "react";
import { Link } from "react-router-dom";
import type { Post } from "../../data/posts";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="block">
      <div className="designlab-card group">
        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          {/* Floating Category Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-1 items-end opacity-100 group-hover:opacity-0 transition-opacity duration-200">
            {post.categories.map((cat) => (
              <span key={cat} className="designlab-badge">
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4 pb-0">
          <h3
            className="text-lg font-semibold text-gray-900 mb-3 truncate"
            title={post.title}
          >
            {post.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <span className="flex items-center">
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {post.author}
            </span>
            <span className="flex items-center">
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {post.date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
