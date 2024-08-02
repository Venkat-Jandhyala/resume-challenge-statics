import { useLocation } from "react-router-dom";
import { Flex, Box} from "rebass";
import PropTypes from "prop-types";
import { values } from "lodash";

import { PageTitle } from "../../components/PageTitle";
import { removeHashCharacter, useScrollToHash } from "../../hooks/useScrollToHash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { layoutStyles } from "../../styles";
import styled from "styled-components";
import { BaseStyledLink } from "../../components/Navigation";

const StyledSideNavItem = styled(BaseStyledLink)`
  &:hover,
  &:focus {
    font-weight: 600;
  }

  &.active {
    font-weight: 600;

    &::after {
     border-bottom: 5px solid ${layoutStyles.brandMenuItemHoverColor};
    }
  }
`;

const ActiveHashCheckLink = ({ children, to, isActive, ...rest }) => {
  return (
    <StyledSideNavItem className={ !!isActive && 'active' } to={to} {...rest}>
      {children}
    </StyledSideNavItem>
  );
}

ActiveHashCheckLink.propTypes = {
  children: PropTypes.any,
  isActive: PropTypes.bool,
  to: PropTypes.any,
}

export const Career = () => {
  const eduElement = useRef(null);
  const certElement = useRef(null);
  const expElement = useRef(null);
  const projElement = useRef(null);
  const { hash } = useLocation();

  const sideNav = useMemo(() => ({
    education: {id: "education", label: "Education", refEle: eduElement},
    certifications: {id: "certifications", label: "Certifications", refEle: certElement},
    experience: {id: "experience", label: "Professional Experience", refEle: expElement},
    projects: {id: "projects", label: "Projects", refEle: projElement}
  }), []);
  const [scrolledSection, setScrolledSection] = useState(
    removeHashCharacter(hash) || sideNav.education.id
  );
  
  useScrollToHash();

  const handleScroll = useCallback(() => {
    const focusedSection = values(sideNav).map(
      ({ refEle, id }) => {
        const { top=0 } = refEle?.current?.getBoundingClientRect() || {};
        return {id, top}
      }).reduce((agg, current) => {
        return 120 >= current.top && current.top >= -50 ? current.id : agg;
      }, '');

      if('' !== focusedSection) {
        setScrolledSection(focusedSection)
      }
  }, [sideNav]);
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [handleScroll]);

  return (
    <>
      <PageTitle title={'Career'}/>

      <Flex flexDirection={"row"} sx={{ gap: `3rem` }}>
        <Flex flexDirection={"column"} sx={{
          minWidth: `25rem`,
        }}>
          <Box as={`ul`} sx={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            position: "sticky",
            top: '30vh'
          }}>
            <li>
                <ActiveHashCheckLink 
                textalign="left"
                isActive={scrolledSection?.replace('#') === sideNav.education.id}
                to={{
                  hash: `#${sideNav.education.id}`,
                }}>{sideNav.education.label}</ActiveHashCheckLink>
              </li>
              <li>
                <ActiveHashCheckLink 
                textalign="left"
                isActive={scrolledSection?.replace('#') === sideNav.certifications.id}
                to={{
                  hash: `#${sideNav.certifications.id}`,
                }}>{sideNav.certifications.label}</ActiveHashCheckLink>
              </li>
              <li>
                <ActiveHashCheckLink 
                textalign="left"
                isActive={scrolledSection?.replace('#') === sideNav.experience.id}
                to={{
                  hash: `#${sideNav.experience.id}`,
                }}>{sideNav.experience.label}</ActiveHashCheckLink>
              </li>
              <li>
                <ActiveHashCheckLink 
                textalign="left"
                isActive={scrolledSection?.replace('#') === sideNav.projects.id}
                to={{
                  hash: `#${sideNav.projects.id}`,
                }}>{sideNav.projects.label}</ActiveHashCheckLink>
              </li>
          </Box>
        </Flex>
        <Flex flexGrow={1} flexDirection={"column"}>
          <section id={sideNav.education.id}>
            <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
              <h2 ref={sideNav.education.refEle}>Education</h2>
              <div className="text pl-3">
                <span className="date">May 2008 - June 2012</span>
                <span>Bachelor of Engineering (Computer Science Engineering)</span>
                <span className="position">Methodist College of Engineering and Technology</span>
              </div>
            </div>
          </section>
          <section id={sideNav.certifications.id}>
            <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
              <h2 ref={sideNav.certifications.refEle}>Certifications</h2>
              <div className="text pl-3">
                <span className="date">July 2014</span>
                <span>Google Professional Cloud Architect Certification</span>
                <span className="position">Certification ID: 6769c5766c6c48e793d4ecd3969409cf (credly link)</span>
              </div>
              <div className="text pl-3">
                <span className="date">June 2014</span>
                <span>Associate Cloud Engineer Certification</span>
                <span className="position">Certification ID: b642bbf9993040828b12485479cad855 (credly link)</span>
              </div>
              <div className="text pl-3">
                <span className="date">March 2014</span>
                <span>Cloud Digital Leader Certification</span>
                <span className="position">Certification ID: 712c87ecfa8647c2b001522ecde43bfc (credly link)</span>
              </div>
            </div>
          </section>
          <section id={sideNav.experience.id}>
            <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
              <h2 ref={sideNav.experience.refEle}>Professional experience</h2>
              <div className="text pl-3">
                <span className="date">March 2018 - Present</span>
                <span>Lead Developer</span>
                <span className="position">Digital Business Banking</span>
                <span>A Digital re-platforming of a legacy system with the latest technologies which currently serves over 630,000 customers and over 30,000+ customers accessing the application on a daily basis.</span>
                <span>Lead the Frontend of the web application of Digital Business banking and is responsible for the application portal page as well as working alongside developers from 12 offshore teams.</span>
                <ul>
                  <li>Collaborating with Team: Organizing ad hoc calls between the stakeholders of a problem to identify the root cause and put forward a solution as a Team.</li>
                  <li>Build and maintenance: Developed and maintained SPA widgets in Backbase CXP, Angular, and micro frontends in React. Also created reusable/accessible components used across the application.</li>
                  <li>Solution-oriented: Proposed and delivered basic micro frontend architecture to decouple monolith front-end applications into small features/services using technologies such as React, Angular and Backbase CXP. Proposed and delivered omni channel micro frontend for chat assistance. Proposed and delivered feature based micro releases which helped the release management team greatly.</li>
                  <li>Delivery Management: As part of the release, manages the delivery of the accessibility of the application by sharing the knowledge with the team and supporting them to achieve the deadlines. Delivered 10+ releases without any accessibility issues.</li>
                  <li>Vendor Management: Serves as the primary POC for Vendors such as AbilityNet to engage and arrange resources for vendor accessibility testing on the application.</li>
                  <li>Release Management: Manages all the releases for the non-prod environments to enable the testing team for integration testing and regressions, also has been part of as well as driven multiple product releases.</li>
                </ul>
              </div>
              <div className="text pl-3">
                <span className="date">October 2016 – March 2018</span>
                <span>Sr. Frontend Developer</span>
                <span className="position">Digital Business Banking</span>
                <span>Digitization of paper-based customer onboarding into a web application which has brought in unprecedented growth in new customers and given more business to Business banking.</span> 
                <ul>
                  <li>Build and maintenance: As a front-end developer in a small frontend team of fewer than 5 developers, built reusable components for a page that is built using Backbase/Blueriq forms, which are now being used across 4 teams for features like Customer Onboarding, Lending, and Sales.</li>
                  <li>Solution-oriented - Proposed and delivered a build script to create a Frontend package that could be deployed onto any environment from non-prod to prod.</li>
                </ul>
              </div>
            </div>
          </section>
          <section id={sideNav.projects.id} >
            <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
              <h2 ref={sideNav.projects.refEle}>Projects</h2>
              <div className="text pl-3">
              <section id="resume-challenge-gcp-version">
                <h3>Project: The Resume Challenge - GCP Version</h3>
                <h4>Overview:</h4>
                <p>
                  The Resume Challenge - GCP Version is a cloud-based project designed to create a scalable and efficient solution for showcasing a resume and tracking website visitors. This project highlights proficiency in cloud computing, serverless functions, web development with React, and data storage.
                </p>

                <h4>Key Responsibilities:</h4>
                <ul>
                  <li>
                    <strong>Web Development with React:</strong>
                    <ul>
                      <li>Developed a static website using React to showcase the resume, providing a modern and interactive user experience.</li>
                      <li>Ensured responsive design and cross-browser compatibility for optimal viewing on various devices.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Cloud Infrastructure Setup:</strong>
                    <ul>
                      <li>Deployed static resources (React application) on Google Cloud Storage, ensuring quick and reliable access for web users.</li>
                      <li>Configured Google Cloud Load Balancer to manage DNS and distribute traffic efficiently, ensuring high availability and reliability.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Visitor Tracking with Cloud Functions:</strong>
                    <ul>
                      <li>Developed and deployed a Cloud Function using Python to track website visitors, capturing essential data such as IP address, timestamp, and user-agent.</li>
                      <li>Integrated Cloud Function with Google Cloud Storage to trigger the tracking process upon each visitor interaction.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Data Storage with DominoDB:</strong>
                    <ul>
                      <li>Implemented DominoDB to store visitor counts and other relevant data, ensuring persistent and scalable storage solutions.</li>
                      <li>Created mechanisms to update and retrieve visitor counts, enabling real-time tracking and reporting.</li>
                    </ul>
                  </li>
                </ul>

                <h4>Technologies Used:</h4>
                <ul>
                  <li><strong>Web Development:</strong> React</li>
                  <li><strong>GCP Services:</strong> Google Cloud Storage, Google Cloud Load Balancer, Google Cloud Functions</li>
                  <li><strong>Database:</strong> DominoDB</li>
                  <li><strong>Programming Languages:</strong> Python, JavaScript (React)</li>
                </ul>

                <h4>Impact:</h4>
                <ul>
                  <li>Created a professional and interactive resume website, enhancing personal branding and online presence.</li>
                  <li>Enabled efficient and real-time tracking of website visitors, providing valuable insights into web traffic patterns.</li>
                  <li>Leveraged serverless architecture to reduce operational overhead and ensure scalability.</li>
                </ul>
              </section>

              </div>
            </div>
          </section>
        </Flex>
      </Flex>
    </>
  );
};
