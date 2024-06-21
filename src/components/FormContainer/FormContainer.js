const FormContainer = ({ title, buttonText, footerText, children, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event); // Call the onSubmit function passed as a prop
  };
  return (
    <div style={{ padding: 20, backgroundColor: '#f0f0f0' }}>
      <h2 style={{ fontSize: 24, marginBottom: 10 }}>{title}</h2>

      {children}
      <button onClick={handleSubmit}
        style={{ backgroundColor: '#4CAF50', color: '#fff', padding: 10 }}
      >
        {buttonText}
      </button>
      <a href="#" style={{ textDecoration: 'none', color: '#666' }} >
        <p style={{ fontSize: 14, color: '#666' }}>{footerText}</p>
      </a>
    </div>
  )
}

export default FormContainer
