declare namespace JujuspritecomponentScssNamespace {
  export interface IJujuspritecomponentScss {
    myName: string;
  }
}

declare const JujuspritecomponentScssModule: JujuspritecomponentScssNamespace.IJujuspritecomponentScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: JujuspritecomponentScssNamespace.IJujuspritecomponentScss;
};

export = JujuspritecomponentScssModule;
