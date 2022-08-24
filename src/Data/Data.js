import images from "../constants/images";

const heroData = [
  {
    title: "Shop New Arivals",
    blurb: "Our coolest items are waiting for you",
    action: "shop now",
    image: images.Hero1,
    mobileImage: images.Hero1Mobile,
    alternateColor: false,
  },
  {
    title: "Our Fave Tees",
    blurb: "Shop all of our favorites",
    action: "shop now",
    image: images.Hero2,
    mobileImage: images.Hero2Mobile,
    alternateColor: true,
  },
  {
    title: "Men's Tees",
    blurb: "Find the perfect shirt",
    action: "shop now",
    image: images.Hero3,
    mobileImage: images.Hero3Mobile,
    alternateColor: true,
  },
];

const footerData = [
  {
    header: "Customer Service",
    links: [
      "Accessibility",
      "Contact Us",
      "Return Policy",
      "FAQ",
      "Gift Certificates",
      "Wishlist",
    ],
  },
  {
    header: "Company",
    links: ["About Us", "Careers", "Press", "Affiliates"],
  },
];

export { heroData };
