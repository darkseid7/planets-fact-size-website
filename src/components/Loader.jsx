import styled from "styled-components";
import { motion } from "framer-motion";
import eartLogo from "../assets/planet-earth.svg";

const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

function Loader() {
  return (
    <>
      <StyledLoader>
        <motion.img
          initial={{
            width: "100px",
            display: "grid",
            placeItems: "center",
          }}
          animate={{
            scale: [1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "reverse",
          }}
          src={eartLogo}
          alt=""
        />
      </StyledLoader>
    </>
  );
}

export default Loader;
