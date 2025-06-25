import { ArrowLeft, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AllNotifications = () => {
  const notifications = [
    {
      id: 1,
      message: "A host are registar Now",
      time: "Fri, 12:30pm",
    },
    {
      id: 2,
      message: "An user joined in app.",
      time: "Fri, 12:30pm",
    },
    {
      id: 3,
      message: "An user joined in app.",
      time: "Fri, 12:30pm",
    },
    {
      id: 4,
      message: "An user joined in app.",
      time: "Fri, 12:30pm",
    },
  ];

  return (
    <div className="">
      {/* Header */}
      <div className="bg-[#017783] text-white p-4 flex items-center rounded-md">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-teal-700 mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-medium">Notification</h1>
      </div>

      {/* All Notifications Section */}
      <div className="border-b border-gray-200">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center ml-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:bg-gray-100 mr-2 h-6 w-6"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold text-black ">
              All Notifications
            </h2>
          </div>
        </div>

        {/* Notification Badges */}
      </div>

      {/* Notifications List */}
      <div className="">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start p-4   last:border-b-0 ml-6"
          >
            <div className="mr-3 mt-1">
              <Bell className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 text-sm font-medium mb-1">
                {notification.message}
              </p>
              <p className="text-gray-500 text-xs">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNotifications;
