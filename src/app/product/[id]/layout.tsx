import HandcraftHeader from "@/app/components/handcraft-header";

/**
 * Layout for the product detail pages.
 * Includes the site header.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* Sidebar / header area */}
      <div className="w-full flex-none md:w-64">
        <HandcraftHeader />
      </div>

      {/* Main content */}
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
