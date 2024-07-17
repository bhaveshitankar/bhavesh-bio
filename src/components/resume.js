import React from 'react';

const ResumeDownload = () => {
  const resumeFileName = 'Bhavesh_Itankar_resume.pdf';

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL +"/"+resumeFileName;
    console.log(downloadLink.href);
    downloadLink.download = resumeFileName;
    downloadLink.click();
  };

  return (
    <section>
      <h2>Download My Resume</h2>
      <button onClick={handleDownload}>Download</button>
    </section>
  );
};

export default ResumeDownload;