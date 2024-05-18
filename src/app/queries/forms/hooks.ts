import { useMutation } from "@tanstack/react-query";
import { addUserAnswer } from "./services";

const useAddUserAnswer = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["addUserAnswer"],
    mutationFn: addUserAnswer,
  });
  return {
    mutate,
    loading: isPending,
  };
};

export { useAddUserAnswer };
