import MainDashboard from "@/components/MainDashboard";
import MenuSidebar from "@/components/MenuSidebar";

export default function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 5,
        height: '100%'
      }}>
      <MenuSidebar />
      <MainDashboard />
    </div>
  );
}
