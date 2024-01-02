import Link from 'next/link'

export default function Home() {
  return (
    <nav>
      <ul className='m-10 font-signika text-xl flex gap-2'> 
        <li>
          <Link href="/animate">animate</Link>
        </li>
        <li>
          <Link href="/layout">layout</Link>
        </li>
        <li>
          <Link href="/font">font</Link>
        </li>
        <li>
          <Link href="/extend">extend</Link>
        </li>
        <li>
          <Link href="/responsive">responsive</Link>
        </li>
        <li>
          <Link href="/effect">effect</Link>
        </li>
      </ul>
    </nav>
  );
}
