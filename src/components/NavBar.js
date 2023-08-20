import React from "react";
import { DarkMode } from "./DarkMode";
import { NavigationLinks } from "./NavigationLinks";

const NavBar = () => {
  return (
    <nav class="bg-white dark:bg-gray-900 sticky nav-bar w-full z-20 top-0 left-0 shadow-md border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
          <span class="self-center text-4xl font-bold pf-marlet-display whitespace-nowrap dark:text-blue-600 text-gray-900">
            {"{ Akshar }"}
          </span>
        </a>
        <div class="flex">
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <NavigationLinks />
        </div>
        <div class="flex md:order-2">
          <div class="mx-2 md:mx-4">

          <DarkMode/>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
