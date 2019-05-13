import * as React from 'react';
import styles from './ImageViewerExposureDrawer.css';
import { Drawer } from '@material-ui/core';
import {
  BrightnessSlider,
  ChannelSelection,
  ContrastSlider,
  ImageHistogram
} from '../image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

const ImageViewerExposureDrawer = (props: any) => {
  const {
    onClose,
    open,
    src,
    setBrightness,
    brightness,
    setContrast,
    contrast,
    setUnselectedChannels,
    unselectedChannels
  } = props;

  const classes = useStyles();

  return (
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      anchor="right"
      style={{ backgroundColor: '#202124' }}
      variant={'persistent'}
      onClose={onClose}
      open={open}
    >
      <ImageHistogram channels={unselectedChannels} src={src} />

      <ChannelSelection
        setUnselectedChannels={setUnselectedChannels}
        unselectedChannels={unselectedChannels}
      />

      <BrightnessSlider brightness={brightness} setBrightness={setBrightness} />
      <ContrastSlider contrast={contrast} setContrast={setContrast} />
    </Drawer>
  );
};

export default ImageViewerExposureDrawer;
