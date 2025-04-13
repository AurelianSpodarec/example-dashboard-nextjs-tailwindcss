import Link from "next/link";

function WebHeader() {
  return (
    <div>
      WebHeader
      <div className="flex flex-col">
        <Link href="/dashboard" className="underline text-blue-700">Go to Dashboard</Link>
        <Link href="/" className="underline text-blue-700">Page: Home</Link>
        <Link href="/test" className="underline text-blue-700">Page: Test</Link>
      </div>
    </div>
  );
}

export default WebHeader
