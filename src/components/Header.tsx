const Header = () => {
  return (
    <>
      <nav className="items-center bg-white border-gray-200 dark:bg-gray-900 backdrop-blur-xl">
        <div className="flex h-20 flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            &lt;Muhammad <span className="text-blue-600">Hasnain</span> /&gt;
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="/"
              className="text-md text-gray-500 dark:text-white hover:underline"
            >
              Home
            </a>
            <a
              href="/"
              className="text-md text-gray-500 dark:text-white hover:underline"
            >
              About
            </a>
            <a
              href="/"
              className="text-md text-gray-500 dark:text-white hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
