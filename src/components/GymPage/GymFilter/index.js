// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
// });

// const GymFilter = () => {
//   const classes = useStyles();
//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setIsOpen(open);
//   };

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)}>Filter</Button>
//       <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
//         <div>Hello</div>
//       </Drawer>
//     </div>
//   );
// };

// export default GymFilter;
