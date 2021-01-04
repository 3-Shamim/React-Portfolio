import {lazy} from "react";
import {ABOUT_SLUG, CONTACT_SLUG, HOME_SLUG, PROJECT_SLUG, RESUME_SLUG, SERVICE_SLUG} from "./Slugs";

const Home = lazy(() => import("../components/home/Home"));
const About = lazy(() => import("../components/about/About"));
const Contact = lazy(() => import("../components/contact/Contact"));
const Resume = lazy(() => import("../components/resume/Resume"));
const Project = lazy(() => import("../components/project/Project"));
const Service = lazy(() => import("../components/service/Service"));

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
        path: RESUME_SLUG,
        exact: true,
        component: Resume
    },
    {
        path: PROJECT_SLUG,
        exact: true,
        component: Project
    },
    {
        path: SERVICE_SLUG,
        exact: true,
        component: Service
    },
    {
        path: CONTACT_SLUG,
        exact: true,
        component: Contact
    },
]