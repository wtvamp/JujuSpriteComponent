declare namespace Student2ScssNamespace {
  export interface IStudent2Scss {
    myName: string;
  }
}

declare const Student2ScssModule: Student2ScssNamespace.IStudent2Scss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: Student2ScssNamespace.IStudent2Scss;
};

export = Student2ScssModule;
