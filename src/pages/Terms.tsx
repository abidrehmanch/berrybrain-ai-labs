import LegalDocument from "@/components/LegalDocument";
import { useLanguage } from "@/i18n/LanguageContext";

const Terms = () => {
  const { t } = useLanguage();

  return <LegalDocument {...t.legal.terms} />;
};

export default Terms;