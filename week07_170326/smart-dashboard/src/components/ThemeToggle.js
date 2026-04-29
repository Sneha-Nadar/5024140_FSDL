export default function ThemeToggle() {
  const toggle = () => {
    document.body.classList.toggle("light");
  };

  return (
    <div className="toggle" onClick={toggle}>
      🌙 / ☀️
    </div>
  );
}