import { nanoid } from "@reduxjs/toolkit";

const menuItems = [
    {
        id: nanoid(),
        to: '/',
        name: "Home page",
        private: false,
    },
     {
        id: nanoid(),
        to: '/my-contacts',
        name: "My contacts",
        private: true,
    }
];

export default menuItems;
