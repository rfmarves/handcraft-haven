import HandcraftHeader from "@/app/components/handcraft-header"

/**this is  the layout structure for the product detail page.
 *This is based on the product id provided
 include the header in this layout
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  /**return a div with  */
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
      
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}
