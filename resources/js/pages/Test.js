import { Typography, Button, Box } from "@mui/material";
import AddressInput from "../components/AirportInput";
const Home = () => {

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <main>
        <form noValidate onSubmit={onSubmit} autoComplete="off">
          <AddressInput label="Airport" />
          <Box mt={2}>
            <Button type="submit" size="large" variant="contained">
              next
            </Button>
          </Box>
        </form>
    </main>
  );
};

export default Home;
