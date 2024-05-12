import Api from "app/service/Api";

type IUpdateProductStep = {
  defaultNextStep: string;
  stepName: string;
  stepId: number;
};
type IAddProductStepConditions = {
  stepId: number | string | null;
  fieldId: number | string | null;
  optionId: any[] | null;
  nextStepId: number | string | null;
};
async function updateProductStep(data: IUpdateProductStep) {
  let response = await Api()?.put("/product/steps/" + data.stepId, {
    step_name: data.stepName,
    next_step_id: data.defaultNextStep,
  });
  return response?.data;
}
async function productStepsList({ code }: { code: string }) {
  let response = await Api()?.get(`/product/${code}/steps`);
  return response?.data;
}
async function addProductStepConditions(data: IAddProductStepConditions) {
  let response = await Api()?.post(`/product/steps/conditions`, {
    step_id: data.stepId,
    field_id: data.fieldId,
    option_id: data.optionId,
    next_step_id: data.nextStepId,
  });
  return response?.data;
}

export { updateProductStep, productStepsList, addProductStepConditions };
