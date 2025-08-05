import React from "react";
import { useParams } from "react-router-dom";
import { getPostDetail, type PostDetail } from "../../data/postDetail";

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = getPostDetail(id || "1");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Image */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* Post Info */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <p className="text-gray-600 mb-6">{post.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-500">
                      Author
                    </span>
                    <span className="text-sm text-gray-900">{post.author}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-500">
                      Date
                    </span>
                    <span className="text-sm text-gray-900">{post.date}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-500">
                      Categories
                    </span>
                    <span className="flex flex-wrap gap-1">
                      {post.categories.map((cat) => (
                        <span key={cat} className="designlab-badge">
                          {cat}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-500">
                      Status
                    </span>
                    <span
                      className={`text-sm px-2 py-1 rounded-full font-medium ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {post.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Annotations */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Annotations ({post.annotations.length})
                </h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {post.annotations.map((annotation) => (
                    <div
                      key={annotation.id}
                      className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg"
                    >
                      <p className="text-sm text-gray-900 mb-2">
                        {annotation.text}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{annotation.author}</span>
                        <span>{annotation.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Annotation Button */}
              <div className="mt-6">
                <button className="designlab-button w-full">
                  Add Annotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
