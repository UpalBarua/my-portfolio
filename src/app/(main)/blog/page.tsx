"use client";

import { PostsCard } from "@/components/PostsCard/PostsCard";
import { db } from "@/firebase/firebase.config";
import { Post } from "@/types";
import { collection, onSnapshot, query } from "firebase/firestore";
import { motion } from "framer-motion";
import { useState } from "react";

import { css } from "styled-system/css";
import { vstack, grid } from "styled-system/patterns";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  const q = query(collection(db, "posts"));

  onSnapshot(q, (querySnapshot) => {
    const posts: Post[] = [];
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data(),
      } as Post);
    });
    setPosts(posts);
  });

  return (
    <motion.section
      className={vstack({
        gap: 4,
        maxW: "5xl",
        py: 20,
      })}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1
        className={css({
          textStyle: "title",
          fontSize: "4xl",
        })}
      >
        Personal Blog
      </h1>
      <p
        className={css({
          textStyle: "text",
          maxW: "60%",
          color: "foreground.secondary",
          textAlign: "center",
        })}
      >
        Welcome to my personal blog! 🚀 I consistently share weekly posts that
        explore my ongoing projects, the valuable lessons I'm picking up, and
        the exciting journey of my growth and progress as a developer!
      </p>
      <div
        className={grid({
          gap: 4,
          pt: 4,
          columns: 2,
        })}
      >
        {posts.map((post) => (
          <PostsCard key={post.id} {...post} />
        ))}
      </div>
    </motion.section>
  );
}
