import { Placeholder } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export function useData() {
  const { t } = useTranslation();

  return {
    // مجموعة البيانات المشتركة
    topnav: {
      call : t("customer service")
    },
    navbar: {
        name : t("name store"),
        card : t("card"),
        favorite : t("favorite"),
        login : t("log in"),
        logon : t("log on"),
        Placeholder : t("placeholder nav")
    },
    
    // كل section أو مكون ممكن تضيف namespace خاص فيه
  };
}
