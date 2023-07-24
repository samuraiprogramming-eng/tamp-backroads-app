// == Images Tours ==== //
import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

// ==== Navbar Links ===== //
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

// ==== Navbar Icon ===== //
export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

// ==== Services Section ===== //
export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
];

// ==== Tours Section ===== //
export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2023",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "china",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "October 1th, 2023",
    title: "Best Of Java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "Indonesia",
    duration: 11,
    price: 4100,
  },
  {
    id: 3,
    image: tour3,
    date: "September 15th, 2023",
    title: "Explore Hong Kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "Hong Kong",
    duration: 7,
    price: 7000,
  },
  {
    id: 4,
    image: tour4,
    date: "December 5th, 2023",
    title: "Kenya Highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "Kenya",
    duration: 17,
    price: 1700,
  },
];
