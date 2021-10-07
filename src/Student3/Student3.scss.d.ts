declare namespace Student3ScssNamespace {
  export interface IStudent3Scss {
    myName: string;
  }
}

declare const Student3ScssModule: Student3ScssNamespace.IStudent3Scss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: Student3ScssNamespace.IStudent3Scss;
};

export = Student3ScssModule;
