"use client";

import { usePostsGetAll } from "@/axios/Posts/Posts.query";
import Header from "@/components/home/Header";
import MainGrid from "@/components/home/MainGrid";

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
      <button onClick={() => mutate()}>Click!</button>
      <MainGrid />
    </main>
  );
}
