import { useMutation, useQuery } from "@tanstack/react-query";
import {
  orderGroupsList,
  ordersList,
  orderDetail,
  gotoNextStep,
  getStepInfo,
} from "./services";

const useOrderGroupsList = () => {
  const { data } = useQuery({
    queryKey: ["orderGroups"],
    queryFn: async () => {
      return await orderGroupsList();
    },
  });
  return {
    data,
  };
};
const useOrdersList = () => {
  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await ordersList();
    },
  });
  return {
    data,
  };
};
const useOrdersDetail = (id: number) => {
  const { data } = useQuery({
    queryKey: ["order", { id: id }],
    queryFn: async () => {
      return await orderDetail(id);
    },
  });
  return {
    data,
  };
};

const useGotoNextStep = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["gotoNextStep"],
    mutationFn: gotoNextStep,
  });
  return {
    mutate,
    loading: isPending,
  };
};
const useGetStepInfo = ({
  stepId,
  orderId,
}: {
  stepId: number;
  orderId: number;
}) => {
  const { data } = useQuery({
    queryKey: ["stepInfo", { stepId, orderId }],
    queryFn: () => getStepInfo({ stepId, orderId }),
    staleTime: 0,
  });
  return {
    data,
  };
};

export {
  useOrderGroupsList,
  useOrdersList,
  useOrdersDetail,
  useGotoNextStep,
  useGetStepInfo,
};
