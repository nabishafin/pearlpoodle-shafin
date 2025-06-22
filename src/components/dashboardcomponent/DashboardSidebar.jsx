import {
  LayoutDashboard,
  Users2,
  ShoppingBasket,
  DollarSign,
  Download,
  RotateCcw,
  Folder,
  Flag,
  Settings,
  UserCog,
  Key,
  Info,
  ShieldCheck,
  FileText,
  ScrollText,
  LogOut,
  Music,
  Menu,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users2,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: ShoppingBasket,
  },
  {
    title: "Earnings",
    href: "/dashboard/earnings",
    icon: DollarSign,
  },
  {
    title: "Withdraw Request",
    href: "/dashboard/withdraw",
    icon: Download,
  },
  {
    title: "Refund Request",
    href: "/dashboard/refund",
    icon: RotateCcw,
  },
  {
    title: "Category",
    href: "/dashboard/category",
    icon: Folder,
  },
  {
    title: "Report",
    href: "/dashboard/report",
    icon: Flag,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    children: [
      {
        title: "Personal Information",
        href: "/dashboard/settings/personal",
        icon: UserCog,
      },
      {
        title: "Change Password",
        href: "/dashboard/settings/password",
        icon: Key,
      },
      {
        title: "About Us",
        href: "/dashboard/settings/about",
        icon: Info,
      },
      {
        title: "Buyer Protection",
        href: "/dashboard/settings/buyer-protection",
        icon: ShieldCheck,
      },
      {
        title: "Privacy Policy",
        href: "/dashboard/settings/privacy",
        icon: FileText,
      },
      {
        title: "Terms & Condition",
        href: "/dashboard/settings/terms",
        icon: ScrollText,
      },
    ],
  },
  {
    title: "Logout",
    href: "/logout",
    icon: LogOut,
  },
];

function DesktopSidebar() {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpanded = (href) => {
    setExpandedItems((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    );
  };

  const isExpanded = (href) => expandedItems.includes(href);

  return (
    <div className="hidden lg:flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2 p-6 border-b border-gray-200">
        <div className="bg-teal-600 p-2 rounded-lg">
          <Music className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Dance Affair</h2>
          <p className="text-sm text-gray-500">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            const hasChildren = item.children && item.children.length > 0;
            const expanded = isExpanded(item.href);

            return (
              <li key={item.href}>
                {hasChildren ? (
                  <div>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-3 h-10",
                        isActive
                          ? "bg-teal-50 text-[#017783] hover:bg-teal-100"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      )}
                      onClick={() => toggleExpanded(item.href)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="flex-1 text-left">{item.title}</span>
                      {expanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>

                    {/* Submenu */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200 ease-in-out",
                        expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <ul className="mt-2 ml-4 space-y-1">
                        {item.children?.map((child) => {
                          const isChildActive =
                            location.pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link to={child.href}>
                                <Button
                                  variant="ghost"
                                  className={cn(
                                    "w-full justify-start gap-3 h-9 text-sm",
                                    isChildActive
                                      ? "bg-teal-50 text-[#017783] hover:bg-teal-100"
                                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                  )}
                                >
                                  <child.icon className="h-3 w-3" />
                                  {child.title}
                                </Button>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link to={item.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-3 h-10",
                        isActive
                          ? "bg-teal-50 text-[#017783] hover:bg-teal-100"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Button>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function MobileSidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpanded = (href) => {
    setExpandedItems((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    );
  };

  const isExpanded = (href) => expandedItems.includes(href);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:bg-teal-700"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <div className="flex h-full flex-col bg-white">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Music className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Dance Affair
                </h2>
                <p className="text-sm text-gray-500">Admin Panel</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const isActive = location.pathname === item.href;
                const hasChildren = item.children && item.children.length > 0;
                const expanded = isExpanded(item.href);

                return (
                  <li key={item.href}>
                    {hasChildren ? (
                      <div>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start gap-3 h-10",
                            isActive
                              ? "bg-teal-50 text-teal-700 hover:bg-teal-100"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          )}
                          onClick={() => toggleExpanded(item.href)}
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="flex-1 text-left">{item.title}</span>
                          {expanded ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>

                        {/* Submenu */}
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-200 ease-in-out",
                            expanded
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          )}
                        >
                          <ul className="mt-2 ml-4 space-y-1">
                            {item.children?.map((child) => {
                              const isChildActive =
                                location.pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    to={child.href}
                                    onClick={() => setOpen(false)}
                                  >
                                    <Button
                                      variant="ghost"
                                      className={cn(
                                        "w-full justify-start gap-3 h-9 text-sm",
                                        isChildActive
                                          ? "bg-teal-50 text-teal-700 hover:bg-teal-100"
                                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                      )}
                                    >
                                      <child.icon className="h-3 w-3" />
                                      {child.title}
                                    </Button>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <Link to={item.href} onClick={() => setOpen(false)}>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start gap-3 h-10",
                            isActive
                              ? "bg-teal-50 text-teal-700 hover:bg-teal-100"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </Button>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function DashboardSidebar() {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
}
