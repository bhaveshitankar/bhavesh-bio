import React from 'react';

const ResumeDownload = () => {
  const resumeFileName = 'Bhavesh_Itankar_resume.pdf';

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL +"/"+resumeFileName;
    downloadLink.download = resumeFileName;
    downloadLink.click();
  };

  return (
    <div>
      <h2>Download My Resume</h2>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default ResumeDownload;