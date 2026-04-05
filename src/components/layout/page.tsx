import Topbar from "./topbar";

interface PageProps {
  children: React.ReactNode;
}
const Page = ({ children }: PageProps) => {
  return (
    <div>
      <Topbar />
      <div className="p-10">{children}</div>
    </div>
  );
};

export default Page;
