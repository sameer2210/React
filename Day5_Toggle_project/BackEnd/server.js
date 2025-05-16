import app from "./src/app";
import connectDB from "./src/db/db";

connectDB();

app.listen(3000, () => {
  console.log(`server is connected on port 3000`);
});
