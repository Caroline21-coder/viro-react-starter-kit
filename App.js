import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
  Viro360Image,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroDirectionalLight
} from '@viro-community/react-viro';
import {objects_3D} from './viroRes/resources';



const HelloWorldSceneAR = () => {

  const [position,setPosition]= useState([0,0,-0.5]);
  const [scale,setScale]= useState([0.1,0.1,0.1]);

  function onInitialized(state, reason) {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  /*
  // you can try following code segments by calling them inside the <ViroARScene>

  const render3DObject = () => {
    return (
      <Viro3DObject
        source={objects_3D.dragon_anim.obj}
        type={objects_3D.dragon_anim.type}
        position={objects_3D.dragon_anim.position}
        scale={objects_3D.dragon_anim.scale}
        rotation={[0, 0, 0]}
        animation={{...objects_3D.dragon_anim.animation, run: true}}
        dragType="FixedToWorld"
        onDrag={() => {}}
      />
    );
  };

  const render360Image = () => {
    return <Viro360Image source={objects_3D.diving_360.background} />;
  };

  const imageMarker = () => {
    return (
      <ViroARImageMarker target={'pug2D_img'}>
        <Viro3DObject
          source={objects_3D.pug_animated.obj}
          type={objects_3D.pug_animated.type}
          position={objects_3D.pug_animated.position}
          scale={objects_3D.pug_animated.scale}
          rotation={[0, 0, 0]}
          animation={{...objects_3D.pug_animated.animation, run: true}}
          dragType="FixedToWorld"
          onDrag={() => {}}
        />
      </ViroARImageMarker>
    );
  };
  */
const moveObject = (newPosition) => {
  setPosition(newPosition);

}

const scaleObject = (pinchState, scaleFactor, source) => {
  if (pinchState === 3) {
  let currentScale = scale [0];
  let newScale = currentScale * scaleFactor;
  let newScaleArray = [newScale, newScale, newScale];

  setScale(newScaleArray);
  }
}



const text = 'Hi Yanxia!';
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
  <ViroAmbientLight color={'#aaaaaa'} />
   <Viro3DObject
      source={require('./viroRes/nice_tree.glb')}
      position={position}
      scale={scale}
      type="GLB"
      onDrag={moveObject}
      onPinch={scaleObject}
    />
</ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

ViroARTrackingTargets.createTargets({
  pug2D_img: {
    source: objects_3D.pug_animated.img,
    orientation: 'Up',
    physicalWidth: 0.38, // real world width in meters
  },
});

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
