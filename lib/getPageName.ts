export const getPageName = (pathname: string) => {
  const pathnames = pathname.split("/").filter((x) => x);

  const pathDisplayNames: Record<string, string> = {
    about: "About",
    "contact-us": "Contact Us",
  };

  const currentPath = pathnames[pathnames.length - 1] || "home";

  return (
    pathDisplayNames[currentPath] ||
    currentPath.charAt(0).toUpperCase() + currentPath.slice(1)
  );
};
