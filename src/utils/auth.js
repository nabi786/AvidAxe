

export const isAuthenticated = () => {
    const token = localStorage.getItem('sb-myxiklaowgdbpvlonfkf-auth-token');
    console.log("this is token ", token)
    return !!token; // Return true if the token exists, false otherwise
}