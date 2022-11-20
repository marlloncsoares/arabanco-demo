import { RoutesMap } from "@core/routes";
import { makeDashboardPage } from "@main/factories";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesMap.auth.login} element={<></>} />
      <Route path={RoutesMap.dashboard.main} element={<PrivateRoute />}>
        <Route path="" element={makeDashboardPage()} />
      </Route>
    </Routes>
  );
};

export default Router;
