import { Outlet } from "react-router";
import type { Route } from "../about/+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev " },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const MainLayout = () => {
    return (
        <>
        <section className="px-6 my-8 max-w-6xl mx-auto">
            <Outlet />
        </section>
        </>
    );
};
export default MainLayout;