import Topbar from "./topbar";

interface PageProps {
  children: React.ReactNode;
}
const Page = ({ children }: PageProps) => {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
};

export default Page;
