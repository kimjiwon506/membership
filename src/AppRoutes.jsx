import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import styled from "@emotion/styled";

import BaseLayout from "layouts/base-layout";

const JoinPage = lazy( () => import("pages/join"))

function AppRoutes() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<BaseLayout />}>
                <Route index element={<JoinPage />} />
                <Route path='join' element={<JoinPage />} />
              </Route>
            </Routes>
        </Suspense>
    );
}

function Loading() {
    const Wrapper = styled.div`
      /** BEGIN CSS **/
      position: fixed;
      background: #fff;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      @keyframes rotate-loading {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
  
      @-moz-keyframes rotate-loading {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
  
      @-webkit-keyframes rotate-loading {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
  
      @-o-keyframes rotate-loading {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
  
      @keyframes rotate-loading {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
  
      @-moz-keyframes rotate-loading {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
  
      @-webkit-keyframes rotate-loading {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
  
      @-o-keyframes rotate-loading {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
  
      @keyframes loading-text-opacity {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
  
      @-moz-keyframes loading-text-opacity {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
  
      @-webkit-keyframes loading-text-opacity {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
  
      @-o-keyframes loading-text-opacity {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      .loading-container,
      .loading {
        height: 100px;
        position: relative;
        width: 100px;
        border-radius: 100%;
      }
  
      .loading-container {
        margin: 40px auto;
      }
  
      .loading {
        border: 2px solid transparent;
        border-color: transparent var(--ierp-color-primary) transparent
          var(--ierp-color-primary);
        -moz-animation: rotate-loading 1.5s linear 0s infinite normal;
        -moz-transform-origin: 50% 50%;
        -o-animation: rotate-loading 1.5s linear 0s infinite normal;
        -o-transform-origin: 50% 50%;
        -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;
        -webkit-transform-origin: 50% 50%;
        animation: rotate-loading 1.5s linear 0s infinite normal;
        transform-origin: 50% 50%;
      }
      .loading-container .loading {
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
      }
  
      #loading-text {
        -moz-animation: loading-text-opacity 0.5s linear 0s infinite normal;
        -o-animation: loading-text-opacity 0.5s linear 0s infinite normal;
        -webkit-animation: loading-text-opacity 0.5s linear 0s infinite normal;
        animation: loading-text-opacity 0.5s linear 0s infinite normal;
        color: var(--ierp-text-secondary01);
        font-family: "Helvetica Neue, " Helvetica ", " "arial";
        font-size: 10px;
        font-weight: bold;
        margin-top: 45px;
        opacity: 1;
        position: absolute;
        text-align: center;
        text-transform: uppercase;
        top: 0;
        width: 100px;
      }
    `;
  
    return (
      <Wrapper>
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-text">loading</div>
        </div>
      </Wrapper>
    );
  }

export default AppRoutes;