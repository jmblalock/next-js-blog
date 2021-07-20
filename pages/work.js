import Container from "../components/Container";

export default function Workxperience() {
  return (
    <Container>
      <h2 className="text-green-cyan text-4xl font-mono">
        Some Things I've Built
      </h2>
      <p className="text-2xl text-gray-400"></p>
      <ul>
        <li className="grid grid-cols-12">
          <div>
            project content
            <div>
              <p>project-overline</p>
              <h3>project title</h3>
              <div>project description</div>
              <ul>
                project-technology-list
                <li>JavaScript</li>
                <li>Python</li>
              </ul>
              <div>project-links</div>
            </div>
          </div>
          <div>project-image</div>
        </li>
        <li>Sick Fits</li>
        <li>Personal Website</li>
      </ul>
    </Container>
  );
}
