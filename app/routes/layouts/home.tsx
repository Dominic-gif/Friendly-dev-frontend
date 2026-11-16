import { Outlet } from "react-router";
import Hero from "~/components/Hero";

const HomeLayout = () => {
    return (
        <>
        <Hero name="Dominic" />
        <section className="px-6 my-8 max-w-6xl mx-auto">
            <Outlet />
        </section>
        </>
    );
};
export default HomeLayout;