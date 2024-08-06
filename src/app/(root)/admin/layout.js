import SideMenu from "@/app/components/Admin/SideMenu";

export default function RootLayout({ children }) {
  return (
    <div className="relative flex w-full h-full ">
      <SideMenu />
      {children}
    </div>
  );
}
