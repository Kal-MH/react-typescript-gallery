"use client";

import { usePostsGetAll } from "@/axios/Posts/Posts.query";
import Header from "@/components/home/Header";
import MainGrid from "@/components/home/MainGrid";

const getPostsAll = async () => {
  const res = await fetch("/api/posts", {
    method: "GET",
  });

  const { data } = await res.json();
  console.log(data);
  return data;
};
const mockGetPostsAll = async () => {
  const res = await fetch("/api/posts-get", {
    method: "GET",
  });

  const { data } = await res.json();
  console.log(data);
  return data;
};

export default function Home() {
  const { mutate, isLoading } = usePostsGetAll({
    options: {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.error(err);
      },
    },
  });
  return (
    <main>
      <Header />
      {isLoading && <h1>Loading...</h1>}
      <button onClick={() => mutate()}>React-query Click!</button>
      <button onClick={() => getPostsAll()}>API routes Click!</button>
      <button onClick={() => mockGetPostsAll()}>MSW Click!</button>
      <MainGrid />
    </main>
  );
}
