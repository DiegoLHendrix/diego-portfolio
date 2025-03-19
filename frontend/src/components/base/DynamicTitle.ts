import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Define the type for the pathname to ensure correct typing
type TitleMap = { [key: string]: string };

function getTitle(pathname: string): string {
  const titles: TitleMap = {
    "/": "Home - My Portfolio",
    "/resume": "Resume",
    "/contact": "Contact",
    "/projects": "Projects",
  };

  return titles[pathname] || "My Portfolio";
}

export function DynamicTitle(): null {
  const location = useLocation();

  useEffect(() => {
    document.title = getTitle(location.pathname);
  }, [location.pathname]);

  return null;
}

export function StaticTitle(): null {
  const location = useLocation();

  useEffect(() => {
    document.title = "My Portfolio";
  }, [location.pathname]);

  return null;
}
