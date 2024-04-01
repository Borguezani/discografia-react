import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export function Albums({ album, handleAlbums}){
    return(
        <div xs={2} sm={4} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={album.link_image}
                      title="Album Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {album.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Ano: {album.year}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {album.artist}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        size="small"
                        onClick={() => handleAlbums(album.id, album.title)}
                      >
                        Ver Álbum
                      </Button>
                    </CardActions>
                  </Card>
                </div>
    )
}