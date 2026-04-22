import LegalDocument from "@/components/LegalDocument";
import { useLanguage } from "@/i18n/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();

  return <LegalDocument {...t.legal.privacy} />;
};

export default Privacy;