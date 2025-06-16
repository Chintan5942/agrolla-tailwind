"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,zh-CN,hi,ar", // English, Chinese (Simplified), Hindi, Arabic
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    if (!window.google?.translate) {
      addGoogleTranslateScript();
    }
  }, []);

  return (
    <div id="google_translate_element" className="fixed z-50 top-2 right-2" />
  );
}