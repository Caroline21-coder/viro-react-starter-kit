import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Touchable} from 'react-native';
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
  ViroDirectionalLight,
  ViroARPlaneSelector,
} from '@viro-community/react-viro';
import {objects_3D} from './viroRes/resources';



const HelloWorldSceneAR = (props) => {
  let data= props.sceneNavigator.viroAppProps;

  const [position, setPosition]= useState([0,0,-0.5]);
  const [scale,setScale]= useState([0.1,0.1,0.1]);
  const[scaleSunflower, setScaleSunflower]= useState([0.001,0.001,0.001]);
  const [rotation,setRotation]= useState([0,0,0]);

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

const rotateObject = (rotateState, rotationFactor, source) => {
  if (rotateState === 3) {
    let currentRotation = [rotation[0] - rotationFactor, rotation[1] - rotationFactor, rotation[2] - rotationFactor];
  
    setRotation(currentRotation);
  }
};

const scaleObject = (pinchState, scaleFactor, source) => {
  if (pinchState === 3) {
  let currentScale = scale [0];
  let newScale = currentScale * scaleFactor;
  let newScaleArray = [newScale, newScale, newScale];

  setScale(newScaleArray);
  }
}

const handleScaleSunflower = (pinchState, scaleFactor, source) => {
  if (pinchState === 3) {
  let currentScale = scaleSunflower [0];
  let newScale = currentScale * scaleFactor;
  let newScaleArray = [newScale, newScale, newScale];

  setScaleSunflower(newScaleArray);
  }
}




const text = 'Hi Yanxia!';
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
    <ViroAmbientLight color={'#aaaaaa'} />

    {data.object === "tree"? 
    <Viro3DObject
      source={require('./viroRes/nice_tree.glb')}
      position={position}
      scale={scale}
      rotation={rotation}
      type="GLB"
      onDrag={moveObject}
      onPinch={scaleObject}
      onRotate={rotateObject}
    />
   : 
   <Viro3DObject
      source={require('./viroRes/sunflower.glb')}
      position={position}
      scale={scaleSunflower}
      rotation={rotation}
      type="GLB"
      onDrag={moveObject}
      onPinch={handleScaleSunflower}
      onRotate={rotateObject}
    />
    }
    
    </ViroARScene>
  );
};

export default () => {
  const [object, setObject]= useState('tree');
  return (
    <View style={styles.mainView}>
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      viroAppProps={{"object": object}} 
      style={styles.f1}
    />
    <View style={styles.controlsView}>
      <TouchableOpacity onPress={()=> setObject('tree')}>
        <Text style={styles.text}> Display tree
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setObject('sunflower')}>
        <Text style={styles.text}> Display sunflower
        </Text> 
      </TouchableOpacity>

    </View>
    </View>
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
  mainView: {
    flex:1
  },
  controlsView: {
    width: '100%',
    height: 100,
    backgroundColor: '#ffffff', 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  text: {
    margin: 50,
    backgroundColor: '#9d9d9d',
    padding: 10,
    fontWeight: 'bold'
  }
});
