import { notes } from "../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";

function Notes() {
  return (
    <section className="section section-band" id="notes">
      <SectionHeader eyebrow="Technical Notes" title="Technical Notes">
        Planned writing topics that turn learning into clear documentation.
      </SectionHeader>

      <div className="card-grid notes-grid">
        {notes.map((note) => (
          <article className="card note-card" key={note.title}>
            <span className="note-tag">Draft</span>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Notes;
