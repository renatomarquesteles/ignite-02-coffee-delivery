import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

import { Page } from "./styles";

export const DefaultLayout = () => {
  return (
    <Page>
      <Header />

      {/** The "children-routes" will be inserted in the Outlet component */}
      <Outlet />
    </Page>
  );
};
