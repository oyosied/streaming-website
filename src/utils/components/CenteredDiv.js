const centeredDivCss = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",

  };

const CenteredDiv = (props) =>{
    return <div style={centeredDivCss}>{props.children}</div>
}

export default CenteredDiv;