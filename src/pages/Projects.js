import React from "react";
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import './Projects.css';

const Projects = () => {
    return (
        <Fullpage>
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