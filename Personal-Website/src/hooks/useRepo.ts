import { useQuery } from "@tanstack/react-query";
import APIClient, { githubUserName } from "../services/api-client";

const apiClient = new APIClient(`/users/${githubUserName}/repos`);

const useRepo = () => {
  return useQuery({
    queryKey: ["repos"],
    queryFn: () => apiClient.getReposReadme({}),
  });
};

export default useRepo;
