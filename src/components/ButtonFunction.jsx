function MakeMeLaugh() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="button">
      <button onClick={refreshPage}>Make Me Laugh!</button>
    </div>
  );
}

export default MakeMeLaugh;
