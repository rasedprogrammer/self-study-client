import React, { createContext } from "react";

export const AuthContext = createContext();

const user = { displayName: "Rased" };

const authInfo = { user };

const AuthProvider = ({ children }) => {
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
