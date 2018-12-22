import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ImageStyle = {borderRadius: '5px'};

const PreviewCompatibleImage = ({imageInfo}) => {
  if (Boolean(imageInfo.image) && Boolean(imageInfo.image.childImageSharp)) {
    return (
      <Img
        style={ImageStyle}
        fluid={imageInfo.image.childImageSharp.fluid}
        alt={imageInfo.alt}
      />
    );
  } else if (imageInfo.childImageSharp) {
    return (
      <Img
        style={ImageStyle}
        fluid={imageInfo.childImageSharp.fluid}
        alt={imageInfo.alt}
      />
    );
  } else if (Boolean(imageInfo.image) && typeof imageInfo.image === 'string') {
    return <img style={ImageStyle} src={imageInfo.image} alt={imageInfo.alt} />;
  }
  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
