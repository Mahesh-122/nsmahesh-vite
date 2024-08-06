import React from "react";

const StyleContext = React.createContext({ isDark: false, changeTheme: () => {} });

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;