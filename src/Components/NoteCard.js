function NoteCard({ note }) {
  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </>
  );
}

export default NoteCard;
