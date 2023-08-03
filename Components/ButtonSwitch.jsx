
import { motion } from "framer-motion";

const ButtonSwitch = ( {setIsOn, isOn }) => {
 

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  return (
    <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
}


export default ButtonSwitch