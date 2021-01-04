import {ABOUT_SLUG, CONTACT_SLUG, HOME_SLUG, PROJECT_SLUG, RESUME_SLUG, SERVICE_SLUG} from "./Slugs";

export const Navs = [
    {
        path: HOME_SLUG,
        exact: true,
        name: "Home"
    },
    {
        path: ABOUT_SLUG,
        exact: true,
        name: "About"
    },
    {
        path: RESUME_SLUG,
        exact: true,
        name: "Resume"
    },
    {
        path: PROJECT_SLUG,
        exact: true,
        name: "Project"
    },
    {
        path: SERVICE_SLUG,
        exact: true,
        name: "Service"
    },
    {
        path: CONTACT_SLUG,
        exact: true,
        name: "Contact"
    },
]