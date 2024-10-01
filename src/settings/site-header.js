export const headerSettings = {
  tabs: [
    {
      id: 1,
      path: "/",
      label: "Home",
    },
    {
      id: 2,
      path: "/about-us",
      label: "About Us",
    },
    {
      id: 3,
      path: "/shop",
      label: "Shop",
      menu: [
        {
          id: 1,
          path: "/shop",
          label: "Shop",
        },
        {
          id: 2,
          path: "/cart-list",
          label: "Cart List",
        },

        {
          id: 3,
          path: "/checkout",
          label: "Checkout",
        },
        {
          id: 4,
          path: "/whishlist",
          label: "Whishlist",
        },
      ],
    },
    {
      id: 4,
      path: "/pages",
      label: "Pages",
      menu: [
        {
          id: 1,
          path: "/chef",
          label: "Chef",
          subMenu: [
            {
              id: 1,
              path: "/chef",
              label: "Chef",
            },
            {
              id: 2,
              path: "/chef-details",
              label: "Chef Details",
            },
          ],
        },
        {
          id: 2,
          path: "/food-menu",
          label: "Food Menu",
        },

        {
          id: 3,
          path: "/gallery",
          label: "Gallery",
        },
        {
          id: 4,
          path: "/services",
          label: "Services",
          subMenu: [
            {
              id: 1,
              path: "/services",
              label: "Services",
            },
            {
              id: 2,
              path: "/services-details",
              label: "Services Details",
            },
          ],
        },
        {
          id: 5,
          path: "/reservation",
          label: "Reservation",
        },
        {
          id: 6,
          path: "/faqs",
          label: "Faq's",
        },
        {
          id: 7,
          path: "/my-account",
          label: "My Account",
        },
        {
          id: 8,
          path: "/404-page",
          label: "404 Page",
        },
      ],
    },
    {
      id: 5,
      path: "/contact-us",
      label: "Contact Us",
    },
  ],

  socials: [
    {
      id: 1,
      path: "/facebook",
      icon: "fa-brands fa-facebook-f",
    },
    {
      id: 2,
      path: "/twitter",
      icon: "fa-brands fa-twitter",
    },
    {
      id: 3,
      path: "/youtube",
      icon: "fa-brands fa-youtube",
    },
    {
      id: 4,
      path: "/linkedin",
      icon: "fa-brands fa-linkedin-in",
    },
  ],

  contactInfo: [
    {
      id: 1,
      path: "/profile",
      icon: "fa-solid fa-location-dot",
      title: "Main Street, Melbourne, Australia",
    },
    {
      id: 2,
      path: "/profile",
      icon: "fa-regular fa-envelope",
      title: "info@fresheat.com",
    },
    {
      id: 3,
      path: "/profile",
      icon: "fa-regular fa-clock",
      title: "Mod-friday, 09am -05pm",
    },
    {
      id: 4,
      path: "/profile",
      icon: "fa-solid fa-phone ",
      title: "+11002345909",
    },
  ],
};
