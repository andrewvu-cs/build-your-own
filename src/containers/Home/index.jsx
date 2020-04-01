import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useStoreState } from "pullstate";
import { store } from "../../store";
import Journey from "./../../components/Journey";

function Home() {
  const groups = useStoreState(store, s => s.groups);
  const history = useHistory();

  const onChoiceHandler = e => {
    const selectedGroup = groups[e.target.value - 1];
    store.update(s => {
      s.journey = selectedGroup.groupName;
      s.order = selectedGroup.displayOrder.split(",");
    });
    console.log(store);
    history.push(`/size?groupID=${e.target.value}`);
  };



  return (
    <div>
      <h1>Welcome to the Bosch Dishwasher Selector Tool</h1>
      <p>
        You probably have a wishlist in mind when it comes to your next
        dishwasher for you, first choose which of these for options is most
        important to you.
      </p>
      {groups.map(group => (
        <Journey
          key={group.groupID}
          groupID={group.groupID}
          description={group.description}
          clicked={onChoiceHandler}
        />
      ))}
    </div>
  );
}

export default Home;
