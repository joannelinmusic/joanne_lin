import React from "react";
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import './Projects.css';
import Navbar from '../components/Navbar';


const Projects = () => {
    return (
        <Fullpage>
            <Navbar style={{ zIndex: 1 }} />
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection className = 'first_style'>
                    <h1>Screen 1</h1>
                </FullpageSection>
                <FullpageSection className = 'first_style'>
                    <h1>Screen 2</h1>
                </FullpageSection>
                <FullpageSection className = 'first_style'>
                    <h1>Screen 3</h1>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
            
    );
}

export default Projects;