import React from "react";
import { useTranslation } from "react-i18next";
import Select, { SingleValue } from "react-select";
import Flag from "react-flagkit";

const languages = [
  { code: "fr", label: "Français", country: "FR" },
  { code: "en", label: "English", country: "US" },
  { code: "es", label: "Español", country: "ES" },
  { code: "it", label: "Italiano", country: "IT" },
  { code: "zh", label: "中文", country: "CN" },
  { code: "ja", label: "日本語", country: "JP" },
];

// Type pour les options de react-select
type LanguageOption = {
  value: string;
  label: string;
  country: string;
};

const options: LanguageOption[] = languages.map((lang) => ({
  value: lang.code,
  label: lang.label,
  country: lang.country,
}));

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (selected: SingleValue<LanguageOption>) => {
    if (selected) {
      i18n.changeLanguage(selected.value);
    }
  };

  // Custom rendering des options avec drapeau
  const formatOptionLabel = ({ label, country }: LanguageOption) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Flag country={country} size={24} />
      <span>{label}</span>
    </div>
  );

  return (
    <div style={{ width: "200px" }}>
      <Select
        value={options.find((o) => o.value === i18n.language)}
        onChange={handleChange}
        options={options}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default LanguageSelector;
