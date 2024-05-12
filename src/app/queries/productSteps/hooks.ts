import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProductStepConditions,
  productStepsList,
  updateProductStep,
} from "./services";

const useUpdateProductStep = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["updateProductStep"],
    mutationFn: updateProductStep,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["productSteps", { productCode: data.product.code }],
      });
    },
  });
  return {
    mutate,
    loading: isPending,
  };
};
const useAddProductStepConditions = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["addProductStepConditions"],
    mutationFn: addProductStepConditions,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["productSteps", { productCode: data.product.code }],
      });
    },
  });
  return {
    mutate,
    loading: isPending,
  };
};
const useGetAllProductSteps = (productCode: string) => {
  const { data } = useQuery({
    queryKey: ["productSteps", { productCode }],
    queryFn: async () => {
      return await productStepsList({ code: productCode });
    },
  });
  return {
    data,
  };
};

export {
  useUpdateProductStep,
  useAddProductStepConditions,
  useGetAllProductSteps,
};
