/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import styled from "styled-components";

const SkyBackground = styled.div`
  #sky {
    position: fixed;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    z-index: -10;
    background-color: #070724;
  }

  #shootingstars {
    margin: 0;
    padding: 0;
    width: 150vh;
    height: 100vw;
    position: fixed;
    overflow: hidden;
    z-index: -10;

    transform: translatex(calc(50vw - 50%)) translatey(calc(50vh - 50%))
      rotate(120deg);

    .wish {
      height: 2px;
      top: 300px;
      width: 100px;
      margin: 0;
      opacity: 0;
      padding: 0;
      background-color: white;
      position: absolute;
      background: linear-gradient(-45deg, white, rgba(0, 0, 255, 0));
      filter: drop-shadow(0 0 6px white);
      overflow: hidden;
    }
  }
`;

const Sky = React.memo(() => {
  const state = {
    num: 100,
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    ),
  };

  useEffect(() => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        {
          duration: 700,
          value: "0",
        },
        {
          duration: 700,
          value: "1",
        },
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i,
    });

    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: "1",
        },
      ],
      width: [
        {
          value: "150px",
        },
        {
          value: "0px",
        },
      ],
      translateX: 350,
    });
  }, []);

  const getViewportX = () => {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  };

  const randomRadius = () => {
    return Math.random() * 1.7 + getViewportX() / 1000;
  };

  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(state.vw)).toString();
  };

  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(state.vh)).toString();
  };
  const { num } = state;

  return (
    <>
      <SkyBackground>
        <svg id="sky">
          <g fill="#FFF" fillRule="evenodd" opacity={0.202}>
            {[...Array(num)].map((x, y) => (
              <circle
                cx={getRandomX()}
                cy={getRandomY()}
                r={randomRadius()}
                stroke="none"
                strokeWidth="0"
                fill="white"
                key={y}
                className="star"
              />
            ))}
          </g>
        </svg>
        <div id="shootingstars">
          {[...Array(60)].map((x, y) => (
            <div
              key={y}
              className="wish"
              style={{
                left: `${getRandomY()}px`,
                top: `${getRandomX()}px`,
              }}
            />
          ))}
        </div>
      </SkyBackground>
    </>
  );
});

export default Sky;
