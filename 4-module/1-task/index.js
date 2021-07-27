function makeFriendsList(friends) {
  const container = document.createElement('ul');
  friends.forEach((friend) => {
    const element = document.createElement('li');
    const content = `${friend.firstName}${friend.lastName}`;
    element.textContent = content;
    container.appendChild(element);
  });
  return container;
}
