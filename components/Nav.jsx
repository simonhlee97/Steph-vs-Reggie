import Link from 'next/link'
const Nav = () => {
  return (
    <>
      <nav className="navbar border-bottom">
        <Link href="/" passHref>
          <a className="nav-item logo">Steph-vs-Reggie</a>
        </Link>
        <Link href="/about" passHref>
          <a className="nav-item">about</a>
        </Link>
      </nav>
      <div className="mb-4">
        <small>Basketball, stats, and charts</small>
      </div>
    </>
  )
}
export default Nav
