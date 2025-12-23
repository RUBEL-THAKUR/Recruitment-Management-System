
import { Box, Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { setCredentials } from "./store/authSlice";
import ActivityForm from "./components/ActivityForm";
import ActivityDetail from "./components/ActivityDetail";
import ActivityList from "./components/ActivityList";


const ActivitiesPage = () => {
  return(<Box component ="section" sx={{ p:2, border: '1px dashed grey'}}>
  <ActivityForm onActivitiyAdded ={() => window.location.reload()} />
  <ActivityList/>
  </Box>)


}

function App() {
  const { token, tokenData, logIn, logOut, isAuthenticated } = useContext(AuthContext);
  const dispatcch = useDispatch();
  const [authready, setAuthReady] = useState(false);

  useEffect(() => {
    if(token){
      dispatcch(setCredentials({token,user: tokenData}));
      setAuthReady(true);
    }
  },[token,tokenData,dispatcch]);

  return (
    <Router>
      {!token ? (
        <Box 
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          scrollSnapAlign: "center",
          justifyContent: "center",
          textAlign: "center",
        }}> 
        <Typography variant="h4" gutterBottom>
          Welcome to the Fitness tracker App  </Typography>
          <Typography variant="subtitle1" sx={{ mb :3}}>
          Please Login TO access the Activities </Typography>
          
      <Button
  variant="contained"
  color="primary"
  size="large"
  sx={{ width: "auto", alignSelf: "center" }}
  onClick={() => logIn()}
>
  LOGIN
</Button>
      </Box>
      ) : (
        // <div>
        //   <pre>{JSON.stringify(tokenData,null,2)}</pre> 
        //   <pre>{JSON.stringify(token,null,2)}</pre> 
        //   </div>

        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
          <Button variant="contained" color="secondary" onClick={logOut}>
            Logout
          </Button>
      <Routes>
        <Route path = "/activities" element = {<ActivitiesPage/>}/>
        <Route path = "/activities/:id" element = {<ActivityDetail/>}/>

        <Route path = "/" element = {token ? <Navigate to ="/activities" replace/> : <div> Welcome! Please Login.</div>} />
      </Routes>
    </Box>
      )}
    </Router>
  )
}
export default App