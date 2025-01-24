const customInputStyles = {
    container: {
      padding: '10px 15px',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '15px', // Adds space between inputs for better readability
    },
    label: {
      marginBottom: '5px',
      fontSize: '16px',
      fontWeight: '500',  // Slightly bolder for better emphasis
      color: '#333',  // A dark gray for a soft but clear label text
    },
    mandatory: {
      color: '#e74c3c', // A more vibrant red for mandatory fields
      marginLeft: '5px',
      fontWeight: 'bold', // Makes the asterisk a bit more prominent
    },
    inputField: {
      padding: '10px',  // Slightly larger padding for more space inside the input
      border: '1px solid #ddd',  // Lighter gray border for a cleaner look
      borderRadius: '8px', // Softer rounded corners
      backgroundColor: '#f9fafb', // A soft off-white background
      fontSize: '14px',
      fontFamily: 'Arial, sans-serif',
      transition: 'border-color 0.3s ease',  // Smooth transition for border color on focus
    },
    'input-small': {
      height: '35px',  // Slightly taller for a more balanced appearance
    },
    'input-medium': {
      height: '45px',  // A little taller for medium inputs
    },
    inputFocus: {
      borderColor: '#3498db',  // A soft blue color for focus
      outline: 'none',
    },
    inputWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
  };
  
  export default customInputStyles;
  