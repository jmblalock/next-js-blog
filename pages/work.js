import Container from "../components/Container";
import CodeTag from "../components/CodeTag";
import Image from "next/image";

export default function Work() {
  return (
    <Container>
      <h2 className="flex items-center opacity-100 text-green-cyan text-4xl font-mono mt-2.5 mb-12">
        Some things I've built
      </h2>
      <ul className="text-2xl text-gray-400">
        <li className="grid grid-cols-12 gap-2.5 items-center relative visible mb-8 md:mb-24">
          <div className="project-content flex flex-col h-full justify-center pb-5 px-6 pt-6 col-span-full row-span-full md:col-start-7 md:col-span-6 text-left md:text-right relative  z-50">
            <div>
              <p className="project-overline my-2.5 md:m-2.5 text-carolina-blue text-base font-normal">
                Featured Project
              </p>
              <h3 className="project-title mb-2.5 md:mb-5">
                <a
                  className="inline-block static hover:text-carolina-blue z-10"
                  href="https://eo-wayfarer.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Wayfarer
                </a>
              </h3>
              <div className="project-description relative z-20 px-0 py-5 md:p-6 text-lg md:bg-dark-purple">
                <p className="m-0">
                  Interactive traveling blog. Post articles and learn from other
                  user's experiences. Wayfarer has an internal API hosting 60+
                  destinations.
                </p>
              </div>
              <ul className="project-tech-list flex flex-wrap justify-start md:justify-end relative z-20 mt-2.5 md:mt-6 mb-2.5 p-0 list-none">
                <li className="mt-0 ml-0 mb-1.5 mr-2.5 md:ml-5 whitespace-normal">
                  <CodeTag>Python</CodeTag>
                </li>
                <li className="mt-0 ml-0 mb-1.5 mr-2.5 md:ml-5 whitespace-normal">
                  <CodeTag>Django</CodeTag>
                </li>
                <li className="mt-0 ml-0 mb-1.5 mr-2.5 md:ml-5 whitespace-normal">
                  <CodeTag>PostgreSQL</CodeTag>
                </li>
              </ul>
              <div className="project-links flex justify-start md:justify-end items-center relative mr-0 -ml-2.5 md:ml-0 md:-mr-2.5 mt-2.5">
                <a
                  href="https://github.com/jmblalock/exploring-odyssey"
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
                <a
                  href="https://eo-wayfarer.herokuapp.com/"
                  aria-label="Heroku Deployment"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center justify-center relative p-2.5 hover:text-carolina-blue"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="text-grey-400 hover:text-carolina-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project-image h-full col-start-1 col-span-full md:col-end-8 row-span-full relative z-10">
            <a
              href="https://eo-wayfarer.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="relative inline-block no-underline z-10 bg-dark-blue md:bg-carolina-blue align-middle cursor-pointer h-full w-full rounded"
            >
              <div className="image-wrapper img inline-block max-w-full h-full w-full overflow-hidden relative align-middle rounded object-cover mix-blend-multiply">
                <Image
                  src="https://res.cloudinary.com/dybboi2zd/image/upload/v1630018310/justinblalock.dev/wayfarer_yk6o68.png"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </a>
          </div>
        </li>
        <li className="grid grid-cols-12 gap-2.5 items-center relative visible mb-8 md:mb-24">
          <div className="project-content flex flex-col h-full justify-center pb-5 px-6 pt-6 col-span-full row-span-full md:col-start-1 md:col-end-8 text-right md:text-left relative  z-50">
            <div>
              <p className="project-overline my-2.5 md:m-2.5 text-carolina-blue text-base font-normal">
                Featured Project
              </p>
              <h3 className="project-title mb-2.5 md:mb-5">
                <a
                  className="inline-block static hover:text-carolina-blue z-10"
                  href="https://app.zipcodecollective.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Zip Code Collective
                </a>
              </h3>
              <div className="project-description relative z-20 px-0 py-5 md:p-6 text-lg md:bg-dark-purple">
                <p className="m-0">
                  Zip Code Collective (ZCC) is an online shopping experience
                  with a focus on supporting local businesses. The app includes
                  authentication, permissions, sending email, uploading images,
                  and charging credit cards.
                </p>
              </div>
              <ul className="project-tech-list flex flex-wrap justify-start md:justify-start relative z-20 mt-2.5 md:mt-6 mb-2.5 p-0 list-none">
                <li className="mt-0 ml-0 mb-1.5 mr-2.5 md:ml-5 whitespace-normal">
                  <CodeTag>React</CodeTag>
                </li>
                <li className="mt-0 ml-0 mb-1.5 mr-2.5 md:ml-5 whitespace-normal">
                  <CodeTag>GraphQL</CodeTag>
                </li>
                <li className="mt-0 ml-0 mb-1.5 mr-2.5 md:ml-5 whitespace-normal">
                  <CodeTag>MongoDB</CodeTag>
                </li>
                <li className="mt-0 ml-0 mb-1.5 mr-2.5 md:ml-5 whitespace-normal">
                  <CodeTag>Typescript</CodeTag>
                </li>
              </ul>
              <div className="project-links flex justify-start md:justify-start items-center relative mr-0 -ml-2.5 md:ml-0 md:-mr-2.5 mt-2.5">
                <a
                  href="https://github.com/jmblalock/zcc"
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
                <a
                  href="https://app.zipcodecollective.com/"
                  aria-label="Heroku Deployment"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center justify-center relative p-2.5 hover:text-carolina-blue"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="text-grey-400 hover:text-carolina-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project-image h-full col-start-1 col-span-full md:col-start-7 md:col-span-full row-span-full relative z-10">
            <a
              href="https://app.zipcodecollective.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="relative inline-block no-underline z-10 bg-dark-blue md:bg-carolina-blue align-middle cursor-pointer h-full w-full rounded"
            >
              <div className="image-wrapper img inline-block max-w-full h-full w-full overflow-hidden relative align-middle rounded object-cover mix-blend-multiply">
                <Image
                  src="https://res.cloudinary.com/dybboi2zd/image/upload/v1630018310/justinblalock.dev/zipcodecollective_u3y1j0.png"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </a>
          </div>
        </li>
        <li className="grid grid-cols-12 gap-2.5 items-center relative visible mb-8 md:mb-24">
          <div className="project-content flex flex-col h-full justify-center pb-5 px-6 pt-6 col-span-full row-span-full md:col-start-7 md:col-span-6 text-left md:text-right relative  z-50">
            <div>
              <p className="project-overline my-2.5 md:m-2.5 text-carolina-blue text-base font-normal">
                Featured Project
              </p>
              <h3 className="project-title mb-2.5 md:mb-5">
                <a
                  className="inline-block static hover:text-carolina-blue z-10"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  justinblalock.dev
                </a>
              </h3>
              <div className="project-description relative z-20 px-0 py-5 md:p-6 text-lg md:bg-dark-purple">
                <p className="m-0">
                  You are here! My personal website and portfolio. Built with
                  Next.JS, designed with TailwindCSS and hosted with Nginx on
                  Digital Ocean.
                </p>
              </div>
              <ul className="project-tech-list flex flex-wrap justify-start md:justify-end relative z-20 mt-2.5 md:mt-6 mb-2.5 p-0 list-none">
                <li className="mt-0 ml-0 mb-1.5 mr-2.5 md:ml-5 whitespace-normal">
                  <CodeTag>React</CodeTag>
                </li>
                <li className="mt-0 ml-0 mb-1.5 mr-2.5 md:ml-5 whitespace-normal">
                  <CodeTag>Next.js</CodeTag>
                </li>
                <li className="mt-0 ml-0 mb-1.5 mr-2.5 md:ml-5 whitespace-normal">
                  <CodeTag>TailwindCSS</CodeTag>
                </li>
              </ul>
              <div className="project-links flex justify-start md:justify-end items-center relative mr-0 -ml-2.5 md:ml-0 md:-mr-2.5 mt-2.5">
                <a
                  href="https://github.com/jmblalock/next-js-blog"
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
                <a
                  href=""
                  aria-label="Heroku Deployment"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center justify-center relative p-2.5 hover:text-carolina-blue"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="text-grey-400 hover:text-carolina-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project-image h-full col-start-1 col-span-full md:col-end-8 row-span-full relative z-10">
            <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
              className="relative inline-block no-underline z-10 bg-dark-blue md:bg-carolina-blue align-middle cursor-pointer h-full w-full rounded"
            >
              <div className="image-wrapper img inline-block max-w-full h-full w-full overflow-hidden relative align-middle rounded object-cover mix-blend-multiply">
                <Image
                  src="https://res.cloudinary.com/dybboi2zd/image/upload/v1630018312/justinblalock.dev/justinblalockdev_t2z6pu.png"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </Container>
  );
}
