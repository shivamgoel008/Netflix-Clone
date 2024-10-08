import { AUTH_TOKEN } from "./tmdbKeys";

export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const DEFAULT_AVATAR ="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+AUTH_TOKEN
    }
  };

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";
