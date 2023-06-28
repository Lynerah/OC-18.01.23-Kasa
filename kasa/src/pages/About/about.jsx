import BannerAbout from '../../components/Banner-about/index.jsx';
import AccordionList from '../../components/Accordion-list/index.jsx';
import '../../style/banner-about.css'

function About() {
    return (
        <div>
            <BannerAbout></BannerAbout>
            <AccordionList></AccordionList>
        </div>
    )
}

export default About