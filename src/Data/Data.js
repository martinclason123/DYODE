import images from "../constants/images";

const bannerData = {
  message: "free shipping on all orders over $75",
  mobileMessage: "free shipping on all orders ",
};

const navbarData = [
  {
    title: "men's",
    url: "/mens",
  },
  {
    title: "women's",
    url: "/womens",
  },
  {
    title: "accessories",
    url: "/accessories",
  },
  {
    title: "sale",
    url: "/sale",
  },
];

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

const categoriesData = {
  standardLinks: [
    {
      url: "/womens",
      image: images.Categories1,
      label: "Women's",
      last: false,
    },
    {
      url: "/mens",
      image: images.Categories2,
      label: "Men's",
      last: false,
    },
    {
      url: "/accessories",
      image: images.Categories3,
      label: "Accessories",
      last: true,
    },
  ],
  alternateLink: {
    url: "/accessories",
    image: images.Categories3Mobile,
    label: "Accessories",
  },
};

const carouselData = [
  {
    title: "Product Title",
    description: "women's t-shirt",
    price: "$19.99",
    image: images.Carousel1,
    url: "/product",
  },
  {
    title: "Product Title",
    description: "women's t-shirt",
    price: "$19.99",
    image: images.Carousel1,
    url: "/product",
  },
  {
    title: "Product Title",
    description: "women's t-shirt",
    price: "$19.99",
    image: images.Carousel1,
    url: "/product",
  },
  {
    title: "Product Title",
    description: "women's t-shirt",
    price: "$19.99",
    image: images.Carousel1,
    url: "/product",
  },
];

const favoritesData = {
  imageDesktop: images.Favorites1Full,
  imageMobile: images.Favorites1,
  title: "Our Favorite Tees",
  blurb: "Everyday tees you need!",
  actionMessage: "shop now",
};

const newsletterData = {
  message: "Sign Up & Stay Connected",
  blurb:
    "Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!",
  actionMessage: "subscribe",
};

const footerData = {
  columnA: {
    title: "Customer Service",
    links: [
      {
        title: "Accessibility",
        url: "/accessibility",
      },
      {
        title: "Contact Us",
        url: "./contact Us",
      },
      {
        title: "Return Policy",
        url: "returnpolicy",
      },
      {
        title: "FAQ",
        url: "faq",
      },
      {
        title: "Gift Certificates",
        url: "giftcertificates",
      },
      {
        title: "Wishlist",
        url: "/wishlist",
      },
    ],
  },
  columnB: {
    title: "Company",
    links: [
      {
        title: "About Us",
        url: "/aboutus",
      },
      {
        title: "Careers",
        url: "/careers",
      },
      {
        title: "Press",
        url: "/press",
      },
      {
        title: "Affiliates",
        url: "/affiliates",
      },
    ],
  },
  columnC: {
    title: "Follow Us",
  },
};

export {
  bannerData,
  heroData,
  navbarData,
  categoriesData,
  carouselData,
  favoritesData,
  newsletterData,
  footerData,
};
