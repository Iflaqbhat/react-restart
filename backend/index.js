const express =
  require("express");

const cors =
  require("cors");

const authRoutes =
  require("./routes/authRoutes");

const noteRoutes =
  require("./routes/noteRoutes");

const app = express();

app.use(cors());

app.use(express.json());


// ROUTES

app.use("/auth", authRoutes);

app.use("/notes", noteRoutes);


app.listen(3000, () => {

  console.log(
    "Server running on port 3000"
  );
});