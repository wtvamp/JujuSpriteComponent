declare namespace Student6ScssNamespace {
  export interface IStudent6Scss {
    myName: string;
  }
}

declare const Student6ScssModule: Student6ScssNamespace.IStudent6Scss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: Student6ScssNamespace.IStudent6Scss;
};

export = Student6ScssModule;
