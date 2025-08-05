import React from "react";
import { posts } from "../../data/posts";
import PostCard from "./PostCard";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Photography
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore stunning images and add your own annotations to create
            meaningful connections with visual content.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="designlab-button">Load More Posts</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
