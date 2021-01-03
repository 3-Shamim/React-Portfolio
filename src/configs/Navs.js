import {ABOUT_SLUG, CONTACT_SLUG, HOME_SLUG, RESUME_SLUG} from "./Slugs";

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
        path: CONTACT_SLUG,
        exact: true,
        name: "Contact"
    },
]