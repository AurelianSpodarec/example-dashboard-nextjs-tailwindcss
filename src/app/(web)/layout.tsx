import WebFooter from "./_components/Footer"
import WebHeader from "./_components/Header"

function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebHeader />
      {children}
      <WebFooter />
    </>
  )
}

export default WebLayout
