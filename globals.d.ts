// Declarações para permitir importação de arquivos CSS/SCSS em TypeScript
// - `*.module.css` terá tipagem de objeto (CSS modules)
// - padrões `*.css`, `*.scss`, `*.sass` também são aceitos

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.css";
declare module "*.scss";
declare module "*.sass";
