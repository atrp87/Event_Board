const Title = ({ count }) => {
  return (
    <header>
      <h1>Event Board.</h1>
      <h3>{count} events have been added today !</h3>
    </header>
  );
}

export default Title;