import React from 'react';
import Lottie from 'react-lottie';
import { styles } from './styles.scss';
import * as animationData from './lf30_vAtD7F.json'

const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

const LoadingScreen = ({ children }) => (
  <div className={styles.background}>
    <div>
      {/*<div className={styles.bounce1} />
      <div className={styles.bounce2} />
      <div />*/}
      <Lottie options={defaultOptions}
              height={200}
              width={200} />
    </div>
    <div className={styles.message}>
      {children}
    </div>
  </div>
);

export default LoadingScreen;
