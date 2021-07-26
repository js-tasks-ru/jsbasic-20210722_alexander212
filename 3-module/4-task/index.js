function showSalary(users, age) {
  const filteredUsers = users.filter((user) => user.age <= age);
  return filteredUsers.reduce((acc, user) => {
    return [...acc, `${user.name}, ${user.balance}\n`];
  }, []).join('').trim();
}
