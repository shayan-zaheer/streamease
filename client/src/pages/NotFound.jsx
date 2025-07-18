import { motion } from "framer-motion";

function NotFound(){
    return (
        <motion.div 
            className="notfound-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* ...page content... */}
        </motion.div>
    );
};

export default NotFound;