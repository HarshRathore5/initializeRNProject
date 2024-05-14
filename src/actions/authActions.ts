

export const loginUser = async (username: string, password: string) => {
    // API call to login endpoint
    // Return user and token data
    return { user: username, token: password };
  };