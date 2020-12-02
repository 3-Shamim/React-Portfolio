import {lazy} from "react";
import {ABOUT_SLUG, HOME_SLUG} from "./Slugs";

const Home = lazy(() => import("../components/home/Home"));
const About = lazy(() => import("../components/about/About"));

export const Routes = [
    {
        path: HOME_SLUG,
        exact: true,
        component: Home
    },
    {
        path: ABOUT_SLUG,
        exact: true,
        component: About
    },
]