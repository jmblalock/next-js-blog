import Container from "../components/Container";
import CodeTag from "../components/CodeTag";

export default function Workxperience() {
  return (
    <Container>
      <h2 className="text-green-cyan text-4xl font-mono mb-12">
        Some things I've built
      </h2>
      <p className="text-2xl text-gray-400"></p>
      <ul className="text-2xl text-gray-400">
        <li className="grid grid-cols-12 gap-10 mb-24">
          <div className="col-start-7 col-span-6 text-right relative row-span-full">
            <div className="text-right">
              <p className="m-2.5 text-carolina-blue text-base font-normal">
                Featured Project
              </p>
              <h3 className="mb-5">
                <a
                  className="hover:text-carolina-blue"
                  href="https://eo-wayfarer.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Wayfarer
                </a>
              </h3>
              <div className="project-description relative z-20 p-6 rounded text-lg">
                <p className="m-0">
                  Interactive traveling blog to post articles and learn from
                  other user's experiences. Wayfarer also offers an internal API
                  hosting 60+ destinations including travel tips and important
                  info before you next vacation!
                </p>
              </div>
              <ul className="flex flex-row flex-wrap content-center relative justify-end z-20 mt-6 mb-2.5 p-0 list-none">
                <li className="mb-1.5 ml-5 whitespace-normal">
                  <CodeTag>Python</CodeTag>
                </li>
                <li className="mb-1.5 ml-5 whitespace-normal">
                  <CodeTag>Django</CodeTag>
                </li>
                <li className="mb-1.5 ml-5 whitespace-normal">
                  <CodeTag>PostgreSQL</CodeTag>
                </li>
              </ul>
              <div className="flex justify-end items-center relative ml-0 -mr-2.5 mt-2.5">
                <a
                  href="https://github.com/jmblalock/exploring-odyssey"
                  aria-label="GitHub Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="public/GitHub-Mark-Light-64px.png"></img>
                </a>
                <a>
                  <svg>
                    <title></title>
                  </svg>
                </a>
              </div>
            </div>
            <div>project-image</div>
          </div>
        </li>
        {/* <li>Sick Fits</li> */}
        {/* <li>Personal Website</li> */}
      </ul>
    </Container>
  );
}
