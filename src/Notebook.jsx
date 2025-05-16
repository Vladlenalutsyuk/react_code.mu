import React, { useState, useEffect } from 'react';

const Notebook = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: '', content: '', id: null });
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  const saveNote = () => {
    if (currentNote.id === null) {
      const newNote = { ...currentNote, id: Date.now() };
      setNotes([...notes, newNote]);
    } else {
      const updatedNotes = notes.map(note =>
        note.id === currentNote.id ? currentNote : note
      );
      setNotes(updatedNotes);
    }
    resetCurrentNote();
    filterNotes();
  };

  const selectNote = (note) => {
    setCurrentNote({ ...note });
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    resetCurrentNote();
    filterNotes();
  };

  const filterNotes = () => {
    const filtered = notes.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNotes(filtered);
    if (filtered.length === 0) {
      resetCurrentNote();
    }
  };

  const resetCurrentNote = () => {
    setCurrentNote({ title: '', content: '', id: null });
    setSearchTerm('');
    setFilteredNotes(notes);
  };

  return (
    <div id="app">
      <h1>Блокнот</h1>
      <div className="wrapper">
        <div className="menu">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              filterNotes();
            }}
            placeholder="Поиск записей..."
          />
          <ul>
            {filteredNotes.map((note) => (
              <li key={note.id}>
                <span onClick={() => selectNote(note)}>{note.title}</span>
                <button onClick={() => deleteNote(note.id)}>Удалить</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="editor">
          <input
            value={currentNote.title}
            onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
            placeholder="Заголовок записи"
          />
          <textarea
            value={currentNote.content}
            onChange={(e) => setCurrentNote({ ...currentNote, content: e.target.value })}
            placeholder="Ваш текст..."
          ></textarea>
          <div className="save_or_add">
            <button onClick={saveNote}>
              {currentNote.id ? 'Сохранить' : 'Добавить'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notebook;