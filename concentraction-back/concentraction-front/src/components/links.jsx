const variantMaps = {
  primary: "",
  secondary: "",
};

export function Link({ onClick, variant, children }) {
  const linkLayoutClasses = "";

  const finalLinkClasses = `${linkLayoutClasses} ${
    variantMaps[variant.toLowerCase()]
  }`;

  return (
    <a href="#" role="button" onClick={onClick} className={finalLinkClasses}>
      {children}
    </a>
  );
}
