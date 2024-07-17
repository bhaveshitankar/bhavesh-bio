import React, { useState } from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
  },
  heading: {
    // color: '#2c3e50',
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  paragraph: {
    lineHeight: 1.6,
    // color: '#34495e',
    fontSize: '1em',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginTop: '10px',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1em',
  },
};

function Experience() {
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);

  const toggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };
  const toggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };
  const toggleCollapse3 = () => {
    setIsCollapsed3(!isCollapsed3);
  };
  const toggleCollapse4 = () => {
    setIsCollapsed4(!isCollapsed4);
  };
  return (
    <section>
      <h2>Experience</h2>
      <div style={styles.container}>
        <h3 style={styles.heading}>
          Encora | SSE | Mar'2023-Current
        </h3>
        <button style={styles.button} onClick={toggleCollapse1}>
        {isCollapsed1 ? 'Show Job Details' : 'Hide Details'}
        </button>
        {!isCollapsed1 && (
          <>
          <p style={styles.paragraph}>
            As part of the Platform Engineering Team at Circles.life, our project focuses on developing and maintaining scalable APIs for microservices.
            These APIs facilitate user and admin signup and signin processes on the platform.
            Our primary responsibilities include writing efficient, scalable Go code, addressing bugs, and ensuring the seamless operation of the services.
          </p>
          <p style={{...styles.paragraph, textAlign: 'justify'}}>
            <strong>Key Result Areas:</strong>
            <ul style={styles.list}>
              <li>Writing Effective, Scalable Code in Golang: Developing robust, high-performance code to support microservices architecture.</li>
              <li>Deploying Solutions Using Docker, Kubernetes & GCP-Rancher: Utilizing containerization and orchestration tools to manage and deploy services efficiently.</li>
              <li>Developing, Testing, and Debugging Programs: Ensuring the reliability and functionality of applications through rigorous development and testing processes.</li>
              <li>Logs Investigations for Bug Identification: Analyzing logs to identify and resolve issues promptly, maintaining the platform's stability and performance.</li>
            </ul>
          </p>
          </>
        )}
      </div>

      <div style={styles.container}>
        <h3 style={styles.heading}>
        RedHat | Engineer | Oct'2022-Jan'2023
        </h3>
        <button style={styles.button} onClick={toggleCollapse2}>
        {isCollapsed2 ? 'Show Job Details' : 'Hide Details'}
        </button>
        {!isCollapsed2 && (
          <>
          <p style={styles.paragraph}>
          As part of a 4-member Agile team, I led the development of an Openshift tool using Golang and the Gauge framework. This project focused on creating scalable code to test Openshift functionalities.
          </p>
          <p style={{...styles.paragraph, textAlign: 'justify'}}>
            <strong>Key Result Areas:</strong>
            <ul style={styles.list}>
              <li>Implemented robust and efficient code solutions in Golang to enhance the performance and reliability of the Openshift tool.</li>
              <li>Designed and integrated solutions utilizing Docker, Kubernetes, and Openshift to optimize deployment and management of the tool.</li>
              <li>Developed, thoroughly tested, and debugged programs to ensure functionality, reliability, and compatibility across different environments.</li>
            </ul>
          </p>
          </>
        )}
      </div>

      <div style={styles.container}>
        <h3 style={styles.heading}>
        Mercedes-Benz | Engineer | June'2021-Oct'2022
        </h3>
        <button style={styles.button} onClick={toggleCollapse3}>
        {isCollapsed3 ? 'Show Job Details' : 'Hide Details'}
        </button>
        {!isCollapsed3 && (
          <>
          <p style={styles.paragraph}>
          Led development projects focused on dynamic data collection and validation tools for vendor maps, employing Python to ensure robust, efficient, and maintainable code. Managed end-to-end delivery and provided data engineering solutions through advanced data pipelines.
          </p>
          <p style={{...styles.paragraph, textAlign: 'justify'}}>
            <strong>Key Result Areas:</strong>
            <ul style={styles.list}>
              <li>Produced high-quality, robust, and maintainable Python code for dynamic data collection and validation tools.</li>
              <li>Managed Agile teams, overseeing sprint planning, effort estimation, and coordinating a 4-member and later a 9-member team for project execution.</li>
              <li>Developed precise Python scripts for geometric validation of vendor maps against NDS standards, ensuring compliance and accuracy.</li>
            </ul>
          </p>
          </>
        )}
      </div>

      <div style={styles.container}>
        <h3 style={styles.heading}>
        L&T TS | Engineer | Jan'2019-Jun'2021
        </h3>
        <button style={styles.button} onClick={toggleCollapse4}>
        {isCollapsed4 ? 'Show Job Details' : 'Hide Details'}
        </button>
        {!isCollapsed4 && (
          <>
          <p style={styles.paragraph}>
          Experienced in diverse projects within the automotive sector, including AUTOSAR SWC development for Ford ADAS vehicles, automation of interface testing using Python, CANoe, and Trace32, and the creation of ARXML parsing and visualization tools. Skilled in Embedded C & C++, Python, Go, and React, ensuring adherence to ASPICE safety standards and delivering robust solutions for complex ADAS features.
          </p>
          <p style={{...styles.paragraph, textAlign: 'justify'}}>
            <strong>Key Result Areas:</strong>
            <ul style={styles.list}>
              <li>Writing efficient, scalable code in Embedded C & C++ for AUTOSAR application layers.</li>
              <li>Implementing ASPICE safety standards throughout the software development lifecycle.</li>
              <li>Developing end-to-end solutions for AUTOSAR static interface testing, including DBC parsing and Trace32 application modules.</li>
              <li>Creating a Go server and React frontend for ARXML parsing and visualization tools, enhancing component interface understanding and usability.</li>
            </ul>
          </p>
          </>
        )}
      </div>
      
    </section>
  );
}

export default Experience;
