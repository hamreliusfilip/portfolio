import React from 'react';
import styled from 'styled-components';
import github from '../loggor/githubblack.svg';
import web from '../loggor/web.png';
import pdf from '../loggor/pdf.png';

import p1 from '../Project_Info/p1.png';
import p2 from '../Project_Info/p2.png';
import p3 from '../Project_Info/p3.png';
import p4 from '../Project_Info/p4.png';
import p5 from '../Project_Info/p5.png';
import p6 from '../Project_Info/p6.png';
import p7 from '../Project_Info/p7.png';
import p8 from '../Project_Info/p8.png';
import p9 from '../Project_Info/p9.png';
import p10 from '../Project_Info/p10.png';
import p11 from '../Project_Info/p11.png';
import p12 from '../Project_Info/p12.png';
import p13 from '../Project_Info/p13.png';

import p14 from '../Project_Info/p14.png';
import p14_pdf from '../Project_Info/p14_pdf.pdf';

import p1_pdf from '../Project_Info/pdf_p1.pdf';
import p2_pdf from '../Project_Info/p2_pdf.pdf';
import p3_pdf from '../Project_Info/p3_pdf.pdf';
import p6_pdf from '../Project_Info/p6_pdf.pdf';
import p8_pdf from '../Project_Info/p8_pdf.pdf';
import p9_pdf from '../Project_Info/p9_pdf.pdf';
import p12_pdf from '../Project_Info/p12_pdf.pdf';
import p13_pdf from '../Project_Info/p13_pdf.pdf';


const ProjectMap = () => {
  const projectData = [
    {
      name: 'Myndighetshandboken',
      value: '11',
      github: 'https://github.com/hamreliusfilip/Myndighetshandboken',
      url: "https://www.myndighetshandboken.se",
      desc: 'A extensive website built and designed from the ground up - including creating the databases and collecting the data. A website of the Swedish government to gather all information in one place.',
      img: p11,
      alt: 'Myndighetshandboken',
      pdf: ''
    },
    {
      name: 'Facial recognition program in MATLAB',
      value: '8',
      github: 'https://github.com/hamreliusfilip/Facial_Recognition',
      url: null,
      desc: 'Advanced Image Processing: Facial recognition program in MATLAB. This program can identify faces in a database and compare them to predefined images of individuals who have been granted access.',
      img: p8,
      alt: 'Facial recognition program in MATLAB',
      pdf: p8_pdf
    },
    {
      name: 'Image reproduction in MATLAB',
      value: '9',
      github: 'https://github.com/hamreliusfilip/Image_Reproduction_Database',
      url: null,
      desc: 'A program to replicate a user-inputted image using a predefined database with other images. Based on the CIELAB colorspace and structural similarity.',
      img: p9,
      alt: 'Image reproduction in MATLAB',
      pdf: p9_pdf
    },
    {
      name: 'Self Driving Bus - NEAT',
      value: '14',
      github: 'https://github.com/hamreliusfilip/Self_Driving_Bus',
      url: null,
      desc: 'This project involves developing a self-driving bus that navigates a track with speed-sensitive zones using the NEAT (NeuroEvolution of Augmenting Topologies) library in a Python and PyGame environment. NEATs evolving neural networks, guided by a fitness function similar to Q-learning, allow the bus to adapt to complex conditions. ',
      img: p14,
      alt: 'Design prototype for a news application',
      pdf: p14_pdf
    },
    {
      name: 'Sentiment Analysis - Support Vector Machine',
      value: '1',
      github: 'https://github.com/hamreliusfilip/Sentiment_Analysis_SVM',
      url: null,
      desc: 'Analyzing the sentiment of politically biased news articles through a Python-based support vector machine built from scratch. The outcomes are contrasted with those derived from a Naive Bayes classifier, as well as SVM and Random Forest classifiers available in the SKlearn library.',
      img: p1,
      alt: 'Sentiment Analysis - Support Vector Machine',
      pdf: p1_pdf
    },
    {
      name: 'Virtual Guide - A python based chatbot',
      value: '6',
      github: 'https://github.com/hamreliusfilip/virtual-guide',
      url: null,
      desc: 'Virtual Guide, a comprehensive solution for visitors in an exhibition environment to retrieve information and guidance from. The system offers the user verbal and visual feedback to questions or claims regarding the exhibition in question.',
      img: p6,
      alt: 'Virtual Guide - A python based chatbot',
      pdf: p6_pdf
    },
    {
      name: 'Particle system - C++',
      value: '7',
      github: 'https://github.com/hamreliusfilip/ParticleSystem',
      url: null,
      desc: 'A lab part of the bachlor project course. Complete system deisgn and implementation from the ground up. Built with, Catch2, Vcpkg & Tracy',
      img: p7,
      alt: 'Particle system - C++',
      pdf: ''
    },
    {
      name: 'Node graph in JS',
      value: '10',
      github: 'https://github.com/hamreliusfilip/Image_Reproduction_Database',
      url: null,
      desc: 'A graphing program to display connections between Star Wars characters, a lab in the course Information Visualization. Built in JS with D3.js',
      img: p10,
      alt: 'Node graph in JS',
      pdf: ''
    },
  
    {
      name: 'Visual Data Analysis - Graphs in large data - D3 js + Python',
      value: '12',
      github: 'https://github.com/hamreliusfilip/Advanced_Visual_Data_Analysis',
      url: null,
      desc: 'A solution to the VAST challenge of 2020 MC1. The challenge was to analyze a large dataset and present graph similiarties between subgraphs and template graphs. The solution was a combination of Python and D3.js.',
      img: p12,
      alt: 'Visual Data Analysis - Graphs in large data - D3 js + Python',
      pdf: p12_pdf
    },
    {
      name: 'Rocket Simulation',
      value: '2',
      github: 'https://github.com/hamreliusfilip/Rocket',
      url: 'https://filipbagen.github.io/rocket-simulation/',
      desc: 'A rocket simulation first developed in Matlab and then completed in Javascript with three.js and glb assets. A real time simulation with parameters such as drag, gravity, mass change, thrust change, terminal velocity, air density and much more.',
      img: p2,
      alt: 'Rocket Simulation',
      pdf: p2_pdf
    },
    {
      name: 'Merit - A Media Technology App Prototype',
      value: '3',
      github: 'https://github.com/hamreliusfilip/merit',
      url: 'https://filipbagen.github.io/merit/',
      desc: 'App prototype to gather relevant information for Media Technology students at LiU. Winner of the annual MT Section Gray Cube: An annual award for the most technically challenging project. The user must be able to see important information such as their schedule, upcoming exams and exam statistics.',
      img: p3,
      alt: 'Merit - A Media Technology App Prototype',
      pdf: p3_pdf
    },
    {
      name: 'Feline & Franciska - Portfolio Website',
      value: '4',
      github: 'https://github.com/hamreliusfilip/Feline-Franciska',
      url: null,
      desc: 'A website with portfolio, webshop, document reader and contact forms. Displaying arts & Illustrations for the company Feline & Franciska. Built with Javascript and React.',
      img: p4,
      alt: 'Feline & Franciska - Portfolio Website',
      pdf: ''
    },
    {
      name: 'Svenska Klubben - Lausanne-Genève',
      value: '5',
      github: null,
      url: 'https://www.svenska-klubben.ch',
      desc: 'The Swedish Club Lausanne-Genève was founded in 1962 with the aim of promoting cohesion between Swedes living around Lake Geneva. The project included website design & development as well as restructuring of newsletters & social media.',
      img: p5,
      alt: 'Svenska Klubben - Lausanne-Genève',
      pdf: ''
    },
    {
      name: 'Design prototype for a news application',
      value: '13',
      github: null,
      url: null,
      desc: 'A design prototype completly interactive in Figma - a news outlet relying on maps and quick information.',
      img: p13,
      alt: 'Design prototype for a news application',
      pdf: p13_pdf
    },
  ];

  return (
    <div>
      <Wrapper>
        <GridContainer>
          {projectData.map((project) => (
            <Box key={project.value}>
              <div>
                <Name>{project.name}</Name>
                <StyledIMG src={project.img} alt={project.alt} />

                <TextWrapper>
                  <Info>{project.desc}</Info>
                </TextWrapper>
                <Links>

                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <LogoStyle src={github} alt="Github" />
                    </a>
                  ) : null}

                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                       <LogoStyle2 src={web} alt="Website" />
                    </a>
                  ) : null}

                  {project.pdf ? (
                     <a href={project.pdf} download="Report">
                     <LogoStyle2 src={pdf} alt="PDF" />
                   </a>
                  ) : null}

       
                </Links>
              </div>

            </Box>
          ))}
        </GridContainer>
      </Wrapper>
    </div>
  );
};

export default ProjectMap;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  width: 100%;
  padding: 20px;
`;

const Box = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
`;

const Name = styled.h2`
  font-size: 1.5rem;
`;

const TextWrapper = styled.div`
  margin-top: 8px;
`;

const Info = styled.p`
  font-size: 1rem;
`;

const Links = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`;

const LogoStyle = styled.img`
  width: 45px;
  height: 45px;
`;

const LogoStyle2 = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 3px; 
`;

const StyledIMG = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 8px;
`;