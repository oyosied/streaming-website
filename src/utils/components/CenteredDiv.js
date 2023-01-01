const centereddivcss = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
  };

const CenteredDiv = (props) =>{
    return <div style={centereddivcss}>{props.children}</div>
}

export default CenteredDiv;