declare namespace Student5ScssNamespace {
  export interface IStudent5Scss {
    myName: string;
  }
}

declare const Student5ScssModule: Student5ScssNamespace.IStudent5Scss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: Student5ScssNamespace.IStudent5Scss;
};

export = Student5ScssModule;
