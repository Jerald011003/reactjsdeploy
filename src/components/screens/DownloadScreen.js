import React, { useState } from 'react';

const DownloadButton = ({ url }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      // Create a link element to trigger the download
      const a = document.createElement('a');
      a.style.display = 'none';
      document.body.appendChild(a);

      // Set the href and download attributes of the link
      a.href = window.URL.createObjectURL(blob);
      a.download = 'file.txt';

      // Trigger the download
      a.click();

      // Clean up the link element
      document.body.removeChild(a);
      window.URL.revokeObjectURL(a.href);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleDownload} disabled={loading}>
      {loading ? 'Downloading...' : 'Download'}
    </button>
  );
};

export default DownloadButton;