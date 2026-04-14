function Sidebar({ links }) {
  return (
    <aside>
      <h3>Leituras recomendadas</h3>
      <ul>
        {links.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;