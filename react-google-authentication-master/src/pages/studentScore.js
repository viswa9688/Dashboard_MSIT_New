import React from 'react';

const Table = () => {
  const tableStyle = {
    width: '80%', // Set the width of the table
    margin: 'auto', // Center the table horizontally
    marginTop: '0px', // Add spacing on top
    marginBottom: '20px', // Add spacing on bottom
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2', // Light cement color for heading row
    border: '1px solid black', // Black border for outside table lines
    padding: '8px',
  };

  const cellStyle = {
    
    border: '1px solid black', // Black border for outside table lines
    padding: '8px',
  };
  
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Email ID</th>
          <th style={thStyle}>Discussions</th>
          <th style={thStyle}>Quiz (10)</th>
          <th style={thStyle}> Assignment (20)</th>
          <th style={thStyle}>Weekly (30)</th>
          <th style={thStyle}>Total (70%)</th>
          <th style={thStyle}>End Sem(30)</th>
          <th style={thStyle}>Total (100)</th>
          <th style={thStyle}>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
        </tr>
        <tr>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
        </tr>
        {/* Add more empty rows if needed */}
      </tbody>
    </table>
  );
};

export default Table;
