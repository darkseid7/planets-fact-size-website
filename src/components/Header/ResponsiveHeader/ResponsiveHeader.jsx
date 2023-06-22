/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem/MenuItem";

import { media } from "../../../styled-components/Global";

const MenuResponsive = styled(motion.div)`
  width: 100%;
  top: 68px;
  left: 0;
  position: absolute;
  background-color: #070724;
  text-transform: uppercase;
  height: 120vh;
  overflow-y: auto;
  z-index: 999;
  display: none;

  ${media.phone} {
    display: ${({ showMenu }) => showMenu};
  }
`;

const ResponsiveHeader = ({ setNewUrl }) => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  return (
    <>
      <Menu
        showResponsiveMenu={showResponsiveMenu}
        setShowResponsiveMenu={setShowResponsiveMenu}
      />
      <AnimatePresence>
        <MenuResponsive
          key={showResponsiveMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          showMenu={() => (showResponsiveMenu ? "block" : "none")}
        >
          <MenuItem
            showResponsiveMenu={showResponsiveMenu}
            setShowResponsiveMenu={setShowResponsiveMenu}
            setNewUrl={setNewUrl}
          />
        </MenuResponsive>
      </AnimatePresence>
    </>
  );
};

export default ResponsiveHeader;
