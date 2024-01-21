routerMovies.get("/", (req, res) => {
    const movies = [
      {
        title: "pesadillas antes de navidad",
      },
      {
        title: "alien",
      },
    ];
    res.send(movies);
  });
  routerMovies.get("/title/:title", (req, res) => {
    const movies = [
      {
        title: "pesadillas antes de navidad",
      },
      {
        title: "alien",
      },
    ];
    console.log(req.params)
  
    res.send(movies);
  });
  routerMovies.get("/array", (req, res) => {
    const movies = [
      {
        title: "pesadillas antes de navidad",
      },
      {
        title: "alien",
      },
    ];
    console.log(req.params);
  
    res.send("este es la devolucion de mi endpoint array");
  });
  
  app.use("/movies", routerMovies);
  
  app.listen(PORT, () =>
    console.log(`escuchando en el puerto http://localhost:${PORT}`)
  );