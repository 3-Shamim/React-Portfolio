import {lazy} from "react";
import {ABOUT_SLUG, CONTACT_SLUG, HOME_SLUG} from "./Slugs";

const Home = lazy(() => import("../components/home/Home"));
const About = lazy(() => import("../components/about/About"));
const Contact = lazy(() => import("../components/contact/Contact"));

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
    {
        path: CONTACT_SLUG,
        exact: true,
        component: Contact
    },
]