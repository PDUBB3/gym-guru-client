const BuddyCard = ({ buddy }) => {
  return (
    <div className="buddy-card">
      <img
        src="https://images.unsplash.com/photo-1488228469209-c141f8bcd723?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt="buddy"
        height="90"
        width="90"
        className="buddy-image"
      ></img>
      <h3>Alice Green</h3>
      <div>Leeds</div>
    </div>
  );
};

export default BuddyCard;
