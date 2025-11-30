"use client";

import { FaLine, FaHome } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPageName } from "@/lib/getPageName";

const BreadCrumb = () => {
  const pathname = usePathname() || "/";
  const pathnames = pathname.split("/").filter((x) => x);

  // Custom display names for specific paths
  const pathDisplayNames: Record<string, string> = {
    // "faqs": "Frequently Asked Questions",
    "about": "About",
    "contact-us": "Contact Us",
    "buildingProjects": "Building Projects",
  };

  // Get the current page name
  const currentPath = pathnames[pathnames.length - 1] || "home";
//   const pageName = getPageName(pathname);
  return (
    <div className="flex items-center justify-between w-full">

      <div className="flex items-center text-[18px] gap-2">
        <Link href="/">
          <FaHome />
        </Link>
        {pathnames.map((path, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

          const displayName = getPageName(routeTo);
          const isLast = index === pathnames.length - 1;

          return (
            <div key={routeTo} className="flex items-center gap-2">
                -
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