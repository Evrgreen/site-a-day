import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav>
        <Link href='/'>
          <a className='logo'>100 Lessons, 100 Days</a>
        </Link>
        <div>
          <Link href='/about'>
            <a>ABOUT</a>
          </Link>

          <a href='https://github.com/Evrgreen/site-a-day'>GITHUB</a>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-between;
            background: #0d1821;
            color: #0c7489;
          }
          .logo {
            margin: 5px 5rem;
            font-weight: 700;
          }
          nav div {
            width: 30%;
            display: flex;
            justify-content: space-around;
          }
          nav div > * {
            margin-top: 5px;
            font-weight: 800;
          }
        `}
      </style>
    </>
  );
};
export default Nav;
