import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import BadgeIcon from "@mui/icons-material/Badge";
import PaymentIcon from "@mui/icons-material/Payment";
import {
  AppProvider,
  Navigation,
  Router,
  Session,
} from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import AddQuarter from "../pages/quarter-master/add-quarter/AddQuarter";
import ViewQuarter from "../pages/quarter-master/view-quarter/ViewQuarter";
import Dashboard from "../pages/dashboard/Dashboard";
import AddBill from "../pages/bill-master/add-bill/AddBill";
import ViewBill from "../pages/bill-master/view-bill/ViewBill";
import BillHistory from "../pages/bill-master/bill-history/BillHistory";
import MakePayment from "../pages/payment-master/make-payment/MakePayment";
import PaymentHistory from "../pages/payment-master/payment-history/PaymentHistory";
import InventoryUpdate from "../pages/inventory/inventory-update/InventoryUpdate";
import Vacation from "../pages/inventory/vacation/Vacation";
import Designation from "../pages/extras/designation/Designation";
import Department from "../pages/extras/department/Department";
import Quarter from "../pages/reports/Quarter";
import Bill from "../pages/reports/Bill";
import Payment from "../pages/reports/Payment";
import Inventory from "../pages/reports/Inventory";
import DesignationReport from "../pages/reports/Designation";
import DepartmentReport from "../pages/reports/Department";

// Map navigation segments to components
const pageComponents: Record<string, React.ReactNode> = {
  dashboard: <Dashboard />,
  addQuarter: <AddQuarter />,
  viewQuarter: <ViewQuarter />,
  addBill: <AddBill />,
  viewBill: <ViewBill />,
  billHistory: <BillHistory />,
  makePayment: <MakePayment />,
  paymentHistory: <PaymentHistory />,
  inventoryUpdate: <InventoryUpdate />,
  vacation: <Vacation />,
  designation: <Designation />,
  department: <Department />,
  quarter: <Quarter />,
  bill: <Bill />,
  payment: <Payment />,
  inventory: <Inventory />,
  designationReport: <DesignationReport />,
  departmentReport: <DepartmentReport />,
};

// Navigation configuration
const NAVIGATION: Navigation = [
  {
    segment: "dashboard",
    title: "My Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "quarterMaster",
    title: "Quarter Master",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "addQuarter",
        title: "Add Quarter",
        icon: <DescriptionIcon />,
      },
      {
        segment: "viewQuarter",
        title: "View Quarter",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "billMaster",
    title: "Bill Master",
    icon: <LayersIcon />,
    children: [
      {
        segment: "addBill",
        title: "Add Bill",
        icon: <DescriptionIcon />,
      },
      {
        segment: "viewBill",
        title: "View Bill",
        icon: <DescriptionIcon />,
      },
      {
        segment: "billHistory",
        title: "Bill History",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "paymentMaster",
    title: "Payment Master",
    icon: <PaymentIcon />,
    children: [
      {
        segment: "makePayment",
        title: "Make Payment",
        icon: <DescriptionIcon />,
      },
      {
        segment: "paymentHistory",
        title: "Payment History",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "inventory",
    title: "Inventory",
    icon: <ShoppingCartIcon />,
    children: [
      {
        segment: "inventoryUpdate",
        title: "Inventory Update",
        icon: <DescriptionIcon />,
      },
      {
        segment: "vacation",
        title: "Vacation",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "extras",
    title: "Extras",
    icon: <BadgeIcon />,
    children: [
      {
        segment: "designation",
        title: "Designation",
        icon: <DescriptionIcon />,
      },
      {
        segment: "department",
        title: "Department",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "quarter",
        title: "Quarter",
        icon: <DescriptionIcon />,
      },
      {
        segment: "bill",
        title: "Bill",
        icon: <DescriptionIcon />,
      },
      {
        segment: "payment",
        title: "Payment",
        icon: <DescriptionIcon />,
      },
      {
        segment: "inventory",
        title: "Inventory",
        icon: <DescriptionIcon />,
      },
      {
        segment: "designation",
        title: "Designation",
        icon: <DescriptionIcon />,
      },
      {
        segment: "department",
        title: "Department",
        icon: <DescriptionIcon />,
      },
    ],
  },
];

// Theme configuration
const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Main AppSideBar component
export default function Layout(props: any) {
  const { window } = props;

  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: "demo",
      email: "demo@gmail.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "demo",
            email: "demo@gmail.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  // Custom router implementation
  function useDemoRouter(initialPath: string): Router {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
      return {
        pathname,
        searchParams: new URLSearchParams(),
        navigate: (path: string | URL) => setPathname(String(path)),
      };
    }, [pathname]);

    return router;
  }

  const router = useDemoRouter("/dashboard");

  // Get the current component based on the pathname
  const getPageComponent = (pathname: string) => {
    const segment = pathname.split("/").pop() || "dashboard";
    return pageComponents[segment] || <Dashboard />;
  };

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      branding={{
        logo: "",
        title: "PEED (CPWD)",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>{getPageComponent(router.pathname)}</PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
