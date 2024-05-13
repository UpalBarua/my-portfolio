"use client";

import { DashboardPostsCard } from "@/components/DashboardPostsCard/DashboardPostsCard";
import { Button } from "@/components/UI/Button/Button";
import { db } from "@/firebase/firebase.config";
import { Post } from "@/types";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState } from "react";
import styles from "./blog.module.scss";

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
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Manage Posts</h2>
        <Button asLink variant="primary" href="/dashboard/blog/new">
          Add New Post
        </Button>
      </div>
      <ul className={styles.skills}>
        {posts.map((post) => (
          <DashboardPostsCard key={post.id} {...post} />
        ))}
      </ul>
    </section>
  );
}
