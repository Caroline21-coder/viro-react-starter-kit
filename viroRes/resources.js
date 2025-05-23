export const objects_3D = {
  dragon_anim: {
    obj: require('./object_dragon_anim/object_dragon_pbr_anim.vrx'),
    animation: {name: '01', delay: 0, loop: true, run: true},
    scale: [0.2, 0.2, 0.2],
    position: [0, -1.2, -2.3],
    type: 'VRX',
    shadow_width: 10.5,
    shadow_height: 10.5,
    spotlight_position_y: 19,
    lighting_mode: 'IBL',
    resources: [
      require('./object_dragon_anim/object_dragon_pbr_Base_Color.png'),
      require('./object_dragon_anim/object_dragon_pbr_Metallic.png'),
      require('./object_dragon_anim/object_dragon_pbr_Mixed_AO.png'),
      require('./object_dragon_anim/object_dragon_pbr_Normal_OpenGL.png'),
      require('./object_dragon_anim/object_dragon_pbr_Roughness.png'),
    ],
  },
  turkeyman_anim: {
    obj: require('./turkeyman_anim/turkeyman_anim.vrx'),
    animation: {name: '02', delay: 0, loop: true, run: true},
    scale: [0.1, 0.1, 0.1],
    position: [-0.1, 0, 0],
    type: 'VRX',
    shadow_width: 8,
    shadow_height: 3,
    spotlight_position_y: 9.2,
    shadowfarz: 12.3,
    resources: [
      require('./turkeyman_anim/turkeyman_diffuse.jpg'),
      require('./turkeyman_anim/turkeyman_normal.jpg'),
      require('./turkeyman_anim/turkeyman_specular.jpg'),
    ],
  },
  pug_animated: {
    img: require('./object_pug_animated/pug_img.png'),
    obj: require('./object_pug_animated/pug_animated.vrx'),
    animation: {name: 'Take 001', delay: 0, loop: true, run: true},
    scale: [0.1, 0.1, 0.1],
    position: [0, 0, 0],
    type: 'VRX',
    spotlight_position_y: 15.2,
    lighting_mode: 'IBL',
    resources: [
      require('./object_pug_animated/pug_body_diffuse.png'),
      require('./object_pug_animated/pug_body_normal.png'),
      require('./object_pug_animated/pug_body_specular.png'),
    ],
  },
  diving_360: {
    background: require('./360_diving.jpg'),
  },
  panorama: {
    background: require('./panorama.jpg')
  },
  grass: {
    background: require('./grass.jpg'),
  },
  lab: {
    background: require('./lab.jpg'),
  }
};
