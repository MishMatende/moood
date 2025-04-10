import Dashboard from "@/components/Dashboard";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import Main from "@/components/Main";
import { useAuth } from "@/context/AuthContext";

export const metadata = {
  title: "Moood ⋅ Dashboard",
};

export default function Dashboardpage() {
  return (
    <Main>
      <Dashboard />
    </Main>
  );
}
