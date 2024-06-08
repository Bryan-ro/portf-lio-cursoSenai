declare module "@srexi/purecounterjs" {
    interface PureCounterOptions {
      selector: string;
      start?: number;
      end?: number;
      duration?: number;
      delay?: number;
      once?: boolean;
      pulse?: boolean;
      decimals?: number;
      legacy?: boolean;
      filesizing?: boolean;
      currency?: boolean;
      formater?: string;
      separator?: boolean;
    }
  
    class PureCounter {
      constructor(options: PureCounterOptions);
    }
  
    export = PureCounter;
  }
