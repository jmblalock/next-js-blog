export default function Footer() {
  return (
    <footer className="flex border-box items-center flex-col h-auto justify-center min-h-full p-5">
      <div className="border-box block mb-2.5 mx-auto mt-0 max-w-xs w-full">
        <ul className="flex justify-between text-gray-400">
          <li>
            <a
              href="https://github.com/jmblalock"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center justify-center relative p-2.5 hover:text-carolina-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-grey-400 hover:text-carolina-blue"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/justinblalock"
              aria-label="Twitter"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center justify-center relative p-2.5 hover:text-carolina-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-grey-400 hover:text-carolina-blue"
              >
                <title>Twitter</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/justinmblalock"
              aria-label="Linkedin"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center justify-center relative p-2.5 hover:text-carolina-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-grey-400 hover:text-carolina-blue"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <span className="text-gray-400">Designed & Built by Justin Blalock</span>
    </footer>
  );
}
