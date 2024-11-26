import Link from "next/link";

export default function Home() {
  return (
    <Link href="/login" className="hover:underline">
      로그인
    </Link>
  );
}
