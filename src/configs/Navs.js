import {ABOUT_SLUG, CONTACT_SLUG, HOME_SLUG} from "./Slugs";

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
        path: CONTACT_SLUG,
        exact: true,
        name: "Contact"
    },
]