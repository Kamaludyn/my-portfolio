import { useEffect } from "react";

const GoogleAnalytics = ({ trackingId }) => {
  useEffect(() => {
    if (!trackingId) return; // Exit if no tracking ID is provided

    // Load the Google Analytics script
    const script = document.createElement("script");
    script.setAttribute("async", "");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", trackingId);
  }, []);

  return null;
};

export default GoogleAnalytics;
