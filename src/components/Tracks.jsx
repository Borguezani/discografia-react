import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { DeleteDialog } from "./DeleteDialog";

export function Tracks({track, setSearchTracks }){
    return(
        <div xs={2} sm={4} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={track.link_image}
                      title="Album Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {track.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Link da Música:{" "}
                        <a
                          href={track.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {track.title}
                        </a>
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <DeleteDialog Id={track.id} config={"Música"} cleanInput={setSearchTracks}/>
                    </CardActions>
                  </Card>
                </div>
    )
}