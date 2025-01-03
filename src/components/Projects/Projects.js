import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SVM---Breast-Cancer"
              description="This project leverages a Support Vector Machine (SVM) model to classify breast cancer as either malignant or benign using the bc2.csv dataset. The analysis was conducted using a Jupyter Notebook (SVM_Breast_cancer.ipynb) in Google Colab. The goal is to provide a reliable and efficient tool for early breast cancer detection, aiding in timely diagnosis and treatment decisions."
              ghLink="https://github.com/varunjofficial07/SVM---Breast-Cancer"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Library_Management_system"
              description="This project focuses on developing a Library Management System to streamline the process of managing books, users, and transactions. The system provides an efficient way to handle book inventory, issue and return records, and user management. It is designed to enhance operational efficiency and improve the overall library experience."
              ghLink="https://github.com/varunjofficial07/Library_Management_system"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DECISIONTREE_-CREDITSYSTEM"
              description="This project utilizes a Decision Tree model to evaluate and predict creditworthiness based on customer data provided in the bank.csv and credit.csv datasets. The implementation is carried out in a Jupyter Notebook (DecisionTree.ipynb) using Google Colab, showcasing the effectiveness of decision trees in financial decision-making.This Project highlights the practical application of machine learning in credit risk assessment and financial analytics."
              ghLink="https://github.com/soumyajit4419/Editor.io"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Digital BRSR Platform"
              description="This project focuses on developing a state-of-the-art digital platform to implement the Business Responsibility and Sustainability Reporting (BRSR) framework for the Department of Posts (DoP) in India. The platform aims to enhance the DoP's environmental and social sustainability practices while ensuring transparency and accountability towards stakeholders."
              ghLink="https://github.com/varunjofficial07/postalservice"
             
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
