const ImageContainer = (props) => {
  return (
    <img
      className={props.className}
      src={require("../../images/" + props.imagePath)}
      alt=""
    />
  );
};

export default ImageContainer;
