

const getLoginUserEmail = () => {
  const email = localStorage.getItem('email');
  return {email}
};

export default getLoginUserEmail;