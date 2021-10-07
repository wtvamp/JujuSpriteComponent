declare namespace Student1ScssNamespace {
  export interface IStudent1Scss {
    myName: string;
  }
}

declare const Student1ScssModule: Student1ScssNamespace.IStudent1Scss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: Student1ScssNamespace.IStudent1Scss;
};

export = Student1ScssModule;
