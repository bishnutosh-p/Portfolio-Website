import react from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { styles } from '../styles';

const SectionWrapper = ({Component,idName}) => {
    function HOC(){
        return(
            <motion.section>
                <Component />
            </motion.section>
        )
    }
}

export default SectionWrapper;