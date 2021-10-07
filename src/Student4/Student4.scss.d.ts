declare namespace Student4ScssNamespace {
  export interface IStudent4Scss {
    myName: string;
  }
}

declare const Student4ScssModule: Student4ScssNamespace.IStudent4Scss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: Student4ScssNamespace.IStudent4Scss;
};

export = Student4ScssModule;
