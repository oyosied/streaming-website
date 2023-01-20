
const ImageContainer = (props) => {

	return <img style={props.imageStyle} src={require('../../images/'+props.imagePath)} alt='' />
}

export default ImageContainer;