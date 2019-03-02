// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.jsx";
import Signin from "views/SignIn/SignIn.jsx"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "داشبورد",
    icon: Dashboard,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "پروفایل کاربران",
    icon: Person,
    component: UserProfile,
    layout: "/rtl"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "لیست کاربران",
    icon: "content_paste",
    component: TableList,
    layout: "/rtl"
  },

  {
    path: "/typography",
    name: "Typography",
    rtlName: "تایپوگرافی",
    icon: LibraryBooks,
    component: Typography,
    layout: "/rtl"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "آیکن ها",
    icon: BubbleChart,
    component: Icons,
    layout: "/rtl"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "نقشه ها",
    icon: LocationOn,
    component: Maps,
    layout: "/rtl"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "اطلاعیه ها",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/rtl"
  },
  {
    path: "/login",
    name: "login",
    rtlName: "صفحه لاگین",
    icon: Language,
    component: Signin,
    layout: ""
  }
];

export default dashboardRoutes;
