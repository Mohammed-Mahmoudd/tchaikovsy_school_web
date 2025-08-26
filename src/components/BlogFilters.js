function BlogFilters({ categories }) {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div
      style={{
        marginBottom: "60px",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          style={{
            padding: "10px 24px",
            background:
              activeFilter === category
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(255, 255, 255, 0.04)",
            border: `1px solid ${
              activeFilter === category
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(255, 255, 255, 0.08)"
            }`,
            borderRadius: "50px",
            color:
              activeFilter === category ? "#fff" : "rgba(255, 255, 255, 0.7)",
            fontSize: "0.9rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            fontFamily: '"Raleway", sans-serif',
          }}
          onMouseOver={(e) => {
            if (activeFilter !== category) {
              e.target.style.background = "rgba(255, 255, 255, 0.06)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
              e.target.style.transform = "translateY(-1px)";
            }
          }}
          onMouseOut={(e) => {
            if (activeFilter !== category) {
              e.target.style.background = "rgba(255, 255, 255, 0.04)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.08)";
              e.target.style.transform = "translateY(0)";
            }
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
