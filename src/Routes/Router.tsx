import { Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import {
  MiddlewareRoute,
  PrivateRoute,
  PublicRoute,
} from "../app/utils/routeUtils";

const MainLayout = React.lazy(
  () => import("../components/templates/MainLayout")
);
const AuthLayout = React.lazy(
  () => import("../components/templates/AuthLayout")
);
const EnterPhone = React.lazy(() => import("../pages/auth/EnterPhone"));
const VerifyPhone = React.lazy(() => import("../pages/auth/VerifyPhone"));

const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Orders = React.lazy(() => import("../pages/orders"));
const AddOrder = React.lazy(() => import("../pages/orders/AddOrder"));
const OrderDetails = React.lazy(() => import("../pages/orders/OrderDetails"));
const CompleteOrder = React.lazy(() => import("../pages/orders/CompleteOrder"));
const ShowOrderStepForm = React.lazy(
  () => import("../pages/orders/ShowOrderStepForm")
);
const FormBuilder = React.lazy(
  () => import("../pages/formBuilder/FormBuilder")
);
const Products = React.lazy(() => import("../pages/products/index"));
const ProductSteps = React.lazy(() => import("pages/productSteps/index"));

const BasicDatas = React.lazy(() => import("../pages/basicDatas/index"));
const BasicDataList = React.lazy(() => import("../pages/basicDataList/index"));

const Permissions = React.lazy(() => import("../pages/permissions/index"));

const Factors = React.lazy(() => import("../pages/financial/index"));
const Wallet = React.lazy(() => import("../pages/wallet/index"));

const Router = (): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders">
              <Route path="" element={<Orders />}></Route>
              <Route path="create" element={<AddOrder />}></Route>
              <Route path=":orderId" element={<OrderDetails />}></Route>
              <Route
                path=":orderId/complete"
                element={<CompleteOrder />}
              ></Route>
              <Route
                path=":orderId/:stepId/showForm"
                element={<ShowOrderStepForm />}
              ></Route>
            </Route>
            <Route
              path="/products"
              element={<MiddlewareRoute permission="manage-products" />}
            >
              <Route path="" element={<Products />}></Route>
              <Route path=":code/steps" element={<ProductSteps />}></Route>

              <Route
                path=""
                element={<MiddlewareRoute permission="manage-forms" />}
              >
                <Route
                  path=":code/steps/:step_id/form"
                  element={<FormBuilder />}
                ></Route>
              </Route>
            </Route>
            <Route
              path="/basicDatas"
              element={<MiddlewareRoute permission="manage-basic-data" />}
            >
              <Route path="" element={<BasicDatas />}></Route>
              <Route path=":id" element={<BasicDataList />}></Route>
            </Route>

            <Route
              path="/finance"
              // element={<MiddlewareRoute permission="manage-finance" />}
            >
              <Route path="" element={<Factors />}></Route>
            </Route>

            <Route
              path="/wallet"
              // element={<MiddlewareRoute permission="manage-finance" />}
            >
              <Route path="" element={<Wallet />}></Route>
            </Route>

            <Route
              path="/permissions"
              element={<MiddlewareRoute permission="manage-permissions" />}
            >
              <Route path="" element={<Permissions />}></Route>
            </Route>
          </Route>
        </Route>

        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/auth/*" element={<Navigate to="/auth/login" />} />
            <Route path="/auth/login" element={<EnterPhone />} />
            <Route path="/auth/verify" element={<VerifyPhone />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
