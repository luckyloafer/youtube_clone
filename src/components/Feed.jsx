import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { fetchFromAPI } from "./utils/fetchFromAPI"
import  {Videos,Sidebar}  from "./"

const Feed = () => {

  const [seletedCategory,setSelectedCategory]=useState('New');
  const [videos,setVideos]= useState([]);

  useEffect(()=>{
    // setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${seletedCategory}`)
    .then((data) => setVideos(data.items))
  },[seletedCategory]);

 

  return (
    <Stack
      sx={{flexDirection:{sx:'column', md:'row'}}}
    >
      <Box
        sx={{height:{sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}
      >
        <Sidebar seletedCategory={seletedCategory}  
          setSelectedCategory={setSelectedCategory}  
          />

        <Typography className="copyright" variant="body2" sx={{mt:1.5,color:'#fff'}}>
            Copyright
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto', height:'90vh' ,flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
          {seletedCategory} <span style={{color:'#F31503'}}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed