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
const Orders = React.lazy(() => import("../pages/Orders"));
const FormBuilder = React.lazy(() => import("../pages/formBuilder/FormBuilder"));

const Router = (): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Navigate to="/" />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/formBuilder" element={<FormBuilder />} />

            {/* <Route path="/" element={<ChatList />} /> */}
            {/* <Route path="/dialog/:peerId" element={<Dialog />} /> */}
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
