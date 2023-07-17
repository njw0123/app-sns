import { useRecoilValue } from "recoil";
import { jwtState } from "..";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../component/NavBar";

function IndexPage() {
    const jwt = useRecoilValue(jwtState);
    const navigate = useNavigate();
    useEffect(()=>{
        if (jwt) {
            navigate("/home")
        }
    },[]);
    return (
        <div className="container mt-5 pt-5">
            <NavBar/>
        </div>
    );
}

export default IndexPage;