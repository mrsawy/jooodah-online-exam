import React from "react";
import { useTranslation } from "react-i18next";

import EnglishFlag from "./EnglishFlag";
import SaudiArabiaFlag from "./SaudiArabiaFlag";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  console.log(currentLanguage);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
        class=" bg-gray-300 transition-all my-auto  inline-flex items-center font-medium justify-center px-4 py-3 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {currentLanguage == `en` ? (
          <>
            <EnglishFlag />
            {t("english")}
          </>
        ) : (
          <>
            <SaudiArabiaFlag />
            {t("arabic")}
          </>
        )}
      </button>
      <div
        class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        id="language-dropdown-menu"
      >
        <ul class="py-2 font-medium" role="none">
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage("en");
              }}
            >
              <div class="inline-flex items-center">
                <EnglishFlag />
                {t("english")}
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage("ar");
              }}
            >
              <div class="inline-flex items-center">
                <SaudiArabiaFlag />
                {t("arabic")}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
