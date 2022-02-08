type Like = {
  username: string;
  displayName: string;
};
// add displayname of type string
type Share = {
  username: string;
  displayName: string;
};

// add a type to the function below and use a union
function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);