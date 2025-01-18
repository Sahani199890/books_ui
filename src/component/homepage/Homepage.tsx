import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IndividualIntervalsExample from "./Corousal";
import "./homepage.css";
import GreetingUser from "./GreetingUser";

const Homepage = () => {
  document.title = "Homepage"; // Capitalized "Homepage" for consistency

  // const dispatch = useDispatch();
  // const booksList = useSelector((state) => state.booksReducer.response); // You can remove `: any` for better type inference

  // useEffect(() => {
  //   dispatch({ type: "ONLINE_BOOKS_LIST" }); // Ensure the action type is a string
  // }, [dispatch]);

  return (
    <div className="container">
      <div style={{ height: "100vh" }}>
        {" "}
        {/* Changed to object syntax */}
        <iframe
          src="https://my.spline.design/roomrelaxingcopy-fa1f0bea95dceb453a0f8a95002cf6a7/"
          width="100%"
          height="100%"
          title="3D Relaxing Room" // Added title for accessibility
          frameBorder="0" // Optional for better rendering
        ></iframe>
      </div>
      <section className="users-section">
        <GreetingUser userName="Abhishek Sahani" />
      </section>
      <section className="corousal-section">
        <IndividualIntervalsExample />
      </section>
    </div>
  );
};

export default Homepage;
