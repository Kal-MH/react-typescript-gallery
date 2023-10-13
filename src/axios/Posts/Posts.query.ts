import { useMutation } from "react-query";
import postsApi from "./Posts.api";
import { UseMutationOptions } from "react-query/types/react";

const QUERY_KEY_POSTS_API = {
  POSTS_GET_ALL: () =>
    ["POSTS_GET_ALL"].filter((key) => typeof key !== undefined),
};

export const usePostsGetAll = (params: {
  options:
    | Omit<
        UseMutationOptions<any, unknown, void, unknown>,
        "mutationKey" | "mutationFn"
      >
    | undefined;
}) => {
  const mutationKey = QUERY_KEY_POSTS_API.POSTS_GET_ALL();
  const result = useMutation(
    mutationKey,
    postsApi.postsGetAll,
    params?.options,
  );

  return { ...result, mutationKey };
};
