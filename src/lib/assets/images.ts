import heroImage from './hero.png';
import drMojahid from './dr-mojahid.png';
import lDark from './logo-dark.png';
import lWhite from './logo-white.png';

// Social media icons
import facebook from './social/facebook.png';
import instagram from './social/instagram.png';
import youtube from './social/youtube.png';
import whatsapp from './social/whatsapp.png'; // Assuming you want to add this later if you have the link
import linkedin from './social/linkedin.png';
import skype from './social/skype.png';
import twitter from './social/twitter.png'; // Renamed to 'twitter' as per your original object

export const allImages = {
    heroImage, drMojahid, lDark, lWhite,
};

export const socialImages = {
    facebook, instagram, youtube, whatsapp, linkedin, skype, twitter,
};

// Optional: If you want to strongly type socialImages, though direct import typing is often sufficient
export type SocialImageKeys = keyof typeof socialImages;