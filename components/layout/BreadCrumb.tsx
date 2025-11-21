"use client";

import { FaAngleDoubleRight, FaHome } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  // Custom display names for specific paths
  const pathDisplayNames: Record<string, string> = {
    // "faqs": "Frequently Asked Questions",
    "about": "About",
    "contact-us": "Contact Us",
  };

  // Get the current page name
  const currentPath = pathnames[pathnames.length - 1] || "home";
  const pageName = pathDisplayNames[currentPath] || 
    currentPath.charAt(0).toUpperCase() + currentPath.slice(1);

  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-2xl font-semibold">{pageName}</h1>

      {/* Breadcrumb on the Right */}
      <div className="flex items-center text-[18px] gap-2">
        <Link href="/">
          <FaHome />
        </Link>
        {pathnames.map((path, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

          const displayName = pathDisplayNames[path] || 
            path.charAt(0).toUpperCase() + path.slice(1);
          const isLast = index === pathnames.length - 1;

          return (
            <div key={routeTo} className="flex items-center gap-2">
              <FaAngleDoubleRight />
              {isLast ? (
                <span>{displayName}</span>
              ) : (
                <Link href={routeTo}>{displayName}</Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumb;