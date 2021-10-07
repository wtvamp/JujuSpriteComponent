declare namespace Student7ScssNamespace {
  export interface IStudent7Scss {
    myName: string;
  }
}

declare const Student7ScssModule: Student7ScssNamespace.IStudent7Scss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: Student7ScssNamespace.IStudent7Scss;
};

export = Student7ScssModule;
