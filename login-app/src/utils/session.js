export const setUserSession = (token, user) => {
    localStorage.setItem('token', token)
  }
  
  export const getToken = () => {
    if(localStorage.getItem('token') !== null) 
      return true;
    else
      return false;
  }
  
  export const removeUserSession = () => {
    localStorage.removeItem('token');
  }