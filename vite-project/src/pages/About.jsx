import { useNavigate } from "react-router-dom"
const About = () => {
    const navigate = useNavigate();

    return(
        <>
        <h1>About</h1>
        <button onClick={()=>{navigate("/")}}>Vai alla pagina Home</button>
        </>
    )
}

export default About