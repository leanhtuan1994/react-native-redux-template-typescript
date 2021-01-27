import React from "react";
import ApiService from "services/ApiService";

type ApiContextType = {
  apiService: ApiService;
};

const ApiServiceContext = React.createContext<ApiContextType | string>(
  "useApiService should be used inside ApiServiceProvider",
);

export const ApiServiceProvider: React.FC = ({ children }) => {
  const token = "";
  const [apiService, setApiService] = React.useState<ApiService>(
    new ApiService(),
  );

  React.useEffect(() => {
    setApiService(new ApiService());
  }, [token]);

  const value: ApiContextType = {
    apiService,
  };

  return <ApiServiceContext.Provider {...{ value, children }} />;
};

export const useApiService = (): ApiContextType => {
  const context = React.useContext(ApiServiceContext);
  if (typeof context === "string") {
    throw new Error(context);
  }
  return context;
};
