import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function getTitle(pathname) {
  const titles = {
    "/": "Home - My Portfolio",
    "/resume": "Resume - My Portfolio",
    "/contact": "Contact - My Portfolio",
    "/projects": "Projects - My Portfolio",
  };

  return titles[pathname] || "My Portfolio";
}

export function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title = getTitle(location.pathname);
  }, [location.pathname]);

  return null;
}

export function StaticTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title = "My Portfolio";
  }, [location.pathname]);

  return null;
}
