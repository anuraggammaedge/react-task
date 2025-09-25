import React from "react";
import { useQuery } from "@tanstack/react-query";

export const EleventhTask = () => {
  const url =
    "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech";

  const { isLoading, error, data } = useQuery({
    queryKey: ["books"],
    queryFn: () => fetch(url).then((res) => res.json()),
    staleTime: 1000 * 30,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return <div>EleventhTask</div>;
};
