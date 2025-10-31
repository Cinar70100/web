"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/admin-nav-data";

interface SidebarMenuItemProps {
  item: NavItem;
}

const isMatchingPath = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

const hasActiveChild = (pathname: string, item: NavItem): boolean =>
  !!item.children?.some((child) => isMatchingPath(pathname, child.href) || hasActiveChild(pathname, child));

export default function SidebarMenuItem({ item }: SidebarMenuItemProps) {
  const pathname = usePathname();
  const activeChild = hasActiveChild(pathname, item);
  const [isOpen, setIsOpen] = useState(
    isMatchingPath(pathname, item.href) || activeChild,
  );

  const isActive =
    isMatchingPath(pathname, item.href) ||
    activeChild ||
    (!item.children && pathname.startsWith(item.href));

  if (item.children) {
    return (
      <li className={`${isActive ? "bg-gray-700" : ""} rounded-lg`}>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-lg p-3 text-sm font-medium text-gray-100 transition hover:bg-gray-700 hover:text-white"
        >
          <span className="flex items-center">
            {item.icon && <span className="mr-3 flex-shrink-0">{item.icon}</span>}
            <span>{item.title}</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <ul className="mt-1 space-y-1 pl-6">
            {item.children.map((child) => {
              const childActive = isMatchingPath(pathname, child.href) || hasActiveChild(pathname, child);

              if (child.children?.length) {
                return (
                  <li key={child.title} className="space-y-1">
                    <Link
                      href={child.href}
                      className={`flex items-center justify-between rounded-lg p-2.5 text-xs font-medium transition ${
                        childActive
                          ? "bg-gray-600 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      <span>{child.title}</span>
                      <span className="text-[10px] uppercase tracking-wider text-gray-400">alt</span>
                    </Link>
                    <ul className="space-y-1 border-l border-gray-600/40 pl-4">
                      {child.children.map((grandChild) => {
                        const grandChildActive = isMatchingPath(pathname, grandChild.href);
                        return (
                          <li key={grandChild.title}>
                            <Link
                              href={grandChild.href}
                              className={`block rounded-lg p-2 text-[11px] font-medium transition ${
                                grandChildActive
                                  ? "bg-gray-600 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
                              }`}
                            >
                              {grandChild.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={child.title}>
                  <Link
                    href={child.href}
                    className={`block rounded-lg p-2.5 text-xs font-medium transition ${
                      childActive
                        ? "bg-gray-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {child.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        className={`flex items-center rounded-lg p-3 text-sm font-medium transition ${
          isActive
            ? "bg-gray-700 text-white"
            : "text-gray-100 hover:bg-gray-700 hover:text-white"
        }`}
      >
        {item.icon && <span className="mr-3 flex-shrink-0">{item.icon}</span>}
        <span>{item.title}</span>
      </Link>
    </li>
  );
}
