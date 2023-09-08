import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

interface IProps {
  label: string;
}

export default function HeaderPages({ label }: IProps) {
  return (
    <header className="flex flex-row items-center font-normal text-base gap-1">
      <Link
        href={'/'}
        className="underline transition-colors hover:text-blue-800"
      >
        Home
      </Link>
      <span className="flex items-center gap-1">
        <LuChevronRight className="text-gray-500" />
        <strong>{label}</strong>
      </span>
    </header>
  )
}