import { IChildren } from "../types/IChildren";
import { DictionaryContextProvider } from "./DictionaryContext";
import { PrintPDFContextProvider } from "./PrintPDFContext";
import { UserContextProvider } from "./UserContext";

export const ContextProvider = ({ children }: IChildren) => {
  return (
    <UserContextProvider>
      <DictionaryContextProvider>
        <PrintPDFContextProvider>
          {children}
        </PrintPDFContextProvider>
      </DictionaryContextProvider>
    </UserContextProvider>
  )
}
