//Project files
import projectsdata from "../data/projectdata.json";
import ProjectItem from "../components/ProjectItem";
import ModalForm from "../components/ModalForm";

export default function Project({ setShowModal }) {
  const ProjectsList = projectsdata.map((data) => (
    <ProjectItem
      key={data.id}
      data={data}
      onClick={() => setShowModal(<ModalForm data={data} />)}
    />
  ));

  return (
    <div className="container_main" id="project">
      <div className="container_sub">
        <div className="page_left">
          <h2 className="title">Projects</h2>
          <p>
            Some of the “Learn by Developing” projects that I have been working on in the past few months..
            Of course there will be more, as I navigate through my learning journey.  </p>
        <p>Watch this space, if you want to see what I do!
          </p>
        </div>
        <div className="page_right">
          <div className="project_list">{ProjectsList}</div>
        </div>
      </div>
    </div>
  );
}
