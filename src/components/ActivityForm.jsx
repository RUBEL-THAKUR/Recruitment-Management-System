import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  TextField,
  FormControl,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addActivity } from "../services/api";

const ActivityForm = ({ onActivitiyAdded }) => {
  const [activity, setActivity] = useState({
    type: "RUNNING",
    duration: "",
    caloriesBurned: "",
    additionalMetrics: {
      distance: "",
      steps: "",
      heartRate: "",
    },
  });

  // 🔹 handle change for additionalMetrics
  const handleMetricChange = (key, value) => {
    setActivity({
      ...activity,
      additionalMetrics: { ...activity.additionalMetrics, [key]: value },
    });
  };

  // 🔹 submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addActivity(activity);
      onActivitiyAdded();

      // reset form
      setActivity({
        type: "RUNNING",
        duration: "",
        caloriesBurned: "",
        additionalMetrics: { distance: "", steps: "", heartRate: "" },
      });
    } catch (error) {
      console.error("Error while adding activity:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mb: 4,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        Add New Activity
      </Typography>

      {/* 🔸 Activity Type */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Activity Type</InputLabel>
        <Select
          value={activity.type}
          onChange={(e) => setActivity({ ...activity, type: e.target.value })}
        >
          <MenuItem value="RUNNING">Running</MenuItem>
          <MenuItem value="WALKING">Walking</MenuItem>
          <MenuItem value="CYCLING">Cycling</MenuItem>
          <MenuItem value="SWIMMING">Swimming</MenuItem>
          <MenuItem value="YOGA">Yoga</MenuItem>
        </Select>
      </FormControl>

      {/* 🔸 Duration */}
      <TextField
        fullWidth
        label="Duration (Minutes)"
        type="number"
        sx={{ mb: 2 }}
        value={activity.duration}
        onChange={(e) =>
          setActivity({ ...activity, duration: e.target.value })
        }
      />

      {/* 🔸 Calories */}
      <TextField
        fullWidth
        label="Calories Burned"
        type="number"
        sx={{ mb: 2 }}
        value={activity.caloriesBurned}
        onChange={(e) =>
          setActivity({ ...activity, caloriesBurned: e.target.value })
        }
      />

      {/* 🔸 Additional Metrics Section */}
      <Typography
        variant="subtitle1"
        sx={{ mt: 2, mb: 1, fontWeight: "bold", color: "#555" }}
      >
        Additional Metrics
      </Typography>

      <TextField
        fullWidth
        label="Distance (km)"
        type="number"
        sx={{ mb: 2 }}
        value={activity.additionalMetrics.distance}
        onChange={(e) => handleMetricChange("distance", e.target.value)}
      />

      <TextField
        fullWidth
        label="Steps Count"
        type="number"
        sx={{ mb: 2 }}
        value={activity.additionalMetrics.steps}
        onChange={(e) => handleMetricChange("steps", e.target.value)}
      />

      <TextField
        fullWidth
        label="Heart Rate (bpm)"
        type="number"
        sx={{ mb: 2 }}
        value={activity.additionalMetrics.heartRate}
        onChange={(e) => handleMetricChange("heartRate", e.target.value)}
      />

      {/* 🔸 Submit Button */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Activity
      </Button>
    </Box>
  );
};

export default ActivityForm;


//  import { Box, Button, duration, InputLabel, MenuItem, TextField,FormControl,Select, Typography } from '@mui/material'
// import React, { useState } from "react";
// import { addActivity } from '../services/api';


// const ActivityForm =({onActivitiyAdded}) =>{

//     const [activity, setActivity] = useState({
//         type: "RUNNING",duration: '',caloriesBurned: '',
//         additionalMetrics: {
//             distance: "",
//             heartRate: "",
//             steps: "",
//             heartRate: ""
//         }

//     })
 
//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//         await addActivity(activity);
//         onActivitiyAdded();
//         setActivity({ type: "RUNNING", duration: '', caloriesBurned: '', additionalMetrics: {
//             distance: "",
//             heartRate: "",
//             steps: "",
//             heartRate: ""
//         }});


//     }catch(error){
//         console.error('error'); 

//     }

// }

     
//     return(
//         <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
//         <FormControl fullWidth sx={{ mb: 2 }}>
//             <InputLabel>Activity Type</InputLabel>
//             <Select
//                 value={activity.type}
//                 onChange={(e) => setActivity({ ...activity, type: e.target.value })}
//             >
//                 <MenuItem value="RUNNING">Running</MenuItem>
//                 <MenuItem value="WALKING">Walking</MenuItem>
//                 <MenuItem value="CYCLING">Cycling</MenuItem>
//                 <MenuItem value="SWIMMING">Swimming</MenuItem>
//                 <MenuItem value="YOGA">Yoga</MenuItem>
//             </Select>
//             </FormControl>


//         <TextField fullWidth label="Duration (Minutes)"
//         type='number'
//         sx={{mb:2}}
//         value={activity.duration}
//         onChange={(e) => setActivity({...activity,duration: e.target.value})}/>

//          <TextField fullWidth label="Calories Burned"
//         type='number'
//         sx={{mb:2}}
//         value={activity.caloriesBurned}
//         onChange={(e) => setActivity({...activity,caloriesBurned: e.target.value})}/>

//          <Typography
//         variant="subtitle1"
//         sx={{ mt: 2, mb: 1, fontWeight: "bold", color: "#555" }}
//       >
//         Additional Metrics
//       </Typography>

//       <TextField
//         fullWidth
//         label="Distance (km)"
//         type="number"
//         sx={{ mb: 2 }}
//         value={activity.additionalMetrics.distance}
//         onChange={(e) => handleMetricChange("distance", e.target.value)}
//       />

//       <TextField
//         fullWidth
//         label="Steps Count"
//         type="number"
//         sx={{ mb: 2 }}
//         value={activity.additionalMetrics.steps}
//         onChange={(e) => handleMetricChange("steps", e.target.value)}
//       />

//       <TextField
//         fullWidth
//         label="Heart Rate (bpm)"
//         type="number"
//         sx={{ mb: 2 }}
//         value={activity.additionalMetrics.heartRate}
//         onChange={(e) => handleMetricChange("heartRate", e.target.value)}
//       />


//         <Button type='submit' variant='contained'>
//              Add Activity
//         </Button>

//     </Box>

//     )
// }

// export default ActivityForm