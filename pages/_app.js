import '../styles/globals.css';

const links = ["beginnings","now","tech","talks","connect"];

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto max-w-5xl px-4 lg:px-0">
      <header>
        <a href="#" className="mt-10 text-3xl font-bold border-b-2 border-gray-600 inline-block">Jamon Holmgren</a>
        <nav className="py-8">
          <ul className="flex flex-wrap justify-between">
            {links.map((link,index) => <li key={index}>
                <a href="#" className="block m-2 font-mono text-2xl text-center hover:text-red-infinite duration-200">{link}</a>
              </li>)}
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
    );
}

export default MyApp
