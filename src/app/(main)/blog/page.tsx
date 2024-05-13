"use client";

import { db } from "@/firebase/firebase.config";
import { Post } from "@/types";
import { Title } from "@/components/UI/Title/Title";
import { collection, onSnapshot, query } from "firebase/firestore";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./blog-page.module.scss";
import { PostsCard } from "@/components/PostsCard/PostsCard";

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
      className={styles.MyBlog}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Title>Personal Blog</Title>
      <p className={styles.Subtitle}>
        Welcome to my personal blog! 🚀 I consistently share weekly posts that
        explore my ongoing projects, the valuable lessons I'm picking up, and
        the exciting journey of my growth and progress as a developer!
      </p>
      <div className={styles.Posts}>
        {posts.map((post) => (
          <PostsCard key={post.id} {...post} />
        ))}
      </div>
    </motion.section>
  );
}
